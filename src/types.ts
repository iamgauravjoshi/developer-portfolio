export type WorkCategory = 'professional' | 'client' | 'independent' | 'open-source';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: WorkCategory;
  year: string;
  domain: string;
  client?: string;
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
  period: string;
  location?: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  placeholder?: boolean;
}

export interface SkillGroup {
  id: string;
  label: string;
  note: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  contexts: Array<'professional' | 'freelance' | 'personal'>;
  projects: string[];
  projectIds?: string[];
  detail?: string;
}

export interface Social {
  label: string;
  href: string;
  handle: string;
}
