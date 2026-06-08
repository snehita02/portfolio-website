export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  subtitle: string;
  bio: string[];
  email: string;
  github: string;
  linkedin: string;
  location: string;
  resumeUrl: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
  category?: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship" | "Contract" | "Freelance";
  achievements: string[];
  tech?: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  highlights?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  badge?: string;
}
