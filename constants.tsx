
import { Project, Skill, Certificate } from './types';

/**
 * EDITABLE CONTENT: Change these values to update your portfolio
 */
export const DEVELOPER_INFO = {
  name: "MD. Musfiqure Rahman",
  role: "Full Stack Developer & UI/UX Designer",
  bio: "Hi! I’m Musfiq, a passionate programmer, tech enthusiast, and the proud President of the EUB Programming Club. I love turning ideas into reality through code, exploring new technologies, and building projects that make an impact. From web development to AI experiments, I dive deep into everything tech.When I’m not coding, you’ll find me mentoring aspiring developers, sharing knowledge, and leading my club to innovate and inspire. I believe in continuous learning, creativity, and pushing boundaries in the tech world.Let’s create something amazing together!",
  profilePic: "https://i.ibb.co.com/G4XnP13L/musfiq.jpg",

  
  email: "musfiqurerahman.eub@gmail.com",
  location: "Dhaka, Bangladesh",
  resumeUrl: "https://i.ibb.co.com/B5MpkNxV/IMG-20260102-WA0000-1.jpg", // Add your link here
  socials: {
    github: "github.com/musfiqure06",
    linkedin: "https://www.linkedin.com/in/md-musfiqure-rahman-4a68ba378/",
    twitter: "twitter.com/musfiqure06"
  }
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Nexus',
    category: 'Web',
    description: 'A high-performance full-stack marketplace built with React, Node.js, and Redis for ultra-fast scaling.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
    demoUrl: 'https://github.com/musfiqure06/ecommerce-web-app',
    githubUrl: 'https://github.com/musfiqure06/ecommerce-web-app',
    tags: ['React', 'Node.js', 'Redis', 'MongoDB']
  },
  {
    id: '2',
    title: 'Ai Face Reco And Motion Detector',
    category: 'AI',
    description: 'An AI-powered diagnostic tool that uses machine learning to predict potential health risks based on lifestyle data.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    demoUrl: 'https://github.com/musfiqure06/REAL-TIME-FACE-EMOTION-HAND-GESTURE-DETECTOR',
    githubUrl: 'https://github.com/musfiqure06/REAL-TIME-FACE-EMOTION-HAND-GESTURE-DETECTOR',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'React']
  },
  {
    id: '3',
    title: 'Time Is Money',
    category: 'Mobile',
    description: 'A sleek, secure cryptocurrency wallet interface designed for seamless cross-chain transactions.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop',
    demoUrl: 'https://github.com/musfiqure06/TIME-YOU-WASTED', 
    githubUrl: 'https://github.com/musfiqure06/TIME-YOU-WASTED',
    tags: ['React Native', 'Web3.js', 'Ether.js', 'Firebase']
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, icon: '⚛️' },
  { name: 'TypeScript', level: 90, icon: '📘' },
  { name: 'Node.js', level: 85, icon: '🟢' },
  { name: 'Python', level: 82, icon: '🐍' },
  { name: 'Tailwind CSS', level: 98, icon: '🎨' },
  { name: 'Three.js / WebGL', level: 75, icon: '🧊' },
  { name: 'UI/UX Design', level: 92, icon: '💎' }
];

export const CERTIFICATES: Certificate[] = [
  { 
    id: 'c1', 
    name: 'Python', 
    issuer: 'Hackerrank', 
    date: 'Dec 2023', 
    image: 'https://i.ibb.co.com/q323CRGZ/image.png' 
   
  },
  { 
    id: 'c2', 
    name: 'HackerRank', 
    issuer: 'Amazon Web Services', 
    date: 'June 2023', 
    image: 'http://i.ibb.co.com/Q7zdzWRt/image.png' 
  },
  { 
    id: 'c3', 
    name: 'Problem Solving', 
    issuer: 'HackerRank', 
    date: 'Feb 2023', 
    image: 'http://i.ibb.co.com/LX4dXqdp/image.png' 
  },
  { 
    id: 'c4', 
    name: 'React', 
    issuer: 'HackerRank', 
    date: 'Jan 2024', 
    image: 'https://i.ibb.co.com/CszhcNwD/image.png' 
  }
];
