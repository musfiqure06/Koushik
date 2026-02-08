
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-4 flex items-center justify-center gap-4"
          >
            <Cpu className="text-purple-500" />
            Tech Stack
          </motion.h2>
          <p className="text-slate-400">Mastering the tools of the modern digital landscape</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group"
            >
              <span className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </span>
              <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
              
              <div className="w-full bg-slate-800 h-2 rounded-full mt-4 relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute h-full cyber-gradient rounded-full"
                />
              </div>
              <span className="mt-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                Level: {skill.level}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
