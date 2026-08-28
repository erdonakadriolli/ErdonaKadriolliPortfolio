import React, { useState } from 'react';
import { ERDONA_PROFILE } from '../constants';
import { Language } from '../types';
import { Mail, MapPin, Phone, Send, Check, Copy, Linkedin, Github, MessageSquare, Sparkles } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '', subject: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const isSq = lang === 'sq';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(ERDONA_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate clean dispatch
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '', subject: '' });
    
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-12 lg:p-16 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative transition-colors">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
            
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isSq ? 'Lidhja e Drejtpërdrejtë' : 'Direct Connection'}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {isSq ? 'Le të bashkëpunojmë.' : "Let's connect & build."}
              </h2>
              
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {isSq 
                  ? 'Qoftë për një mundësi praktike, projekt në Data/AI, apo angazhim profesional në inxhinieri softuerike – jam gjithmonë e gatshme për komunikim.'
                  : 'Whether for an internship opportunity, a project in Data & AI, or a software engineering collaboration – feel free to get in touch.'}
              </p>

              {/* Contact Cards */}
              <div className="space-y-3.5 pt-2">
                {/* Email with copy */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email</p>
                      <a href={`mailto:${ERDONA_PROFILE.email}`} className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 truncate block">
                        {ERDONA_PROFILE.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-xs font-bold flex items-center gap-1.5 shadow-xs active:scale-95 shrink-0"
                    title={isSq ? 'Kopjo Email' : 'Copy Email'}
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400 text-[11px]">{isSq ? 'Kopjuar!' : 'Copied!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="hidden sm:inline text-[11px]">{isSq ? 'Kopjo' : 'Copy'}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{isSq ? 'Numri i Telefonit' : 'Phone'}</p>
                    <a href={`tel:${ERDONA_PROFILE.phone}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400">
                      {ERDONA_PROFILE.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{isSq ? 'Vendndodhja' : 'Location'}</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{isSq ? ERDONA_PROFILE.locationSq : ERDONA_PROFILE.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{isSq ? 'Rrjetet Profesionale:' : 'Professional Profiles:'}</p>
                <div className="flex items-center gap-3">
                  <a 
                    href={ERDONA_PROFILE.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950 hover:bg-blue-50 dark:hover:bg-blue-950/50 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2 transition-all shadow-2xs"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a 
                    href={ERDONA_PROFILE.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-2 transition-all shadow-2xs"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 bg-slate-50/70 dark:bg-slate-950/70 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800">
              {submitted ? (
                <div className="p-8 text-center bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-2xl animate-in fade-in">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-emerald-950 dark:text-emerald-200 mb-2">
                    {isSq ? 'Mesazhi u Dërgua me Sukses!' : 'Message Received!'}
                  </h4>
                  <p className="text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm max-w-sm mx-auto">
                    {isSq 
                      ? 'Faleminderit që kontaktuat. Erdona do t’ju përgjigjet sa më parë në adresën tuaj të emailit.'
                      : 'Thank you for reaching out. Erdona will review your message and reply promptly.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-base">
                      {isSq ? 'Dërgo një Mesazh të Drejtpërdrejtë' : 'Send a Direct Message'}
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {isSq ? 'Emri juaj *' : 'Your Name *'}
                      </label>
                      <input 
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        placeholder={isSq ? 'Psh. Drilon' : 'e.g. Alex'}
                        className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 font-medium focus:outline-none focus:border-blue-500 shadow-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {isSq ? 'Emaili juaj *' : 'Your Email *'}
                      </label>
                      <input 
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 font-medium focus:outline-none focus:border-blue-500 shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      {isSq ? 'Subjekti / Tema' : 'Subject'}
                    </label>
                    <input 
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      placeholder={isSq ? 'Psh. Mundësi bashkëpunimi / Praktikë' : 'e.g. Internship or collaboration'}
                      className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 font-medium focus:outline-none focus:border-blue-500 shadow-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      {isSq ? 'Mesazhi juaj *' : 'Your Message *'}
                    </label>
                    <textarea 
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      placeholder={isSq ? 'Shkruani mesazhin tuaj këtu...' : 'Describe your project or inquiry...'}
                      className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 font-medium focus:outline-none focus:border-blue-500 shadow-xs"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{isSq ? 'Dërgo Mesazhin' : 'Send Message'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
