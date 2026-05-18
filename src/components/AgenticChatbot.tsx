import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  BotMessageSquare, X, Send, Mic, MicOff, Volume2, VolumeX,
  Paperclip, Loader2, CheckCircle2, ImageIcon, FileText,
} from "lucide-react";

const API_BASE = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? "http://localhost:8000/api" : "/api";

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
  const [messages, setMessages] = useState<Message[]>([{
    id: "welcome",
    sender: "bot",
    text: "Salam! 👋 I'm the Erha AI Agent. Ask me anything about our services, projects, or team — or give me a command like \"Open contact page\" or \"Show AI projects\". You can type or speak!",
  }]);
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
  const speak = useCallback((text: string) => {
    if (!ttsEnabled) {
      if (continuousVoice) setTimeout(() => {
        const btn = document.getElementById("hidden-mic-restart");
        if (btn) btn.click();
      }, 500);
      return;
    }
    window.speechSynthesis.cancel();

    const clean = text
      .replace(/\*\*/g, "").replace(/\*/g, "").replace(/#{1,6}\s/g, "")
      .replace(/https?:\/\/\S+/g, "link").replace(/\n+/g, ". ")
      .replace(/[[\]()]/g, "").replace(/`/g, "").trim();
    if (!clean) return;

    const isChinese = /[一-龥]/.test(clean);
    const utter = new SpeechSynthesisUtterance(clean);
    if (isChinese) utter.lang = "zh-CN";
    const PRIORITY = isChinese
      ? ["Google 普通话", "zh-CN", "zh-TW", "zh-HK", "Tingting", "Microsoft YaHei", "Chinese", "zh"]
      : ["Google हिन्दी", "Google Hindi", "hi-IN", "ur-PK", "en-IN", "en-GB"];

    const doSpeak = () => {
      const voices = window.speechSynthesis.getVoices();
      let picked: SpeechSynthesisVoice | null = null;
      for (const p of PRIORITY) {
        picked = voices.find(v => v.name.includes(p) || v.lang === p) ?? null;
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
  }, [ttsEnabled, continuousVoice, isRecording]);

  // ── Agent Action Handler ──────────────────────────────────────────
  const handleAction = useCallback((action: { tool: string; params: Record<string, string> }) => {
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
          window.dispatchEvent(new CustomEvent("erha:filter-projects", { detail: { tag: action.params.tag } }));
        }, 600);
        break;
      }

      case "highlight_section": {
        const el = document.getElementById(`section-${action.params.section}`)
          || document.querySelector(`[data-section="${action.params.section}"]`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.style.transition = "box-shadow 0.4s";
          el.style.boxShadow = "0 0 0 3px var(--neon-cyan), 0 0 40px rgba(0,255,255,0.3)";
          el.style.borderRadius = "16px";
          setTimeout(() => { el.style.boxShadow = ""; el.style.borderRadius = ""; }, 2500);
        }
        break;
      }
    }
  }, [navigate]);

  // ── Send Message ─────────────────────────────────────────────────
  const handleSend = useCallback(async (overrideText?: string) => {
    const text = (overrideText ?? input).trim();
    if (!text && !attachment) return;
    if (isLoading) return;

    // Stop any pending silence timer
    if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
    finalTranscriptRef.current = "";

    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: text || "📎 File attached" };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      let userContent: ConvMessage["content"] = text;
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
            { type: "image_url", image_url: { url: `data:${uploadData.mime};base64,${uploadData.base64}` } },
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
      setMessages(prev => [...prev, botMsg]);
      
      let historyReply = reply;
      if (data.action) {
        historyReply = `[SYSTEM MEMORY: I have successfully executed the '${data.action.tool}' tool. Do not execute it again unless the user explicitly requests a new action.] ${reply}`;
      }
      setConvHistory(prev => [...prev, { role: "assistant", content: historyReply }]);

      speak(reply);

      if (data.action) handleAction(data.action);

    } catch (err) {
      console.error("[Erha AI] Error:", err);
      const errMsg: Message = {
        id: Date.now().toString() + "err",
        sender: "bot",
        text: "⚠️ Could not reach the AI backend. Please make sure the Python server is running on port 8000.",
      };
      setMessages(prev => [...prev, errMsg]);
    } finally {
      setIsLoading(false);
    }
  }, [input, attachment, isLoading, convHistory, speak, handleAction]);

  // ── Speech Recognition ───────────────────────────────────────────
  const startRecording = useCallback(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert("Voice input not supported. Please use Chrome."); return; }

    window.speechSynthesis.cancel();
    finalTranscriptRef.current = "";

    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch (e) {}
    }

    const recognition = new SR();
    recognition.continuous = true;
    recognition.interimResults = true;
    // Dynamically select language based on conversation context (Chinese vs English/Urdu)
    const hasChineseInHistory = convHistory.some(m => 
      typeof m.content === "string" && /[一-龥]/.test(m.content)
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
      if (isRecording) { try { recognition.start(); } catch {} }
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
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        id="erha-chatbot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center
          shadow-[0_0_20px_var(--neon-cyan)] hover:scale-110 transition-all duration-300
          ${isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"}`}
        style={{ background: "var(--gradient-neon)" }}
        aria-label="Open Erha AI Agent"
      >
        <BotMessageSquare className="text-background" size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-[60] w-[390px] max-w-[calc(100vw-2rem)]
          h-[620px] max-h-[calc(100vh-3rem)] flex flex-col glass-strong
          border border-[var(--neon-cyan)]/30 rounded-2xl overflow-hidden
          shadow-[0_0_40px_rgba(0,255,255,0.1)] transition-all duration-300 origin-bottom-right
          ${isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"}`}
      >
        {/* Header */}
        <div
          className="p-4 border-b border-white/10 flex items-center justify-between shrink-0"
          style={{ background: "linear-gradient(to right, rgba(0,255,255,0.1), transparent)" }}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-neon)" }}>
                <BotMessageSquare size={20} className="text-background" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Erha AI Agent</h3>
              <div className="text-[9px] text-muted-foreground uppercase tracking-[0.15em] flex items-center gap-1">
                <CheckCircle2 size={10} className="text-[var(--neon-cyan)]" /> Online & Ready
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {/* TTS Toggle */}
            <button
              onClick={() => { setTtsEnabled(p => !p); window.speechSynthesis.cancel(); }}
              title={ttsEnabled ? "Mute voice output" : "Enable voice output"}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              {ttsEnabled
                ? <Volume2 size={16} className="text-[var(--neon-cyan)]" />
                : <VolumeX size={16} className="text-muted-foreground" />}
            </button>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-black/40 custom-scrollbar">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed
                  ${msg.sender === "user"
                    ? "bg-[var(--neon-cyan)] text-background rounded-tr-sm font-medium"
                    : "glass border border-white/5 rounded-tl-sm"}`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="glass border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2 text-muted-foreground text-sm">
                <Loader2 size={14} className="animate-spin text-[var(--neon-cyan)]" />
                Erha AI is thinking…
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Attachment Preview */}
        {attachment && (
          <div className="px-4 py-2 bg-black/60 border-t border-white/5 flex items-center gap-2">
            {attachment.type.startsWith("image/")
              ? <ImageIcon size={14} className="text-[var(--neon-cyan)]" />
              : <FileText size={14} className="text-[var(--neon-cyan)]" />}
            <span className="text-xs text-muted-foreground truncate flex-1">{attachment.name}</span>
            <button onClick={() => setAttachment(null)} className="text-xs text-muted-foreground hover:text-white">✕</button>
          </div>
        )}

        {/* Voice mode indicator */}
        {isRecording && (
          <div className="px-4 py-1.5 bg-red-500/10 border-t border-red-500/20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs text-red-400">Listening… speak now, 2s pause to send</span>
          </div>
        )}

        {/* Input Area */}
        <div className="p-3 bg-black/60 border-t border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            {/* Attach */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-9 h-9 shrink-0 rounded-full glass flex items-center justify-center hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
              title="Attach file (.docx or image)"
            >
              <Paperclip size={16} />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".docx,.doc,image/*"
              className="hidden"
              onChange={e => setAttachment(e.target.files?.[0] ?? null)}
            />

            {/* Text Input */}
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={isRecording ? "Speaking…" : "Type or speak…"}
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm
                focus:outline-none focus:border-[var(--neon-cyan)]/50 focus:ring-1
                focus:ring-[var(--neon-cyan)]/30 transition-all"
            />

            {/* Hidden mic restart to avoid circular dependency */}
            <button id="hidden-mic-restart" onClick={startRecording} className="hidden" />

            {/* Mic */}
            <button
              onClick={toggleMic}
              title={isRecording ? "Stop recording" : "Start voice input"}
              className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center transition-all
                ${isRecording
                  ? "bg-red-500/20 text-red-400 border border-red-500/50 animate-pulse"
                  : "glass hover:bg-white/10 text-muted-foreground hover:text-white"}`}
            >
              {isRecording ? <MicOff size={16} /> : <Mic size={16} />}
            </button>

            {/* Send */}
            <button
              onClick={() => handleSend()}
              disabled={(!input.trim() && !attachment) || isLoading}
              className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center
                disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105"
              style={{ background: "var(--gradient-neon)" }}
            >
              {isLoading
                ? <Loader2 size={16} className="text-background animate-spin" />
                : <Send size={16} className="text-background" />}
            </button>
          </div>

          <div className="text-[9px] text-center text-muted-foreground mt-2 uppercase tracking-[0.2em] opacity-40">
            Powered by Groq · Llama 3.3 70B
          </div>
        </div>
      </div>
    </>
  );
}
