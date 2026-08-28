import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SKILLS, 
  ERDONA_PROFILE, 
  EDUCATION_TIMELINE, 
  WORKFLOW_STEPS, 
  EXPERIENCE_LIST, 
  CERTIFICATIONS, 
  LANGUAGES_DATA, 
  CORE_STRENGTHS 
} from '../constants';
import { Language } from '../types';
import { 
  Brain, 
  Code, 
  Database, 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Cpu, 
  Wrench, 
  Users, 
  CheckCircle2, 
  Globe, 
  Languages as LanguagesIcon,
  ChevronRight,
  Building2,
  Calendar
} from 'lucide-react';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('All');
  const isSq = lang === 'sq';

  const skillCategories = ['All', 'Data & AI', 'Backend', 'Frontend', 'Tools & Cloud', 'Soft Skills'];

  const filteredSkills = activeSkillCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === activeSkillCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Data & AI': return <Brain className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'Backend': return <Database className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'Frontend': return <Code className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 'Tools & Cloud': return <Wrench className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'Soft Skills': return <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      default: return <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Top Story & Bio Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Bio Section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isSq ? 'Historia & Profili Profesional' : 'Professional Profile & Story'}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {isSq ? 'Inxhinieri e të Dhënave & Inteligjencë Artificiale.' : 'Data & AI Engineering, Systems & Innovation.'}
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-900 dark:text-slate-100">
                {isSq ? ERDONA_PROFILE.bioSq : ERDONA_PROFILE.bioEn}
              </p>
              
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                {isSq ? (
                  <>
                    Përmes studimeve në <strong className="text-blue-600 dark:text-blue-400 font-semibold">UBT</strong> dhe projekteve praktike si <strong className="text-slate-900 dark:text-white font-semibold">HealthConnect-AI</strong> dhe <strong className="text-slate-900 dark:text-white font-semibold">OJQ Vizioni Rinor i Shalës</strong>, kombinoj inxhinierinë e të dhënave, trajnimin e modeleve ML me <strong className="text-slate-900 dark:text-white font-semibold">scikit-learn / Claude Vision API</strong> dhe zhvillimin e shpejtë të backend-it me <strong className="text-slate-900 dark:text-white font-semibold">FastAPI & PostgreSQL</strong>.
                  </>
                ) : (
                  <>
                    Through my academic tenure at <strong className="text-blue-600 dark:text-blue-400 font-semibold">UBT</strong> and practical projects like <strong className="text-slate-900 dark:text-white font-semibold">HealthConnect-AI</strong> and the <strong className="text-slate-900 dark:text-white font-semibold">NGO Official Portal</strong>, I integrate data pipelines, ML modeling with <strong className="text-slate-900 dark:text-white font-semibold">scikit-learn / Claude Vision API</strong>, and high-performance backend engineering using <strong className="text-slate-900 dark:text-white font-semibold">FastAPI & PostgreSQL</strong>.
                  </>
                )}
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                {isSq ? (
                  <>
                    Kam përvojë të konsoliduar me të dhëna reale nga terreni përmes angazhimeve me <strong className="text-slate-900 dark:text-white font-semibold">Agjencinë e Statistikave të Kosovës (ASK)</strong>, <strong className="text-slate-900 dark:text-white font-semibold">UNICEF (MICS)</strong>, dhe operacionet zgjedhore të <strong className="text-slate-900 dark:text-white font-semibold">KQZ (KeyVote)</strong>.
                  </>
                ) : (
                  <>
                    I possess substantial real-world data collection and operational experience collaborating with the <strong className="text-slate-900 dark:text-white font-semibold">Kosovo Agency of Statistics (KAS)</strong>, <strong className="text-slate-900 dark:text-white font-semibold">UNICEF (MICS)</strong>, and national election operations with <strong className="text-slate-900 dark:text-white font-semibold">KQZ (KeyVote)</strong>.
                  </>
                )}
              </p>
            </div>

            {/* Quick Stat Blocks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <p className="text-2xl font-black text-slate-900 dark:text-white">Sep 2023</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{isSq ? 'Studime në UBT' : 'B.Sc. at UBT'}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <p className="text-2xl font-black text-slate-900 dark:text-white">Data & AI</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{isSq ? 'Specializimi' : 'Specialization'}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 col-span-2 sm:col-span-1">
                <p className="text-2xl font-black text-slate-900 dark:text-white">7+ Role</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{isSq ? 'Përvojë & Terren' : 'Field & Tech Roles'}</p>
              </div>
            </div>
          </div>

          {/* Right: Profile Photo Spotlight & Technical Engineering Pipeline */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Spotlight Card with Foto 2 */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img 
                  src={ERDONA_PROFILE.photo2} 
                  alt={`${ERDONA_PROFILE.name} - Portrait`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-600/90 text-[10px] font-black uppercase tracking-wider text-white">
                    UBT Engineering
                  </span>
                  <h4 className="font-display font-bold text-lg text-white mt-1">
                    {ERDONA_PROFILE.name}
                  </h4>
                  <p className="text-xs text-blue-200">
                    {isSq ? 'Studente e Përkushtuar • Inxhinieri e të Dhënave' : 'Dedicated Engineer • Data & AI Systems'}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono bg-white/10 px-2.5 py-1 rounded-lg backdrop-blur-xs border border-white/10">
                    Prishtinë, Kosovë
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Engineering Pipeline */}
            <div className="bg-slate-900 dark:bg-slate-900/90 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-blue-400" />
                  <h3 className="font-display font-bold text-base sm:text-lg text-white">
                    {isSq ? 'Procesi i Inxhinierisë' : 'Data & AI Pipeline'}
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30">
                  Workflow
                </span>
              </div>

              <div className="space-y-5">
                {WORKFLOW_STEPS.map((wf) => (
                  <div key={wf.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-blue-600/30 border border-blue-500/40 text-blue-400 flex items-center justify-center text-xs font-black shrink-0">
                      {wf.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">
                        {isSq ? wf.titleSq : wf.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {isSq ? wf.descSq : wf.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 2. Professional Experience & Field Engagements */}
        <div id="experience" className="pt-12 border-t border-slate-200/80 dark:border-slate-800 mb-24">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{isSq ? 'Përvoja Profesionale & Angazhimet' : 'Experience & Field Operations'}</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {isSq ? 'Përvoja e Punës & Projektet në Terren' : 'Professional & Field Track Record'}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERIENCE_LIST.map((exp) => (
              <div 
                key={exp.id}
                className="p-6 bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-850 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 bg-blue-100/80 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 rounded-lg border border-blue-200/50 dark:border-blue-800/50">
                      {isSq ? exp.periodSq : exp.period}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-950 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
                      {exp.category || 'Experience'}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-base mb-1">
                    {isSq ? exp.roleSq : exp.role}
                  </h4>
                  
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-3 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{isSq ? (exp.companySq || exp.company) : exp.company}</span>
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {(isSq ? exp.descriptionSq : exp.description).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Skills & Toolkit Section */}
        <div id="skills" className="pt-12 border-t border-slate-200/80 dark:border-slate-800 mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Code className="w-3.5 h-3.5" />
                <span>{isSq ? 'Aftësitë & Teknologjitë' : 'Technical Skills & Toolkit'}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {isSq ? 'Veglat & Njohuritë Teknike' : 'Technical Competencies'}
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {skillCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveSkillCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeSkillCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill) => (
              <div 
                key={skill.name}
                className="p-4 bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-850 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                      {getCategoryIcon(skill.category)}
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    <span>{skill.category}</span>
                    {skill.level && <span>{skill.level}%</span>}
                  </div>
                  {skill.level && (
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-cyan-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Certifications & Training */}
        <div id="certifications" className="pt-12 border-t border-slate-200/80 dark:border-slate-800 mb-24">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>{isSq ? 'Trajnime & Çertifikime' : 'Certifications & Training'}</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {isSq ? 'Kualifikimet Profesionale' : 'Professional Training & Programs'}
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((cert, idx) => (
              <div 
                key={idx}
                className="p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-900">
                      {cert.date}
                    </span>
                    {cert.hours && (
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                        {cert.hours}
                      </span>
                    )}
                  </div>
                  
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm mb-1 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Education & Academic Path Section */}
        <div id="education" className="pt-12 border-t border-slate-200/80 dark:border-slate-800 mb-24">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{isSq ? 'Arsimimi & Rritja' : 'Education & Milestones'}</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {isSq ? 'Rruga Akademike & Specializimi' : 'Academic Path & Specialization'}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION_TIMELINE.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full border border-blue-100 dark:border-blue-800">
                      {isSq ? item.periodSq : item.period}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/80 rounded-md border border-emerald-100 dark:border-emerald-900">
                      {isSq ? item.badgeSq : item.badge}
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {isSq ? item.titleSq : item.title}
                  </h4>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>{isSq ? item.institutionSq : item.institution}</span>
                  </p>

                  {item.specialization && (
                    <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-3">
                      {isSq ? item.specializationSq : item.specialization}
                    </p>
                  )}
                  
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {isSq ? item.descriptionSq : item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Languages & Core Strengths Bar */}
        <div className="pt-12 border-t border-slate-200/80 dark:border-slate-800">
          <div className="grid md:grid-cols-2 gap-8 bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LanguagesIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
                  {isSq ? 'Gjuhët e Huaja' : 'Language Proficiencies'}
                </h4>
              </div>

              <div className="space-y-2.5">
                {LANGUAGES_DATA.map((l, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {isSq ? l.languageSq : l.language}
                    </span>
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 px-2.5 py-0.5 rounded-md border border-blue-100 dark:border-blue-900">
                      {isSq ? l.levelSq : l.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
                  {isSq ? 'Aftësitë & Pikat e Forta' : 'Core Strengths'}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {CORE_STRENGTHS.map((s, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-2xs"
                  >
                    {isSq ? s.sq : s.en}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
