
export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'Mobile' | 'UI/UX' | 'AI';
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
