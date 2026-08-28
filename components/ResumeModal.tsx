import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ERDONA_PROFILE, 
  SKILLS, 
  PROJECTS, 
  EDUCATION_TIMELINE, 
  EXPERIENCE_LIST, 
  CERTIFICATIONS, 
  LANGUAGES_DATA, 
  CORE_STRENGTHS 
} from '../constants';
import { Language } from '../types';
import { 
  X, 
  Download, 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Globe, 
  CheckCircle2, 
  Code, 
  Layers, 
  Printer 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, lang }) => {
  const isSq = lang === 'sq';

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col my-4 sm:my-8 border border-slate-200 max-h-[92vh]"
          >
            {/* Action Bar */}
            <div className="p-4 sm:p-5 bg-slate-900 text-white flex justify-between items-center border-b border-slate-800 shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20 text-sm">
                  CV
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-white">
                    {isSq ? 'Curriculum Vitae Zyrtare' : 'Official Curriculum Vitae'}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {ERDONA_PROFILE.name} • {isSq ? ERDONA_PROFILE.titleSq : ERDONA_PROFILE.titleEn}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrint}
                  className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-all shadow-sm active:scale-95"
                  title="Print / Save as PDF"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">{isSq ? 'Shkarko / Printo PDF' : 'Download / Print PDF'}</span>
                </button>
                <button 
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Printable CV Paper Sheet */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-white dark:bg-slate-900 custom-scrollbar text-slate-800 dark:text-slate-200 print:p-0 print:m-0 print:bg-white print:text-black transition-colors">
              
              {/* CV Top Header */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <img 
                  src={ERDONA_PROFILE.photo1} 
                  alt={ERDONA_PROFILE.name} 
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-blue-600/30 shadow-md shrink-0"
                />
                <div className="text-center sm:text-left flex-1">
                  <h1 className="font-display text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                    {ERDONA_PROFILE.name}
                  </h1>
                  <p className="text-blue-700 dark:text-blue-400 font-bold text-sm sm:text-base mt-0.5">
                    {isSq ? ERDONA_PROFILE.titleSq : ERDONA_PROFILE.titleEn}
                  </p>
                  
                  {/* Contact Meta Row */}
                  <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {isSq ? ERDONA_PROFILE.locationSq : ERDONA_PROFILE.location}
                    </span>
                    <span>•</span>
                    <a href={`tel:${ERDONA_PROFILE.phone}`} className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      {ERDONA_PROFILE.phone}
                    </a>
                    <span>•</span>
                    <a href={`mailto:${ERDONA_PROFILE.email}`} className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      {ERDONA_PROFILE.email}
                    </a>
                    <span>•</span>
                    <a 
                      href={ERDONA_PROFILE.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 font-semibold"
                    >
                      <Github className="w-3.5 h-3.5 text-slate-400" />
                      github.com/{ERDONA_PROFILE.githubUsername}
                    </a>
                  </div>
                </div>
              </div>

              {/* 1. PROFILE */}
              <div className="space-y-2">
                <h2 className="text-xs font-black uppercase tracking-[0.18em] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                  {isSq ? 'PROFILI' : 'PROFILE'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                  {isSq ? ERDONA_PROFILE.bioSq : ERDONA_PROFILE.bioEn}
                </p>
              </div>

              {/* 2. EDUCATION */}
              <div className="space-y-3">
                <h2 className="text-xs font-black uppercase tracking-[0.18em] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                  {isSq ? 'EDUKIMI' : 'EDUCATION'}
                </h2>
                
                <div className="space-y-3 text-xs sm:text-sm">
                  {EDUCATION_TIMELINE.map((edu, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900 dark:text-white">
                        <span>
                          {isSq ? edu.titleSq : edu.title} — <span className="font-semibold text-slate-700 dark:text-slate-300">{isSq ? edu.institutionSq : edu.institution}</span>
                        </span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 sm:text-right shrink-0">
                          {isSq ? edu.periodSq : edu.period}
                        </span>
                      </div>
                      {edu.specialization && (
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-400">
                          {isSq ? edu.specializationSq : edu.specialization}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. TECHNICAL SKILLS */}
              <div className="space-y-3">
                <h2 className="text-xs font-black uppercase tracking-[0.18em] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                  {isSq ? 'AFTËSITË TEKNIKE' : 'TECHNICAL SKILLS'}
                </h2>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-900 dark:text-white min-w-[110px]">{isSq ? 'Programim:' : 'Programming:'}</span>
                    <span className="text-slate-700 dark:text-slate-300">Python, Java, JavaScript, PHP, SQL, HTML/CSS</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-900 dark:text-white min-w-[110px]">Backend & APIs:</span>
                    <span className="text-slate-700 dark:text-slate-300">FastAPI, REST APIs, JSON, WebSockets</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-900 dark:text-white min-w-[110px]">Data & AI:</span>
                    <span className="text-slate-700 dark:text-slate-300">Pandas, scikit-learn, Machine Learning, Data Analysis, Data Visualization</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-900 dark:text-white min-w-[110px]">{isSq ? 'Baza të Dhënash:' : 'Databases:'}</span>
                    <span className="text-slate-700 dark:text-slate-300">MySQL, PostgreSQL, Database Design, SQL</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-900 dark:text-white min-w-[110px]">Frontend:</span>
                    <span className="text-slate-700 dark:text-slate-300">React, Vite, Tailwind CSS, Streamlit</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-900 dark:text-white min-w-[110px]">{isSq ? 'Vegla & Tools:' : 'Tools:'}</span>
                    <span className="text-slate-700 dark:text-slate-300">Git, Docker, XAMPP, VS Code, Firebase, Vercel</span>
                  </div>
                </div>
              </div>

              {/* 4. SELECTED PROJECTS */}
              <div className="space-y-4">
                <h2 className="text-xs font-black uppercase tracking-[0.18em] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                  {isSq ? 'PROJEKTE TË ZGJEDHURA' : 'SELECTED PROJECTS'}
                </h2>

                <div className="space-y-4">
                  {PROJECTS.map((proj) => (
                    <div key={proj.id} className="space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                          {isSq ? (proj.titleSq || proj.title) : proj.title}{' '}
                          <span className="font-normal text-slate-500 dark:text-slate-400">
                            — {proj.tags.join(', ')}
                          </span>
                        </h3>
                      </div>
                      
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        • {isSq ? (proj.descriptionSq || proj.description) : proj.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. EXPERIENCE */}
              <div className="space-y-4">
                <h2 className="text-xs font-black uppercase tracking-[0.18em] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                  {isSq ? 'PËRVOJA & ANGAZHIMET' : 'EXPERIENCE'}
                </h2>

                <div className="space-y-3.5">
                  {EXPERIENCE_LIST.map((exp) => (
                    <div key={exp.id} className="space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                        <span>
                          {isSq ? exp.roleSq : exp.role} — <span className="font-semibold text-slate-700 dark:text-slate-300">{isSq ? (exp.companySq || exp.company) : exp.company}</span>
                        </span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 sm:text-right shrink-0">
                          {isSq ? exp.periodSq : exp.period}
                        </span>
                      </div>

                      <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                        {(isSq ? exp.descriptionSq : exp.description).map((d, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-slate-400">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. CERTIFICATIONS & TRAINING */}
              <div className="space-y-3">
                <h2 className="text-xs font-black uppercase tracking-[0.18em] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                  {isSq ? 'TRAJNIME & ÇERTIFIKIME' : 'CERTIFICATIONS & TRAINING'}
                </h2>

                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                      <span>
                        <strong className="font-semibold text-slate-900 dark:text-white">{cert.title}</strong> — {cert.issuer} ({cert.date}{cert.hours ? `, ${cert.hours}` : ''})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 7. LANGUAGES & CORE STRENGTHS */}
              <div className="grid sm:grid-cols-2 gap-6 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.18em] text-slate-900 dark:text-white mb-2">
                    {isSq ? 'GJUHËT' : 'LANGUAGES'}
                  </h3>
                  <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    {LANGUAGES_DATA.map((langItem, idx) => (
                      <p key={idx}>
                        <strong className="font-semibold text-slate-900 dark:text-white">{isSq ? langItem.languageSq : langItem.language}</strong> — {isSq ? langItem.levelSq : langItem.level}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.18em] text-slate-900 dark:text-white mb-2">
                    {isSq ? 'AFTËSITË KRYESORE' : 'CORE STRENGTHS'}
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {CORE_STRENGTHS.map(s => isSq ? s.sq : s.en).join(' • ')}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
