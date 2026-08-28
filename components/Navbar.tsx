import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import { ERDONA_PROFILE } from '../constants';
import { FileText, Globe, Menu, X, Sun, Moon, Send, Sparkles } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onToggleLang: () => void;
  onOpenResume?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  lang, 
  theme, 
  onToggleTheme, 
  onToggleLang, 
  onOpenResume 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isSq = lang === 'sq';
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified essential navigation links
  const navLinks = [
    { name: isSq ? 'Projektet' : 'Projects', href: '#projects' },
    { name: isSq ? 'Rreth Meje' : 'About', href: '#about' },
    { name: isSq ? 'Kontakti' : 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3.5 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center space-x-3 group"
          aria-label="Erdona Kadriolli Home"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-blue-600 text-white flex items-center justify-center font-display font-black text-sm group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors shadow-sm">
            EK
          </div>
          <div>
            <span className="font-display font-black text-slate-900 dark:text-white text-base tracking-tight block leading-tight">
              {ERDONA_PROFILE.name}
            </span>
            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase block">
              {isSq ? 'Data & AI Engineering' : 'Data & AI Engineering'}
            </span>
          </div>
        </a>
        
        {/* Desktop Primary Essential Links */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Controls (Theme, Resume, Lang, Contact) */}
        <div className="hidden md:flex items-center space-x-2.5">
          
          {/* Dark / Light Mode Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-200 transition-all shadow-2xs active:scale-95"
            title={isDark ? (isSq ? 'Aktivizo Temën e Ndritshme' : 'Switch to Light Mode') : (isSq ? 'Aktivizo Temën e Errët' : 'Switch to Dark Mode')}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs active:scale-95"
            title={isSq ? 'Switch to English' : 'Kalo në Shqip'}
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{isSq ? 'AL / EN' : 'EN / AL'}</span>
          </button>

          {/* Let's Talk CTA */}
          <a 
            href="#contact" 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isSq ? 'Kontakto' : "Let's Talk"}</span>
          </a>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex items-center space-x-2 md:hidden">
          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1"
          >
            <Globe className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            <span>{isSq ? 'SQ' : 'EN'}</span>
          </button>

          {/* Menu Drawer Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-2.5 border-b border-slate-100 dark:border-slate-900"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-3 flex flex-col gap-2.5">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSq ? 'Dërgo Mesazh' : 'Get In Touch'}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

