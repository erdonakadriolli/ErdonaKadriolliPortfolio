import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import AdminPanel from './components/AdminPanel';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetailsModal } from './components/ProjectDetailsModal';
import Intro from './components/Intro';
import { PROJECTS as INITIAL_PROJECTS } from './constants';
import { Project, Language } from './types';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [lang, setLang] = useState<Language>('sq'); // Default to Shqip with instant English toggle
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // AI Assistant Twin Visibility (Hidden by default as requested; can be easily re-enabled)
  const [enableAiChat, setEnableAiChat] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('erdona_enable_ai');
      return saved === 'true'; // Defaults to false (hidden)
    } catch {
      return false;
    }
  });

  const toggleAiChat = () => {
    setEnableAiChat(prev => {
      const next = !prev;
      localStorage.setItem('erdona_enable_ai', String(next));
      return next;
    });
  };

  // Dark mode theme state (defaulting to dark for modern high-contrast developer feel or persistent choice)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const savedTheme = localStorage.getItem('erdona_theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('erdona_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('erdona_cv_projects_v4');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return INITIAL_PROJECTS;
    } catch {
      return INITIAL_PROJECTS;
    }
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    localStorage.setItem('erdona_cv_projects_v4', JSON.stringify(projects));
  }, [projects]);

  // Secret admin shortcut: Ctrl + Shift + A or Alt + A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') || (e.altKey && e.key.toLowerCase() === 'a')) {
        e.preventDefault();
        setIsAdminOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const addProject = (p: Project) => {
    setProjects([p, ...projects]);
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const toggleLanguage = () => {
    setLang(prev => (prev === 'sq' ? 'en' : 'sq'));
  };

  if (showIntro) {
    return <Intro onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white transition-colors duration-300 font-sans">
      {/* Top Scroll Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Simplified Essential Navigation Bar with Dark Mode Switch */}
      <Navbar 
        lang={lang} 
        theme={theme}
        onToggleTheme={toggleTheme}
        onToggleLang={toggleLanguage} 
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="w-full">
        <Hero 
          lang={lang} 
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenChat={() => setIsChatOpen(true)}
          showAiChat={enableAiChat}
        />
        
        <Projects 
          projects={projects} 
          lang={lang}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        <About lang={lang} />
        
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <Footer 
        lang={lang} 
        onAdminClick={() => setIsAdminOpen(true)} 
      />

      {/* AI Assistant Twin Widget (conditionally rendered when enabled) */}
      {enableAiChat && (
        <AIChat 
          lang={lang} 
          isOpen={isChatOpen} 
          onToggle={() => setIsChatOpen(!isChatOpen)} 
        />
      )}
      
      {/* Project Details Modal */}
      <ProjectDetailsModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        lang={lang}
      />

      {/* Resume / CV Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
        lang={lang}
      />

      {/* Admin Project Manager Modal */}
      {isAdminOpen && (
        <AdminPanel 
          projects={projects} 
          onClose={() => setIsAdminOpen(false)} 
          onAdd={addProject} 
          onDelete={deleteProject}
          lang={lang}
          enableAiChat={enableAiChat}
          onToggleAiChat={toggleAiChat}
        />
      )}
    </div>
  );
};

export default App;
