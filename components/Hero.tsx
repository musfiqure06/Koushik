
import React from 'react';
import { motion } from 'framer-motion';
import { DEVELOPER_INFO } from '../constants';
import { ChevronDown, Sparkles, Code, Layout } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-6 z-10 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
        >
          <Sparkles size={16} className="text-yellow-400" />
          <span className="text-sm font-medium tracking-wide uppercase">Open for new opportunities</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          Crafting Digital<br />
          <span className="cyber-text-gradient">Experiences</span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Hi, I'm <span className="text-white font-bold">{DEVELOPER_INFO.name}</span>. 
          A specialized {DEVELOPER_INFO.role} building the future of the web.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-4 rounded-xl cyber-gradient font-bold text-lg flex items-center gap-3 w-full sm:w-auto justify-center shadow-lg shadow-blue-500/20"
          >
            <Layout size={20} />
            See My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm font-bold text-lg flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Code size={20} />
            Hire Me
          </motion.a>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Scroll to Explore</span>
        <ChevronDown size={24} className="text-slate-500" />
      </motion.div>
    </section>
  );
};

export default Hero;
