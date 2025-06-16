export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
  credentialUrl?: string;
  skills: string[];
  featured: boolean;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface Contact {
  email: string;
  phone?: string;
  location: string;
}