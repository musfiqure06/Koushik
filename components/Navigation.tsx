
import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { DEVELOPER_INFO } from '../constants';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg cyber-gradient flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <Terminal size={20} className="text-white" />
          </div>
          <span className="font-space text-xl font-bold tracking-tight">
            MUSFI<span className="text-blue-500">QURE</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-widest">
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 border-l border-white/20 pl-8">
            <a href={`https://${DEVELOPER_INFO.socials.github}`} target="_blank" rel="noopener" className="hover:text-blue-400 transition-colors"><Github size={18} /></a>
            <a href={`https://${DEVELOPER_INFO.socials.linkedin}`} target="_blank" rel="noopener" className="hover:text-blue-400 transition-colors"><Linkedin size={18} /></a>
            <button 
              onClick={() => window.location.href = '#contact'}
              className="px-4 py-2 rounded-full cyber-gradient text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-slate-950/95 z-40 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col items-center justify-center gap-8`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-2xl font-bold uppercase tracking-widest hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <div className="flex gap-6 mt-8">
          <a href="#"><Github size={24} /></a>
          <a href="#"><Linkedin size={24} /></a>
          <a href="#"><Mail size={24} /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
