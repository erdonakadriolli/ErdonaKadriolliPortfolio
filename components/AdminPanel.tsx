import React, { useState } from 'react';
import { Project, Language } from '../types';
import { X, Plus, Trash2, Layers, Bot, Eye, EyeOff, Lock, KeyRound, LogOut, CheckCircle2, ShieldCheck } from 'lucide-react';

interface AdminPanelProps {
  projects: Project[];
  onClose: () => void;
  onAdd: (p: Project) => void;
  onDelete: (id: string) => void;
  lang: Language;
  enableAiChat?: boolean;
  onToggleAiChat?: () => void;
}

const DEFAULT_PASSCODE = 'erdona2026';

const AdminPanel: React.FC<AdminPanelProps> = ({ 
  projects, 
  onClose, 
  onAdd, 
  onDelete, 
  lang,
  enableAiChat = false,
  onToggleAiChat 
}) => {
  const isSq = lang === 'sq';

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('erdona_admin_auth') === 'true';
    } catch {
      return false;
    }
  });

  const [enteredPasscode, setEnteredPasscode] = useState('');
  const [authError, setAuthError] = useState(false);
  const [showChangePin, setShowChangePin] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [pinChangeSuccess, setPinChangeSuccess] = useState(false);

  // Form Fields for new project
  const [title, setTitle] = useState('');
  const [titleSq, setTitleSq] = useState('');
  const [desc, setDesc] = useState('');
  const [descSq, setDescSq] = useState('');
  const [tags, setTags] = useState('Python, SQL, React');
  const [category, setCategory] = useState<'Data & AI' | 'Backend' | 'Frontend' | 'Full-Stack'>('Full-Stack');
  const [img, setImg] = useState('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop');

  const getSavedPasscode = (): string => {
    try {
      return localStorage.getItem('erdona_custom_admin_pin') || DEFAULT_PASSCODE;
    } catch {
      return DEFAULT_PASSCODE;
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const savedCustomPin = localStorage.getItem('erdona_custom_admin_pin');
    const input = enteredPasscode.trim();
    
    // If user has set a custom pin, check against that custom pin
    // If not set yet, accept default passcode 'erdona2026' or 'erdona'
    const isMatch = savedCustomPin 
      ? input === savedCustomPin 
      : (input === DEFAULT_PASSCODE || input === 'erdona');

    if (isMatch) {
      try {
        sessionStorage.setItem('erdona_admin_auth', 'true');
      } catch {}
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    try {
      sessionStorage.removeItem('erdona_admin_auth');
    } catch {}
    setIsAuthenticated(false);
    setEnteredPasscode('');
    onClose();
  };

  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPin.trim().length >= 4) {
      try {
        localStorage.setItem('erdona_custom_admin_pin', newPin.trim());
      } catch {}
      setPinChangeSuccess(true);
      setTimeout(() => {
        setPinChangeSuccess(false);
        setShowChangePin(false);
        setNewPin('');
      }, 1500);
    }
  };

  const handleResetPin = () => {
    try {
      localStorage.removeItem('erdona_custom_admin_pin');
    } catch {}
    setPinChangeSuccess(true);
    setTimeout(() => {
      setPinChangeSuccess(false);
      setShowChangePin(false);
      setNewPin('');
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) return;
    
    const newProj: Project = {
      id: Date.now().toString(),
      title: title.trim(),
      titleSq: titleSq.trim() || title.trim(),
      description: desc.trim(),
      descriptionSq: descSq.trim() || desc.trim(),
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      category,
      image: img.trim() || 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      githubUrl: 'https://github.com/erdonakadriolli',
      liveUrl: 'https://github.com/erdonakadriolli'
    };
    
    onAdd(newProj);
    setTitle('');
    setTitleSq('');
    setDesc('');
    setDescSq('');
  };

  // If not authenticated, display the secure passcode challenge screen
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[260] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
        <div className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 p-6 text-slate-800 dark:text-slate-200 transition-colors">
          
          <div className="flex justify-between items-center mb-5">
            <div className="w-10 h-10 rounded-2xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <button 
              onClick={onClose} 
              className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
            {isSq ? 'Hyrja e Administratorit' : 'Admin Passcode'}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-5">
            {isSq 
              ? 'Ky panel është i rezervuar vetëm për Erdona Kadriolli. Vendosni fjalëkalimin për të vazhduar.' 
              : 'This management panel is reserved for Erdona Kadriolli only. Enter passcode to continue.'}
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <div className="relative">
                <input 
                  type="password"
                  value={enteredPasscode}
                  onChange={(e) => {
                    setEnteredPasscode(e.target.value);
                    if (authError) setAuthError(false);
                  }}
                  placeholder={isSq ? 'Fjalëkalimi / PIN...' : 'Enter passcode...'}
                  className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border rounded-2xl text-sm focus:outline-none transition-colors ${
                    authError 
                      ? 'border-red-500 text-red-600 focus:border-red-500' 
                      : 'border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-blue-500'
                  }`}
                  autoFocus
                />
                <KeyRound className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
              {authError && (
                <p className="text-[11px] font-bold text-red-500 mt-1.5 flex items-center gap-1">
                  {isSq ? 'Fjalëkalimi është i pasaktë.' : 'Incorrect passcode. Try again.'}
                </p>
              )}
            </div>

            <button 
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-2xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{isSq ? 'Identifikohu' : 'Unlock Panel'}</span>
            </button>
          </form>

        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[260] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-slate-100 dark:border-slate-800 transition-colors">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>{isSq ? 'Paneli Privat i Erdones' : 'Erdona\'s Admin Panel'}</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                  {isSq ? 'I Autorizuar' : 'Authorized'}
                </span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isSq ? 'Menaxho projektet, asistentin AI dhe fjalëkalimin tuaj' : 'Manage projects, AI assistant and your passcode'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={handleLogout}
              className="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold flex items-center gap-1.5 transition-colors"
              title={isSq ? 'Dil nga Paneli' : 'Log out'}
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isSq ? 'Dil' : 'Logout'}</span>
            </button>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar text-slate-800 dark:text-slate-200">
          
          {/* AI Twin Assistant Visibility Toggle */}
          {onToggleAiChat && (
            <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    {isSq ? 'Asistenti Inteligjent (AI Twin Chat)' : 'AI Twin Assistant'}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {enableAiChat 
                      ? (isSq ? 'Aktualisht: I shfaqur në portofol' : 'Currently: Visible in portfolio') 
                      : (isSq ? 'Aktualisht: I fshehur (Hidden)' : 'Currently: Hidden')}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onToggleAiChat}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs active:scale-95 ${
                  enableAiChat
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {enableAiChat ? (
                  <>
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isSq ? 'Çaktivizo / Fshih' : 'Hide AI'}</span>
                  </>
                ) : (
                  <>
                    <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                    <span>{isSq ? 'Aktivizo / Shfaq' : 'Show AI'}</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Change PIN Accordion / Section */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    {isSq ? 'Siguria e Panelit & Fjalëkalimi' : 'Passcode Settings'}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    {localStorage.getItem('erdona_custom_admin_pin') 
                      ? (isSq ? 'Fjalëkalimi juaj i personalizuar është aktiv' : 'Custom passcode is active')
                      : (isSq ? 'Fjalëkalimi standard është aktiv' : 'Default passcode is active')}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowChangePin(!showChangePin)}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                {showChangePin ? (isSq ? 'Mbyll' : 'Cancel') : (isSq ? 'Ndrysho' : 'Change')}
              </button>
            </div>

            {showChangePin && (
              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <form onSubmit={handleChangePin} className="flex gap-2">
                  <input 
                    type="password"
                    value={newPin}
                    onChange={(e) => setNewPin(e.target.value)}
                    placeholder={isSq ? 'Fjalëkalimi i ri (min. 4 karaktere)' : 'New passcode (min 4 chars)'}
                    className="flex-1 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl text-xs focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    disabled={newPin.trim().length < 4}
                    className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl transition-all"
                  >
                    {pinChangeSuccess ? (
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {isSq ? 'U Ruajt!' : 'Saved!'}
                      </span>
                    ) : (
                      isSq ? 'Ruaj' : 'Save'
                    )}
                  </button>
                </form>

                {localStorage.getItem('erdona_custom_admin_pin') && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleResetPin}
                      className="text-[11px] text-slate-500 hover:text-red-500 underline"
                    >
                      {isSq ? 'Kthe në fjalëkalim fillestar' : 'Reset to default passcode'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Add Project Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
            <h3 className="font-bold text-blue-600 dark:text-blue-400 uppercase text-xs tracking-wider flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" />
              <span>{isSq ? 'Shto Projekt të Ri' : 'Add New Project'}</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-600 dark:text-slate-300">Titulli (Anglisht) *</label>
                <input 
                  className="w-full mt-1 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl text-xs focus:outline-none focus:border-blue-500" 
                  placeholder="e.g. AI Customer Churn Predictor" 
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-600 dark:text-slate-300">Titulli (Shqip)</label>
                <input 
                  className="w-full mt-1 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl text-xs focus:outline-none focus:border-blue-500" 
                  placeholder="psh. Parashikuesi i Klientëve me AI" 
                  value={titleSq}
                  onChange={e => setTitleSq(e.target.value)}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-600 dark:text-slate-300">Kategoria</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full mt-1 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl text-xs focus:outline-none focus:border-blue-500 font-medium"
                >
                  <option value="Full-Stack">Full-Stack & Web</option>
                  <option value="Data & AI">Data & AI</option>
                  <option value="Backend">Backend & Java/SQL</option>
                  <option value="Frontend">Frontend</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-600 dark:text-slate-300">Tags (të ndara me presje)</label>
                <input 
                  className="w-full mt-1 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl text-xs focus:outline-none focus:border-blue-500" 
                  placeholder="Python, FastAPI, React, SQL" 
                  value={tags}
                  onChange={e => setTags(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-600 dark:text-slate-300">Përshkrimi (Anglisht) *</label>
              <textarea 
                className="w-full mt-1 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl text-xs focus:outline-none focus:border-blue-500" 
                placeholder="Brief summary of the architecture and goals..."
                rows={2}
                value={desc}
                onChange={e => setDesc(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-600 dark:text-slate-300">Përshkrimi (Shqip)</label>
              <textarea 
                className="w-full mt-1 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl text-xs focus:outline-none focus:border-blue-500" 
                placeholder="Përmbledhje e shkurtër në gjuhën shqipe..."
                rows={2}
                value={descSq}
                onChange={e => setDescSq(e.target.value)}
              />
            </div>

            <button 
              type="submit"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95"
            >
              {isSq ? 'Publiko Projektin' : 'Publish Project'}
            </button>
          </form>

          {/* List of Existing Projects */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-500 dark:text-slate-400 uppercase text-xs tracking-wider">
              {isSq ? 'Projektet Ekzistuese' : 'Current Projects'} ({projects.length})
            </h3>
            
            <div className="space-y-2">
              {projects.map(p => (
                <div key={p.id} className="flex items-center justify-between p-3 bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <img src={p.image} alt={p.title} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs">
                        {isSq ? (p.titleSq || p.title) : p.title}
                      </h4>
                      <p className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold">{p.category} • {p.tags.slice(0, 3).join(', ')}</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => onDelete(p.id)}
                    className="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-xl transition-colors"
                    title={isSq ? 'Fshi Projektin' : 'Delete Project'}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

