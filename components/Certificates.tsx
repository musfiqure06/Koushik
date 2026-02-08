
import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '../constants';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-24 relative bg-slate-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <Award size={16} className="text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Accomplishments</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Professional <span className="cyber-text-gradient">Certifications</span></h2>
          <p className="text-slate-400">Verified credentials from world-class institutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[350px] rounded-3xl overflow-hidden glass-card border-white/5 hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="absolute inset-0">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-2">{cert.issuer}</p>
                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{cert.name}</h3>
                
                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar size={14} />
                    <span className="text-xs">{cert.date}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/10 text-white hover:bg-blue-500 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Holographic light effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-blue-500/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
