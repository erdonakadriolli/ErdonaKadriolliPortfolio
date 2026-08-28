import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ERDONA_PROFILE } from '../constants';
import { Language } from '../types';
import { ArrowRight, Sparkles, FileText, Database, Brain, Code2, CheckCircle, Bot, Github, MapPin, Camera } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenResume: () => void;
  onOpenChat?: () => void;
  showAiChat?: boolean;
}

const Hero: React.FC<HeroProps> = ({ lang, onOpenResume, onOpenChat, showAiChat = false }) => {
  const isSq = lang === 'sq';
  const [activePhoto, setActivePhoto] = useState<'photo1' | 'photo2'>('photo1');

  const currentPhotoUrl = activePhoto === 'photo1' ? ERDONA_PROFILE.photo1 : ERDONA_PROFILE.photo2;

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950 transition-colors duration-300">
      {/* Ambient background accents */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-100/40 dark:bg-indigo-900/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200/80 dark:border-blue-800/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-blue-800 dark:text-blue-300 tracking-wide">
                {isSq ? 'E hapur për pozita & praktika në Data/AI & Software' : 'Open for Software & Data/AI Engineering Roles'}
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08]">
              {isSq ? 'Inxhinieri e të Dhënave &' : 'Data Engineering &'}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400">
                {isSq ? 'Inteligjencë Artificiale.' : 'Artificial Intelligence.'}
              </span>
            </h1>
            
            {/* Subheading / Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {isSq ? (
                <>
                  Unë jam <strong className="text-slate-900 dark:text-white font-semibold">{ERDONA_PROFILE.name}</strong>, studente e vitit të fundit në Shkenca Kompjuterike në <strong className="text-slate-900 dark:text-white font-semibold">UBT</strong>, me specializim në <strong className="text-blue-600 dark:text-blue-400 font-semibold">Data & AI Engineering</strong>. Ndërtoj zgjidhje inteligjente me Python, FastAPI, React, PostgreSQL, dhe modele parashikuese të mësimit makinerik.
                </>
              ) : (
                <>
                  I am <strong className="text-slate-900 dark:text-white font-semibold">{ERDONA_PROFILE.name}</strong>, a final-year Computer Science & Engineering student at <strong className="text-slate-900 dark:text-white font-semibold">UBT</strong>, specializing in <strong className="text-blue-600 dark:text-blue-400 font-semibold">Data & AI Engineering</strong>. Building AI-powered and data-driven solutions with Python, FastAPI, React, PostgreSQL, and machine learning.
                </>
              )}
            </p>

            {/* Quick Tech Matrix */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className="text-slate-400 dark:text-slate-500 text-xs font-bold mr-1">{isSq ? 'Teknologjitë:' : 'Core Stack:'}</span>
              <span className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xs flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Python & ML
              </span>
              <span className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xs flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" /> FastAPI & SQL
              </span>
              <span className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xs flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> React & Tailwind
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <a 
                href="#projects" 
                className="px-6 py-3.5 bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2"
              >
                <span>{isSq ? 'Eksploro Projektet' : 'Explore Projects'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-xs active:scale-95 flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{isSq ? 'Shiko CV / Resume' : 'View Resume / CV'}</span>
              </button>

              {showAiChat && onOpenChat && (
                <button
                  onClick={onOpenChat}
                  className="px-5 py-3.5 bg-blue-50 dark:bg-slate-900 hover:bg-blue-100 dark:hover:bg-slate-800 border border-blue-200 dark:border-slate-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
                >
                  <Bot className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{isSq ? 'Bisedo me AI Twin' : 'Chat with AI Twin'}</span>
                </button>
              )}
            </div>
          </motion.div>

          {/* Right Hero Visual Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md bg-white dark:bg-slate-900 rounded-3xl p-4 shadow-xl border border-slate-200/80 dark:border-slate-800 transition-colors">
              
              {/* Profile Image with Photo Switcher */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 shadow-inner group">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activePhoto}
                    src={currentPhotoUrl} 
                    alt={ERDONA_PROFILE.name} 
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent"></div>

                {/* Photo Switcher Pill in Top Right */}
                <div className="absolute top-3 right-3 z-10 flex items-center bg-slate-950/80 backdrop-blur-md p-1 rounded-full border border-white/20 shadow-lg">
                  <button
                    type="button"
                    onClick={() => setActivePhoto('photo1')}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all ${
                      activePhoto === 'photo1'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Foto 1
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePhoto('photo2')}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all ${
                      activePhoto === 'photo2'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Foto 2
                  </button>
                </div>

                {/* Overlay Profile Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-[10px] font-black uppercase tracking-wider">
                      UBT B.Sc.
                    </span>
                    <span className="text-xs text-slate-300 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Kosovo
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-white">
                    {ERDONA_PROFILE.name}
                  </h3>
                  <p className="text-xs text-blue-200 font-medium">
                    {isSq ? ERDONA_PROFILE.titleSq : ERDONA_PROFILE.titleEn}
                  </p>

                  <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <span className="font-mono text-[11px]">{ERDONA_PROFILE.phone}</span>
                    <a 
                      href={ERDONA_PROFILE.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-white font-bold flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{ERDONA_PROFILE.githubUsername}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badges */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 mb-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider">{isSq ? 'Studimet' : 'Academic'}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Final Year @ UBT</p>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 mb-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider">{isSq ? 'Fokusi' : 'Focus'}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Data & AI Engineering</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
