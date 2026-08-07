import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  X,
  Send,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Paperclip,
  Loader2,
  CheckCircle2,
  ImageIcon,
  FileText,
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
  file?: string;
}

interface ConvMessage {
  role: "user" | "assistant";
  content: string | { type: string; [key: string]: unknown }[];
}

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export function AgenticChatbot() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: 'Salam! 👋 I\'m the Erha AI Agent. Ask me anything about our services, projects, or team — or give me a command like "Open contact page" or "Show AI projects". You can type or speak!',
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const [continuousVoice, setContinuousVoice] = useState(false);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [convHistory, setConvHistory] = useState<ConvMessage[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
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
      if (!text && !attachment) return;
      if (isLoading) return;

      // Stop any pending silence timer
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      finalTranscriptRef.current = "";

      const userMsg: Message = {
        id: Date.now().toString(),
        sender: "user",
        text: text || "📎 File attached",
      };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsLoading(true);

      try {
        let userContent: ConvMessage["content"] = text || "📎 File attached";
        let hasVision = false;

        // Handle file attachment
        if (attachment) {
          const form = new FormData();
          form.append("file", attachment);
          const uploadRes = await fetch(`${API_BASE}/chat/upload`, { method: "POST", body: form });
          const uploadData = await uploadRes.json();

          if (uploadData.type === "docx") {
            userContent = `${text}\n\n[Attached document content]:\n${uploadData.text}`;
          } else if (uploadData.type === "image") {
            hasVision = true;
            userContent = [
              { type: "text", text: text || "What do you see in this image?" },
              {
                type: "image_url",
                image_url: { url: `data:${uploadData.mime};base64,${uploadData.base64}` },
              },
            ];
          }
          setAttachment(null);
        }

        const newHistory: ConvMessage[] = [...convHistory, { role: "user", content: userContent }];
        setConvHistory(newHistory);

        const res = await fetch(`${API_BASE}/chat/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: newHistory, has_vision: hasVision }),
        });

        const data = await res.json();
        const reply: string = data.reply || "Sorry, I couldn't get a response.";

        const botMsg: Message = { id: Date.now().toString() + "bot", sender: "bot", text: reply };
        setMessages((prev) => [...prev, botMsg]);

        let historyReply = reply;
        if (data.action) {
          historyReply = `[SYSTEM MEMORY: I have successfully executed the '${data.action.tool}' tool. Do not execute it again unless the user explicitly requests a new action.] ${reply}`;
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
    [input, attachment, isLoading, convHistory, speak, handleAction],
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

      {/* Floating Button */}
      <button
        id="erha-chatbot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center
          bg-[#45DEFD] text-white shadow-[0_0_20px_#45DEFD] hover:shadow-[0_0_30px_#45DEFD] hover:scale-110 transition-all duration-300
          ${isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"}`}
        aria-label="Open Erha AI Agent"
      >
        <svg
          className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed z-[80] flex flex-col bg-white
          border border-slate-200 rounded-2xl overflow-hidden
          shadow-2xl transition-all duration-300
          left-1/2 -translate-x-1/2 bottom-4 w-[calc(100vw-2rem)] max-w-[380px] h-[75vh] max-h-[520px]
          sm:left-auto sm:right-6 sm:bottom-6 sm:translate-x-0 sm:w-[390px] sm:h-[600px] sm:max-h-[calc(100vh-3rem)] sm:max-w-none
          ${
            isOpen
              ? "translate-y-0 scale-100 opacity-100 pointer-events-auto"
              : "translate-y-10 scale-95 opacity-0 pointer-events-none"
          }`}
      >
        {/* Header */}
        <div className="p-4 bg-slate-900 text-white border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-sm font-bold text-xs">
              AI
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-none">Ask Ai</div>
              <div className="text-[11px] text-blue-400 font-medium mt-0.5">Autonomous Operations</div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                setTtsEnabled((p) => !p);
                window.speechSynthesis.cancel();
              }}
              title={ttsEnabled ? "Mute voice output" : "Enable voice output"}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              {ttsEnabled ? (
                <Volume2 size={16} className="text-blue-400" />
              ) : (
                <VolumeX size={16} className="text-slate-500" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50 custom-scrollbar">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[84%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white rounded-tr-xs font-medium shadow-xs"
                    : "bg-white text-slate-800 border border-slate-200 rounded-tl-xs shadow-xs"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-xs px-4 py-3 flex items-center gap-2 text-slate-500 text-sm shadow-xs">
                <Loader2 size={14} className="animate-spin text-blue-600" />
                Erha AI is thinking…
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Attachment Preview */}
        {attachment && (
          <div className="px-4 py-2 bg-slate-100 border-t border-slate-200 flex items-center gap-2">
            {attachment.type.startsWith("image/") ? (
              <ImageIcon size={14} className="text-blue-600" />
            ) : (
              <FileText size={14} className="text-blue-600" />
            )}
            <span className="text-xs text-slate-600 truncate flex-1">{attachment.name}</span>
            <button
              onClick={() => setAttachment(null)}
              className="text-xs text-slate-500 hover:text-slate-900"
            >
              ✕
            </button>
          </div>
        )}

        {/* Voice mode indicator */}
        {isRecording && (
          <div className="px-4 py-3 bg-red-50 border-y border-red-200 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider">
                  Listening…
                </span>
              </div>
              <span className="text-[9px] text-red-500 uppercase">Auto-send after silence</span>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-slate-200 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-9 h-9 shrink-0 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors"
              title="Attach file"
            >
              <Paperclip size={16} />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".docx,.doc,image/*"
              className="hidden"
              onChange={(e) => setAttachment(e.target.files?.[0] ?? null)}
            />

            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={isRecording ? "Speaking…" : "Type or speak…"}
              className="flex-1 min-w-0 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
            />

            <button id="hidden-mic-restart" onClick={startRecording} className="hidden" />

            <button
              onClick={toggleMic}
              title={isRecording ? "Stop recording" : "Start voice input"}
              className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center transition-all ${
                isRecording
                  ? "bg-red-500 text-white animate-pulse"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {isRecording ? <MicOff size={16} /> : <Mic size={16} />}
            </button>

            <button
              onClick={() => handleSend()}
              disabled={(!input.trim() && !attachment) || isLoading}
              className="w-9 h-9 shrink-0 rounded-full bg-[#45DDFD] hover:bg-[#38bdf8] text-slate-950 font-bold flex items-center justify-center disabled:opacity-40 transition-all shadow-sm"
            >
              {isLoading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
