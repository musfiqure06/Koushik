
import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Background3D from './components/Background3D';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          const target = document.querySelector(targetId);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      <Background3D />
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Statistics Bar */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 glass-card rounded-2xl p-8">
            {[
              { label: 'Experience', val: '5+' },
              { label: 'Projects', val: '40+' },
              { label: 'Certificates', val: '12' },
              { label: 'Satisfied Clients', val: '100%' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <h4 className="text-4xl font-black cyber-text-gradient">{stat.val}</h4>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <About />
        <Skills />
        <Projects />
        <Certificates />

        {/* Cinematic Quote */}
        <section className="py-40 flex flex-col items-center justify-center text-center px-6">
          <blockquote className="max-w-4xl">
            <h3 className="text-3xl md:text-5xl font-light italic text-slate-300 leading-tight">
              "The best way to predict the future is to <span className="text-blue-500 font-bold not-italic">code</span> it."
            </h3>
            <footer className="mt-8 text-slate-500 font-space tracking-widest uppercase text-sm">— MD. Musfiqure Rahman</footer>
          </blockquote>
        </section>

        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 bg-slate-950/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MD. Musfiqure Rahman. Built with React, Three.js & Passion.
          </p>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default App;
