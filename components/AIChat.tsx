import React, { useState, useRef, useEffect } from 'react';
import { getGeminiChatResponse } from '../services/geminiService';
import { Message, Language } from '../types';
import { ERDONA_PROFILE } from '../constants';
import { Bot, Send, X, Sparkles, MessageSquare, RefreshCw, User } from 'lucide-react';

interface AIChatProps {
  lang: Language;
  isOpen: boolean;
  onToggle: () => void;
}

const AIChat: React.FC<AIChatProps> = ({ lang, isOpen, onToggle }) => {
  const isSq = lang === 'sq';

  const defaultGreeting = isSq 
    ? `Përshëndetje! Unë jam Asistenti Virtual i Erdonës. Mund të më pyesni rreth studimeve të saj në UBT, projekteve në Data & AI, apo si të kontaktoni me të!`
    : `Hello! I am Erdona's AI Twin. Feel free to ask me anything about her studies at UBT, machine learning projects, or technical skills!`;

  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: defaultGreeting }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Update initial greeting when language changes if no conversation started
  useEffect(() => {
    if (messages.length === 1 && messages[0].role === 'model') {
      setMessages([{ role: 'model', text: defaultGreeting }]);
    }
  }, [lang]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const quickPrompts = isSq ? [
    "Cilat janë projektet kryesore të AI?",
    "Çfarë teknologjish përdor në backend?",
    "Pse zgjodhi studimet në UBT?",
    "Si mund të kontaktoj për një bashkëpunim?"
  ] : [
    "Tell me about Erdona's AI projects",
    "What backend stack does she use?",
    "What is her background at UBT?",
    "How can I reach out for collaboration?"
  ];

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMessage: Message = { role: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));
    history.push({ role: 'user', parts: [{ text }] });

    const responseText = await getGeminiChatResponse(history);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleReset = () => {
    setMessages([{ role: 'model', text: defaultGreeting }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[120]">
      {isOpen ? (
        <div className="w-[92vw] sm:w-[400px] h-[580px] max-h-[85vh] bg-white dark:bg-slate-900 rounded-3xl flex flex-col shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-200 transition-colors">
          
          {/* Chat Header */}
          <div className="p-4 bg-slate-900 dark:bg-slate-950 text-white flex justify-between items-center border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src={ERDONA_PROFILE.photo1} 
                  alt={ERDONA_PROFILE.name} 
                  className="w-10 h-10 rounded-2xl object-cover border-2 border-blue-500 shadow-md shadow-blue-500/20"
                />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-blue-600 rounded-full flex items-center justify-center text-white border border-slate-900 text-[8px]">
                  <Sparkles className="w-2 h-2" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-display font-bold text-white flex items-center gap-1.5">
                  <span>{isSq ? 'Erdona AI Twin' : "Erdona's AI Twin"}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </h4>
                <p className="text-[10px] text-blue-200 dark:text-blue-300 font-medium">
                  {isSq ? 'Fuqizuar nga Gemini 2.5 Flash' : 'Powered by Gemini 2.5 Flash'}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button 
                onClick={handleReset}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title={isSq ? 'Pastro bisedën' : 'Reset chat'}
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button 
                onClick={onToggle}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50 dark:bg-slate-950 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-xs shadow-sm font-medium' 
                    : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-tl-xs border border-slate-200 dark:border-slate-800 shadow-xs'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-900 px-4 py-3 rounded-2xl rounded-tl-xs border border-slate-200 dark:border-slate-800 shadow-xs flex items-center space-x-1.5">
                  <span className="text-xs text-slate-400 dark:text-slate-400 font-medium mr-1">{isSq ? 'Duke menduar' : 'Thinking'}</span>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Suggested Quick Prompts (visible if conversation is short) */}
          {messages.length <= 2 && (
            <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
              {quickPrompts.slice(0, 3).map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/60 border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-700 text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 rounded-lg text-[11px] font-medium text-left transition-all line-clamp-1"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Chat Input */}
          <div className="p-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input 
                type="text" 
                placeholder={isSq ? "Pyet për aftësitë, projektet..." : "Ask about skills, projects..."}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 font-medium focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950 transition-all"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white rounded-xl transition-all shadow-xs active:scale-95 flex items-center justify-center shrink-0"
                aria-label="Send question"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button 
          onClick={onToggle}
          className="h-14 px-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl active:scale-95 transition-all flex items-center gap-3 group"
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 group-hover:rotate-6 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-blue-600 animate-pulse"></span>
          </div>
          <span className="font-bold text-xs uppercase tracking-wider hidden sm:inline">
            {isSq ? 'Bisedo me AI' : 'Chat with AI Twin'}
          </span>
        </button>
      )}
    </div>
  );
};

export default AIChat;
