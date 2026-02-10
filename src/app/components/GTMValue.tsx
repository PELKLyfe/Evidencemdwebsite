import React from 'react';
import { motion } from 'motion/react';

export const GTMValue = ({ onContactClick }: { onContactClick: () => void }) => {
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
            className="text-white text-[32px] md:text-[42px] mb-4 font-title max-w-4xl mx-auto"
          >
            Evidence-based clinical reasoning infrastructure for enterprise teams.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-12 max-w-2xl mx-auto"
          >
            HIPAA-aligned. Encryption by default. BAA available. Audit logging and role-based access controls.
          </motion.div>

          <div className="flex flex-col items-center gap-6 mb-20">
            <div className="flex flex-col md:flex-row gap-4">
              <button 
                onClick={onContactClick}
                className="button button-primary px-10 py-4 text-lg"
              >
                Schedule Demo
              </button>
              <button 
                onClick={onContactClick}
                className="bg-white/5 border border-white/20 text-white hover:bg-white/10 px-10 py-4 text-lg rounded-full transition-all font-body"
              >
                Request Quote
              </button>
              <button 
                onClick={onContactClick}
                className="bg-transparent border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-8 py-4 text-base rounded-full transition-all font-body flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-brand"></div>
                Security + Compliance
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 text-center">Trusted by teams building clinical-grade workflows</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Structured Outputs",
                  desc: "JSON-ready, schema-stable responses designed for production parsing and automation.",
                  value: "Structured"
                },
                {
                  title: "Audit-ready Citations",
                  desc: "Source-linked evidence trails designed for governance review and audit defensibility.",
                  value: "Audit-ready"
                },
                {
                  title: "Policy-led Governance",
                  desc: "Org-level policies, access control, review workflows, and configurable escalation rules.",
                  value: "Policy-led"
                },
                {
                  title: "Production Reliability",
                  desc: "Deterministic formatting modes, request IDs, retry-safe endpoints, and observability support.",
                  value: "Production"
                }
              ].map((block, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#FEFDFB] border border-[#006D69]/30 px-8 py-10 rounded-2xl text-center shadow-sm flex flex-col items-center justify-center min-h-[260px]"
                >
                  <div className="text-2xl font-bold text-brand mb-2 font-title">{block.value}</div>
                  <div className="text-ink/60 font-bold uppercase tracking-[0.2em] text-[10px] font-body mb-4">{block.title}</div>
                  <p className="text-ink/60 text-xs font-body leading-relaxed">{block.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>


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
