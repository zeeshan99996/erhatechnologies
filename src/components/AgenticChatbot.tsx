import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  X,
  Send,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Loader2,
  Bot,
  User,
  Sparkles,
} from "lucide-react";

const API_BASE =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
    ? "http://localhost:8000/api"
    : "/api";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

interface ConvMessage {
  role: "user" | "assistant";
  content: string;
}

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

// Enhanced Markdown & Table Formatter Component for Chatbot Messages
function FormattedMessage({ text }: { text: string }) {
  // Pre-process text: replace <br>, <br/>, \r\n with \n
  let cleanText = text.replace(/<br\s*\/?>/gi, "\n").replace(/\r\n/g, "\n");

  // Parse markdown tables if any exist in the response
  const lines = cleanText.split("\n");
  const processedBlocks: { type: "heading" | "subheading" | "bullet" | "table_row" | "text" | "divider"; content: string }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Table divider line |---|---|
    if (/^\|[\s\-:|]+\|$/.test(line)) {
      continue;
    }

    // Markdown Table Row e.g. | Package | Cost | Deliverables |
    if (line.startsWith("|") && line.endsWith("|")) {
      const cells = line.split("|").map((c) => c.trim()).filter((c) => c.length > 0);
      if (cells.length >= 2) {
        processedBlocks.push({
          type: "table_row",
          content: cells.join(" — "),
        });
        continue;
      }
    }

    if (line.startsWith("### ")) {
      processedBlocks.push({ type: "heading", content: line.replace(/^###\s+/, "") });
    } else if (line.startsWith("## ") || line.startsWith("# ")) {
      processedBlocks.push({ type: "subheading", content: line.replace(/^#{1,2}\s+/, "") });
    } else if (/^[\bullet\-\*]\s+/.test(line) || /^\d+\.\s+/.test(line)) {
      processedBlocks.push({ type: "bullet", content: line.replace(/^([\bullet\-\*]|\d+\.)\s+/, "") });
    } else if (line === "---" || line === "***") {
      processedBlocks.push({ type: "divider", content: "" });
    } else {
      processedBlocks.push({ type: "text", content: line });
    }
  }

  return (
    <div className="space-y-2 text-sm leading-relaxed">
      {processedBlocks.map((block, idx) => {
        if (block.type === "heading") {
          return (
            <h4 key={idx} className="font-bold text-cyan-300 text-xs uppercase tracking-wider mt-3 mb-1 flex items-center gap-1.5 border-b border-cyan-500/20 pb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              {renderFormattedText(block.content)}
            </h4>
          );
        }

        if (block.type === "subheading") {
          return (
            <h3 key={idx} className="font-bold text-cyan-400 text-sm mt-3 mb-1">
              {renderFormattedText(block.content)}
            </h3>
          );
        }

        if (block.type === "table_row") {
          return (
            <div key={idx} className="bg-slate-950/80 border border-cyan-500/30 rounded-xl p-2.5 my-1 text-xs shadow-inner">
              <div className="text-cyan-200 font-medium">{renderFormattedText(block.content)}</div>
            </div>
          );
        }

        if (block.type === "bullet") {
          return (
            <div key={idx} className="flex items-start gap-2 pl-1 my-0.5">
              <span className="text-cyan-400 text-xs shrink-0 mt-0.5">▸</span>
              <span className="flex-1 text-slate-200">{renderFormattedText(block.content)}</span>
            </div>
          );
        }

        if (block.type === "divider") {
          return <div key={idx} className="my-2 border-t border-cyan-500/20" />;
        }

        return (
          <p key={idx} className="text-slate-200">
            {renderFormattedText(block.content)}
          </p>
        );
      })}
    </div>
  );
}

// Render bold **text**, italics *text*, and code `text`
function renderFormattedText(str: string) {
  // Split on bold **text**
  const parts = str.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-cyan-200">
          {part.slice(2, -2)}
        </strong>
      );
    }
    // Handle inline code `code`
    if (part.includes("`")) {
      const codeParts = part.split(/(`.*?`)/g);
      return codeParts.map((sub, j) => {
        if (sub.startsWith("`") && sub.endsWith("`")) {
          return (
            <code key={j} className="bg-cyan-950 px-1.5 py-0.5 rounded text-cyan-300 font-mono text-[11px] border border-cyan-800">
              {sub.slice(1, -1)}
            </code>
          );
        }
        return sub;
      });
    }
    return part;
  });
}

export function AgenticChatbot() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: 'Salam! 👋 Welcome to **Erha Technologies**.\n\nI am your AI Assistant. Ask me anything about our **Services**, **Pricing Packages**, **Projects**, or **Team** — or try commands like *"Show pricing"* or *"Open contact page"*!',
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const [continuousVoice, setContinuousVoice] = useState(false);
  const [convHistory, setConvHistory] = useState<ConvMessage[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any | null>(null);
  const finalTranscriptRef = useRef("");
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ── TTS ──────────────────────────────────────────────────────────
  const speak = useCallback(
    (text: string) => {
      if (!ttsEnabled) {
        if (continuousVoice)
          setTimeout(() => {
            const btn = document.getElementById("hidden-mic-restart");
            if (btn) btn.click();
          }, 500);
        return;
      }
      window.speechSynthesis.cancel();

      const clean = text
        .replace(/\*\*/g, "")
        .replace(/\*/g, "")
        .replace(/#{1,6}\s/g, "")
        .replace(/https?:\/\/\S+/g, "link")
        .replace(/\n+/g, ". ")
        .replace(/[[\]()]/g, "")
        .replace(/`/g, "")
        .trim();
      if (!clean) return;

      const isChinese = /[一-龥]/.test(clean);
      const utter = new SpeechSynthesisUtterance(clean);
      if (isChinese) utter.lang = "zh-CN";
      const PRIORITY = isChinese
        ? [
            "Google 普通话",
            "zh-CN",
            "zh-TW",
            "zh-HK",
            "Tingting",
            "Microsoft YaHei",
            "Chinese",
            "zh",
          ]
        : ["Google हिन्दी", "Google Hindi", "hi-IN", "ur-PK", "en-IN", "en-GB"];

      const doSpeak = () => {
        const voices = window.speechSynthesis.getVoices();
        let picked: SpeechSynthesisVoice | null = null;
        for (const p of PRIORITY) {
          picked = voices.find((v) => v.name.includes(p) || v.lang === p) ?? null;
          if (picked) break;
        }
        if (picked) {
          utter.voice = picked;
          const south = picked.lang.startsWith("ur") || picked.lang.startsWith("hi");
          utter.rate = south ? 0.92 : 1.0;
          utter.pitch = south ? 1.05 : 1.0;
        } else if (voices.length > 0) {
          utter.voice = voices[0];
        }
        utter.onend = () => {
          if (continuousVoice) {
            setTimeout(() => {
              const btn = document.getElementById("hidden-mic-restart");
              if (btn) btn.click();
            }, 300);
          }
        };
        window.speechSynthesis.speak(utter);
      };

      if (window.speechSynthesis.getVoices().length === 0) {
        // Sometimes onvoiceschanged never fires on Windows if voices are delayed.
        const fallbackTimer = setTimeout(() => {
          doSpeak();
          window.speechSynthesis.onvoiceschanged = null;
        }, 1000);

        window.speechSynthesis.onvoiceschanged = () => {
          clearTimeout(fallbackTimer);
          doSpeak();
          window.speechSynthesis.onvoiceschanged = null;
        };
      } else {
        doSpeak();
      }
    },
    [ttsEnabled, continuousVoice, isRecording],
  );

  // ── Agent Action Handler ──────────────────────────────────────────
  const handleAction = useCallback(
    (action: { tool: string; params: Record<string, string> }) => {
      switch (action.tool) {
        case "navigate_to_page":
          navigate({ to: action.params.page as "/" });
          break;

        case "fill_contact_form": {
          // Navigate to /contact then dispatch fill event
          navigate({ to: "/contact" });
          setTimeout(() => {
            window.dispatchEvent(new CustomEvent("erha:fill-contact", { detail: action.params }));
          }, 600);
          break;
        }

        case "change_theme": {
          const root = document.documentElement;
          if (action.params.theme === "light") {
            root.style.setProperty("--background", "255 255 255");
            root.style.setProperty("--foreground", "10 10 10");
            root.style.filter = "invert(0)";
            // Simple invert trick for dark → light
            document.body.style.background = "#f8f8f8";
            document.body.style.color = "#111";
          } else {
            document.body.style.background = "";
            document.body.style.color = "";
            root.style.removeProperty("--background");
            root.style.removeProperty("--foreground");
          }
          break;
        }

        case "filter_projects": {
          navigate({ to: "/projects" });
          setTimeout(() => {
            window.dispatchEvent(
              new CustomEvent("erha:filter-projects", { detail: { tag: action.params.tag } }),
            );
          }, 600);
          break;
        }

        case "highlight_section": {
          const el =
            document.getElementById(`section-${action.params.section}`) ||
            document.querySelector(`[data-section="${action.params.section}"]`);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            el.style.transition = "box-shadow 0.4s";
            el.style.boxShadow = "0 0 0 3px var(--neon-cyan), 0 0 40px rgba(0,255,255,0.3)";
            el.style.borderRadius = "16px";
            setTimeout(() => {
              el.style.boxShadow = "";
              el.style.borderRadius = "";
            }, 2500);
          }
          break;
        }
      }
    },
    [navigate],
  );

  // ── Send Message ─────────────────────────────────────────────────
  const handleSend = useCallback(
    async (overrideText?: string) => {
      const text = (overrideText ?? input).trim();
      if (!text || isLoading) return;

      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      finalTranscriptRef.current = "";

      const userMsg: Message = {
        id: Date.now().toString(),
        sender: "user",
        text: text,
      };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsLoading(true);

      try {
        const newHistory: ConvMessage[] = [...convHistory, { role: "user", content: text }];
        setConvHistory(newHistory);

        const res = await fetch(`${API_BASE}/chat/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: newHistory, has_vision: false }),
        });

        const data = await res.json();
        const reply: string = data.reply || "I apologize, I could not process your query at this moment.";

        const botMsg: Message = { id: Date.now().toString() + "bot", sender: "bot", text: reply };
        setMessages((prev) => [...prev, botMsg]);

        let historyReply = reply;
        if (data.action) {
          historyReply = `[SYSTEM MEMORY: Executed '${data.action.tool}'] ${reply}`;
        }
        setConvHistory((prev) => [...prev, { role: "assistant", content: historyReply }]);

        speak(reply);
        if (data.action) handleAction(data.action);
      } catch (err) {
        console.error("[Erha AI] Error:", err);
        const errMsg: Message = {
          id: Date.now().toString() + "err",
          sender: "bot",
          text: "⚠️ Could not reach the AI backend. Please make sure the Python server is running on port 8000.",
        };
        setMessages((prev) => [...prev, errMsg]);
      } finally {
        setIsLoading(false);
      }
    },
    [input, isLoading, convHistory, speak, handleAction],
  );

  // ── Speech Recognition ───────────────────────────────────────────
  const startRecording = useCallback(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      alert("Voice input not supported. Please use Chrome.");
      return;
    }

    window.speechSynthesis.cancel();
    finalTranscriptRef.current = "";

    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }

    const recognition = new SR();
    recognition.continuous = true;
    recognition.interimResults = true;
    // Dynamically select language based on conversation context (Chinese vs English/Urdu)
    const hasChineseInHistory = convHistory.some(
      (m) => typeof m.content === "string" && /[一-龥]/.test(m.content),
    );
    recognition.lang = hasChineseInHistory ? "zh-CN" : "en-IN";

    recognition.onresult = (event: any) => {
      let interim = "";
      let newFinal = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) newFinal += event.results[i][0].transcript;
        else interim += event.results[i][0].transcript;
      }
      if (newFinal) finalTranscriptRef.current += newFinal;
      const display = finalTranscriptRef.current + interim;
      setInput(display);

      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);

      // Always auto-send on silence when recording is active
      if (display.trim()) {
        silenceTimerRef.current = setTimeout(() => {
          const t = (finalTranscriptRef.current + interim).trim();
          if (t) {
            stopRecording();
            handleSend(t);
          }
        }, 4500); // Increased to 4.5 seconds to allow longer pauses
      }
    };

    recognition.onerror = (e: any) => {
      if (e.error !== "no-speech") {
        setIsRecording(false);
        setContinuousVoice(false);
      }
    };
    recognition.onend = () => {
      if (isRecording) {
        try {
          recognition.start();
        } catch {}
      }
    };

    try {
      recognition.start();
      recognitionRef.current = recognition;
      setIsRecording(true);
    } catch (e) {
      console.warn("Speech Recognition already started or blocked.", e);
      setIsRecording(false);
      setContinuousVoice(false);
    }
  }, [isRecording, handleSend]);

  const stopRecording = useCallback(() => {
    recognitionRef.current?.stop();
    recognitionRef.current = null;
    setIsRecording(false);
    if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
  }, []);

  const toggleMic = () => {
    if (isRecording) {
      stopRecording();
      setContinuousVoice(false);
    } else {
      setContinuousVoice(true);
      startRecording();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    finalTranscriptRef.current = e.target.value;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923023333499"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-[72px] right-4 sm:bottom-[92px] sm:right-6 z-50 w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center
          bg-[#25D366] text-white shadow-[0_0_20px_#25D366] hover:shadow-[0_0_30px_#25D366] hover:scale-110 transition-all duration-300
          ${isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"}`}
        aria-label="Contact on WhatsApp"
      >
        <svg
          className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 fill-current"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </a>

      {/* Main Chat Trigger Button */}
      <button
        id="erha-chatbot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center
          bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] hover:scale-110 transition-all duration-300
          ${isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"}`}
        aria-label="Open Erha AI Agent"
      >
        <Sparkles className="w-6 h-6 text-cyan-100 animate-pulse" />
      </button>

      {/* Dark Futuristic Glassmorphism Chat Window */}
      <div
        className={`fixed z-[80] flex flex-col bg-slate-950/95 backdrop-blur-xl
          border border-cyan-500/30 rounded-2xl overflow-hidden
          shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300
          left-1/2 -translate-x-1/2 bottom-4 w-[calc(100vw-2rem)] max-w-[380px] h-[78vh] max-h-[560px]
          sm:left-auto sm:right-6 sm:bottom-6 sm:translate-x-0 sm:w-[410px] sm:h-[620px] sm:max-h-[calc(100vh-3rem)] sm:max-w-none
          ${
            isOpen
              ? "translate-y-0 scale-100 opacity-100 pointer-events-auto"
              : "translate-y-10 scale-95 opacity-0 pointer-events-none"
          }`}
      >
        {/* Header */}
        <div className="p-4 bg-slate-900/90 border-b border-cyan-500/20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-sm shadow-[0_0_12px_rgba(6,182,212,0.6)]">
              <Bot size={20} className="text-slate-950" />
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-none flex items-center gap-1.5">
                Erha AI Agent
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              </div>
              <div className="text-[11px] text-cyan-400 font-medium mt-1 tracking-wide">
                Autonomous Digital Solutions
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                setTtsEnabled((p) => !p);
                window.speechSynthesis.cancel();
              }}
              title={ttsEnabled ? "Mute voice output" : "Enable voice output"}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {ttsEnabled ? (
                <Volume2 size={17} className="text-cyan-400" />
              ) : (
                <VolumeX size={17} className="text-slate-500" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Message Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/60 custom-scrollbar">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.sender === "bot" && (
                <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <Bot size={15} />
                </div>
              )}

              <div
                className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-tr-xs font-medium shadow-md shadow-cyan-950/40"
                    : "bg-slate-900/90 text-slate-100 border border-cyan-500/20 rounded-tl-xs shadow-md shadow-slate-950/80"
                }`}
              >
                {msg.sender === "bot" ? <FormattedMessage text={msg.text} /> : msg.text}
              </div>

              {msg.sender === "user" && (
                <div className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-300 shrink-0 mt-0.5">
                  <User size={15} />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2.5 justify-start">
              <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Bot size={15} />
              </div>
              <div className="bg-slate-900/90 border border-cyan-500/20 rounded-2xl rounded-tl-xs px-4 py-3 flex items-center gap-2 text-cyan-300 text-xs shadow-md">
                <Loader2 size={15} className="animate-spin text-cyan-400" />
                Erha AI is retrieving site data…
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Voice Listening Bar */}
        {isRecording && (
          <div className="px-4 py-2.5 bg-cyan-950/60 border-y border-cyan-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                Listening… speak your query
              </span>
            </div>
            <span className="text-[10px] text-cyan-400/70">Auto-sends on pause</span>
          </div>
        )}

        {/* Bottom Input Controls */}
        <div className="p-3 bg-slate-900/90 border-t border-cyan-500/20 shrink-0">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={isRecording ? "Listening to your voice…" : "Ask about services, pricing, team…"}
              className="flex-1 min-w-0 bg-slate-950 border border-slate-800 rounded-full px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />

            <button id="hidden-mic-restart" onClick={startRecording} className="hidden" />

            <button
              onClick={toggleMic}
              title={isRecording ? "Stop recording" : "Start voice recognition"}
              className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all ${
                isRecording
                  ? "bg-red-500 text-white animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.7)]"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-cyan-400"
              }`}
            >
              {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
            </button>

            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold flex items-center justify-center disabled:opacity-30 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]"
            >
              {isLoading ? (
                <Loader2 size={18} className="animate-spin text-slate-950" />
              ) : (
                <Send size={18} className="text-slate-950 ml-0.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
