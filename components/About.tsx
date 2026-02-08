
import React from 'react';
import { motion } from 'framer-motion';
import { DEVELOPER_INFO } from '../constants';
import { User, Target, Zap, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Cinematic Profile Pic */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <motion.div 
              whileHover={{ rotateY: 10, rotateX: -5 }}
              className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] max-w-sm mx-auto group shadow-2xl shadow-blue-500/20 perspective-1000"
            >
              <img 
                src={DEVELOPER_INFO.profilePic} 
                alt={DEVELOPER_INFO.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
              
              {/* Profile Badge */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-blue-600/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <CheckCircle size={16} className="text-white" />
                <span className="text-xs font-black uppercase tracking-widest text-white">President of EUB Programming Club</span>
              </div>
            </motion.div>

            {/* Background elements for profile */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
            
            {/* Floating Stats around profile */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 right-0 md:-right-10 glass-card p-4 rounded-2xl hidden md:block"
            >
              <p className="text-[10px] text-slate-500 uppercase font-black">Experience</p>
              <p className="text-xl font-bold">5+ Years</p>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 flex items-center gap-4">
              <User className="text-blue-500" size={32} />
              The Developer
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">
              {DEVELOPER_INFO.bio}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Target className="text-red-400" />, title: "Strategy", text: "Planning every byte for maximum impact." },
                { icon: <Zap className="text-yellow-400" />, title: "Performance", text: "Fast by default, optimized by design." },
                { icon: <Award className="text-blue-400" />, title: "Quality", text: "Obsessed with pixel-perfect UI." },
                { icon: <CheckCircle className="text-green-400" />, title: "Reliability", text: "Robust code that scales gracefully." }
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl hover:border-blue-500/50 transition-all hover:bg-white/5">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>

            <motion.a 
              href={DEVELOPER_INFO.resumeUrl}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-10 px-10 py-4 rounded-2xl cyber-gradient text-white font-bold transition-all shadow-xl shadow-blue-500/20"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
