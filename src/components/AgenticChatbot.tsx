import { useState, useRef, useEffect } from "react";
import { BotMessageSquare, X, Send, Mic, Paperclip, Image as ImageIcon, CheckCircle2 } from "lucide-react";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  isVoice?: boolean;
};

export function AgenticChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I am the Erha AI Agent. How can I help you accelerate your digital transformation today?",
      sender: "bot",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() && !isRecording) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: isRecording ? "🎤 Voice message (0:04)" : input,
      sender: "user",
      isVoice: isRecording,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsRecording(false);

    // Mock bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "bot",
          text: "I've received your input! Once n8n is connected, I'll process this autonomously.",
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        id="n8n-chatbot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_var(--neon-cyan)] hover:scale-110 transition-transform duration-300 ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
        style={{ background: "var(--gradient-neon)" }}
        aria-label="Open AI Chatbot"
      >
        <BotMessageSquare className="text-background" size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-[60] w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] flex flex-col glass-strong border border-[var(--neon-cyan)]/30 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,255,255,0.1)] transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between" style={{ background: "linear-gradient(to right, rgba(0, 255, 255, 0.1), transparent)" }}>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-neon)" }}>
                <BotMessageSquare size={20} className="text-background" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
            </div>
            <div>
              <h3 className="font-display text-sm">Erha AI Agent</h3>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                <CheckCircle2 size={10} className="text-[var(--neon-cyan)]" /> Online & Ready
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/40">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.sender === "user"
                    ? "bg-[var(--neon-cyan)] text-background rounded-tr-sm"
                    : "glass border border-white/5 rounded-tl-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-black/60 border-t border-white/10">
          <form onSubmit={handleSend} className="relative flex items-center gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-24 py-3 text-sm focus:outline-none focus:border-[var(--neon-cyan)]/50 focus:ring-1 focus:ring-[var(--neon-cyan)]/50 transition-all"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <button type="button" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
                  <Paperclip size={16} />
                </button>
                <button type="button" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
                  <ImageIcon size={16} />
                </button>
              </div>
            </div>
            
            <button
              type="button"
              onClick={() => setIsRecording(!isRecording)}
              className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center transition-all ${isRecording ? "bg-red-500/20 text-red-400 border border-red-500/50 animate-pulse" : "glass hover:bg-white/10"}`}
            >
              <Mic size={18} />
            </button>
            
            <button
              type="submit"
              disabled={!input.trim() && !isRecording}
              className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              style={{ background: "var(--gradient-neon)" }}
            >
              <Send size={18} className="text-background" />
            </button>
          </form>
          <div className="text-[10px] text-center text-muted-foreground mt-3 uppercase tracking-widest opacity-50">
            Powered by n8n Agentic Workflow
          </div>
        </div>
      </div>
    </>
  );
}
