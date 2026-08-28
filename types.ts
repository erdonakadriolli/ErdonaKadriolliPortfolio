
export type Language = 'sq' | 'en';

export interface Project {
  id: string;
  title: string;
  titleSq?: string;
  description: string;
  descriptionSq?: string;
  image: string;
  tags: string[];
  category: 'Data & AI' | 'Backend' | 'Frontend' | 'Full-Stack';
  link?: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights?: string[];
  highlightsSq?: string[];
  metrics?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Skill {
  name: string;
  category: 'Data & AI' | 'Backend' | 'Frontend' | 'Full-Stack' | 'Tools & Cloud' | 'Soft Skills';
  level?: number; // 1-100
  iconName?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  roleSq: string;
  company: string;
  companySq?: string;
  period: string;
  periodSq: string;
  description: string[];
  descriptionSq: string[];
  category?: 'IT & Tech' | 'Data & Research' | 'Elections' | 'Volunteering';
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  hours?: string;
}

export interface LanguageProficiency {
  language: string;
  languageSq: string;
  level: string;
  levelSq: string;
}
