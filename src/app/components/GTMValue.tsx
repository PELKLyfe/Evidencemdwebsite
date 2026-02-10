import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote } from 'lucide-react';
import { PixelCorner } from './PixelCorner';

export const GTMValue = ({ onContactClick }: { onContactClick: () => void }) => {
  const stats = [
    { label: "Accuracy", value: "96%" },
    { label: "Cost Savings", value: "50%" },
    { label: "Logic Latency", value: "15.3s" },
    { label: "Source Citations", value: "100%" }
  ];

  const testimonials = [
    {
      name: "Jatin Sohlot",
      role: "CTO, Nodesian",
      quote: "Integrating the decision API into our existing infrastructure reduced operational overhead by 40%. We maintain clinical-grade performance at enterprise scale."
    },
    {
      name: "Spencer Wozniak",
      role: "CTO, Serelora",
      quote: "Financial-grade logic identifies coverage nuances that generic models miss. The evidence chains ensure audit-ready compliance for all claims processing."
    }
  ];

  return (
    <section id="enterprise" className="py-24 bg-ink relative overflow-visible">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand/30"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-[42px] mb-16 font-title"
          >
            Decision infrastructure for enterprise medical systems
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl text-left"
            >
              <h3 className="text-white text-lg font-title mb-2">Network-Scale Logic</h3>
              <p className="text-sm font-body text-white/60 leading-relaxed">Scale clinical-grade insight across your entire provider ecosystem.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl text-left"
            >
              <h3 className="text-white text-lg font-title mb-2">Frictionless Financial Logic</h3>
              <p className="text-sm font-body text-white/60 leading-relaxed">Eliminate administrative friction with integrated coverage and financial-grade logic.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl text-left"
            >
              <h3 className="text-white text-lg font-title mb-2">Total Compliance Control</h3>
              <p className="text-sm font-body text-white/60 leading-relaxed">Maintain audit-ready transparency with document-level citations and evidence chains.</p>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#FEFDFB] border border-[#006D69]/30 px-10 py-8 rounded-2xl text-center min-w-[200px] shadow-sm"
              >
                <div className="text-4xl md:text-5xl font-bold text-brand mb-2 font-title">{stat.value}</div>
                <div className="text-ink/60 font-bold uppercase tracking-widest text-[10px] font-body">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-12 max-w-3xl mx-auto">
            <h3 className="text-white text-2xl mb-4 font-title">Interested in enterprise bundle pricing?</h3>
            <p className="text-white/60 mb-8 font-body max-w-xl mx-auto">
              Get custom quotes for network-scale deployments, volume API credits, and dedicated clinical support for your medical organization.
            </p>
            <button 
              onClick={onContactClick}
              className="button button-primary px-10 py-4 text-lg"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-[32px] border border-white/10 hover:border-brand/30 transition-all flex flex-col"
            >
              <Quote className="text-brand/40 mb-8 shrink-0" size={32} />
              <p className="pull-quote text-white/90 mb-10 flex-grow font-body">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand font-bold text-lg">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-bold font-title text-lg">{t.name}</div>
                  <div className="text-brand/60 text-xs font-bold uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* L Square Motif */}
      <div 
        className="absolute top-12 right-6 md:right-16 pointer-events-none select-none z-0 scale-x-[-1] scale-y-[-1] opacity-60 md:opacity-100"
        style={{ width: 64, height: 64 }}
      >
        {[
          { x: 1, y: 0 },
          { x: 0, y: 1 },
          { x: 2, y: 1 },
          { x: 1, y: 2 }
        ].map((block, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            style={{
              position: 'absolute',
              width: '33.33%',
              height: '33.33%',
              backgroundColor: '#FEFDFB',
              top: `${block.y * 33.33}%`,
              left: `${block.x * 33.33}%`,
            }}
          />
        ))}
      </div>
      
      {/* Custom 3-block checkered motif */}
      <div 
        className="absolute bottom-[-48px] md:bottom-[-72px] left-0 pointer-events-none select-none z-10 [transform:scaleX(-1)_scaleY(-1)]"
        style={{ width: 96, height: 96 }}
      >
        {[
          { x: 1, y: 0 },
          { x: 0, y: 1 },
          { x: 2, y: 1 }
        ].map((block, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            style={{
              position: 'absolute',
              width: '33.33%',
              height: '33.33%',
              backgroundColor: '#FEFDFB',
              bottom: `${block.y * 33.33}%`,
              left: `${block.x * 33.33}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};
