import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, Language } from '../types';
import { X, ExternalLink, Github, CheckCircle, Sparkles, Layers, Terminal } from 'lucide-react';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
  lang: Language;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose, lang }) => {
  if (!project) return null;
  const isSq = lang === 'sq';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-8 border border-slate-100 dark:border-slate-800 max-h-[90vh] transition-colors"
        >
          {/* Cover & Close */}
          <div className="relative aspect-[16/9] w-full max-h-72 overflow-hidden bg-slate-900">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-sm text-white mb-3 inline-block shadow-lg">
                {project.category}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {isSq ? (project.titleSq || project.title) : project.title}
              </h3>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 custom-scrollbar text-slate-800 dark:text-slate-200">
            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {isSq ? 'Përmbledhja e Projektit' : 'Project Overview'}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {isSq ? (project.descriptionSq || project.description) : project.description}
              </p>
            </div>

            {/* Metrics Callout */}
            {project.metrics && (
              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/80 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold text-blue-600 dark:text-blue-300 uppercase tracking-wider">
                    {isSq ? 'Metrika Kryesore / Performance' : 'Key Performance Metric'}
                  </p>
                  <p className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                    {project.metrics}
                  </p>
                </div>
                <div className="p-3 bg-blue-600 dark:bg-blue-500 text-white rounded-xl">
                  <Terminal className="w-5 h-5" />
                </div>
              </div>
            )}

            {/* Highlights */}
            {((isSq ? project.highlightsSq : project.highlights) || project.highlights) && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  {isSq ? 'Veçoritë & Zgjidhjet Teknike' : 'Key Technical Highlights'}
                </h4>
                <ul className="space-y-2.5">
                  {(isSq && project.highlightsSq ? project.highlightsSq : (project.highlights || [])).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech stack */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                {isSq ? 'Teknologjitë e Përdorura' : 'Technologies & Tools'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-4">
              <a 
                href={project.githubUrl || "https://github.com/erdonak"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95 border border-transparent dark:border-slate-700"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              <a 
                href={project.liveUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
              >
                <span>{isSq ? 'Shiko Projektin' : 'Live Preview'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;
