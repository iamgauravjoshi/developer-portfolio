export type WorkCategory = 'professional' | 'independent' | 'open-source';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: WorkCategory;
  domain: string;
  problem: string;
  description: string;
  role: string;
  responsibilities: string[];
  technologies: string[];
  highlights: string[];
  challenges?: string;
  solution?: string;
  outcome?: string;
  status: 'Live' | 'Prototype' | 'In development' | 'Archived' | 'Confidential';
  featured?: boolean;
  confidential?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  position: string;
  careerProgression?: Array<{ position: string; period: string; responsibilities: string[] }>;
  period: string;
  location?: string;
  summary?: string;
  responsibilities?: string[];
  technologies: string[];
  placeholder?: boolean;
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

export interface Social {
  label: string;
  href: string;
  handle: string;
}
