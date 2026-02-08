
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, Copy } from 'lucide-react';
import { DEVELOPER_INFO } from '../constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass-card rounded-[2rem] p-8 md:p-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Let's build<br />something <span className="cyber-text-gradient">epic</span>.</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Whether you have a question or just want to say hi, my inbox is always open. 
                I'm currently looking for new opportunities and collaborations.
              </p>

              <div className="space-y-6">
                <button 
                  onClick={copyEmail}
                  className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white/5 transition-colors w-full text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-black tracking-widest">Email Me</p>
                    <p className="text-lg font-bold flex items-center gap-2">
                      {DEVELOPER_INFO.email}
                      {copied ? <CheckCircle2 size={16} className="text-green-400" /> : <Copy size={16} className="text-slate-600" />}
                    </p>
                  </div>
                </button>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-500 ml-1">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-500 ml-1">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-500 ml-1">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button
                  disabled={status !== 'idle'}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                    status === 'success' ? 'bg-green-500' : 'cyber-gradient hover:opacity-90'
                  }`}
                >
                  {status === 'idle' && (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                  {status === 'sending' && (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  )}
                  {status === 'success' && (
                    <>
                      <CheckCircle2 size={20} />
                      Sent Successfully!
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
