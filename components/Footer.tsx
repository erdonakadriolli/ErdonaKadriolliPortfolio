import React from 'react';
import { ERDONA_PROFILE } from '../constants';
import { Language } from '../types';
import { Heart, Shield } from 'lucide-react';

interface FooterProps {
  onAdminClick: () => void;
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick, lang }) => {
  const isSq = lang === 'sq';

  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        <div className="text-center sm:text-left">
          <p className="text-slate-700 dark:text-slate-200 text-xs font-bold tracking-tight">
            © {new Date().getFullYear()} {ERDONA_PROFILE.name}.
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-[11px] font-medium mt-0.5">
            {isSq ? 'Studente e Inxhinierisë së të Dhënave & AI në UBT' : 'Data & AI Engineering Student at UBT'}
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <button 
            onClick={onAdminClick}
            className="text-slate-400 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>{isSq ? 'Menaxho Projektet' : 'Project Manager'}</span>
          </button>
          
          <a 
            href="#about" 
            className="text-slate-400 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 text-xs font-bold transition-colors"
          >
            {isSq ? 'Kthehu Lart ↑' : 'Back to top ↑'}
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
