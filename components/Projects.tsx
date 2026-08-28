import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, Language } from '../types';
import { ArrowRight, Search, Sparkles, ExternalLink, Github, Layers, Filter } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
  lang: Language;
  onSelectProject: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, lang, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const isSq = lang === 'sq';

  const categories = useMemo(() => {
    return [
      { id: 'All', label: isSq ? 'Të Gjitha' : 'All Projects' },
      { id: 'Data & AI', label: 'Data & AI' },
      { id: 'Backend', label: isSq ? 'Backend & Java' : 'Backend & Systems' },
      { id: 'Full-Stack', label: 'Full-Stack & Web' },
    ];
  }, [isSq]);

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const titleMatch = (p.title + ' ' + (p.titleSq || '')).toLowerCase().includes(q);
      const descMatch = (p.description + ' ' + (p.descriptionSq || '')).toLowerCase().includes(q);
      const tagMatch = p.tags.some(t => t.toLowerCase().includes(q));

      return matchesCategory && (titleMatch || descMatch || tagMatch);
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/70 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isSq ? 'Punimet & Projektet' : 'Featured Portfolio'}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {isSq ? 'Projektet e Inxhinierisë' : 'Engineering Projects'}
            </h2>
          </div>
          
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md leading-relaxed">
            {isSq 
              ? 'Zgjidhje reale duke integruar modele makinerike, arkitektura të besueshme në backend dhe ndërfaqe moderne të të dhënave.'
              : 'End-to-end applications combining machine learning intelligence, robust backend architectures, and responsive data interfaces.'}
          </p>
        </div>

        {/* Controls: Search & Category Filter */}
        <div className="mb-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isSq ? 'Kërko teknologji (psh. Python, SQL)...' : 'Filter by skill or tech...'}
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 shadow-xs"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <Layers className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <h3 className="font-bold text-slate-800 dark:text-slate-200 text-base mb-1">
              {isSq ? 'Nuk u gjet asnjë projekt' : 'No projects found'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isSq ? 'Provoni një kërkim tjetër ose pastroni filtrat.' : 'Try adjusting your search keywords or active filter.'}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div 
                  onClick={() => onSelectProject(project)}
                  className="aspect-[16/10] overflow-hidden relative cursor-pointer bg-slate-900"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md text-slate-900 dark:text-white shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Metric Pill if present */}
                  {project.metrics && (
                    <div className="absolute bottom-3 right-3">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-blue-600/90 backdrop-blur-md text-white shadow-sm">
                        {project.metrics}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Project Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => onSelectProject(project)}
                      className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer tracking-tight"
                    >
                      {isSq ? (project.titleSq || project.title) : project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed line-clamp-2">
                      {isSq ? (project.descriptionSq || project.description) : project.description}
                    </p>
                  </div>
                  
                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button 
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 gap-1.5 group/btn"
                    >
                      <span>{isSq ? 'Shiko Detajet' : 'View Details'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                          title="GitHub Source"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                          title="Live Demo"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
