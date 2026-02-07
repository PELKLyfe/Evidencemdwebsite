import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, Image as ImageIcon, MessageSquare, ArrowUp, Paperclip } from 'lucide-react';
import { PixelCorner } from './PixelCorner';
import appScreenshot from "figma:asset/ead860eee7467ede18a71a54fc9c6bcb4464eb53.png";
import brandIcon from "figma:asset/553df17da779a92d47a352fd5eecb52645fc0217.png";

export const CoreProduct = () => {
  const features = [
    {
      title: "Citations you can verify",
      description: "Access an evidence chain for every clinical response with document-level citations and direct source links.",
      icon: <FileText className="text-brand" />
    },
    {
      title: "Clinical-grade reasoning",
      description: "Process and reason over clinical text, medical images, and multipage PDFs simultaneously with high accuracy.",
      icon: <ImageIcon className="text-brand" />
    },
    {
      title: "Model-Routed Intelligence",
      description: "One interface with multiple reasoning modes. The model router scopes each query into clinical, insurance/financial, or developer workflows.",
      icon: <MessageSquare className="text-brand" />
    }
  ];

  return (
    <section id="app" className="py-16 bg-background relative">
      {/* L Square Motif */}
      <div 
        className="absolute top-0 right-12 pointer-events-none select-none z-0 scale-x-[-1] scale-y-[-1]"
        style={{ width: 96, height: 96 }}
      >
        {[
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 0, y: 1 }
        ].map((block, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="border-2 border-[#FEFDFB]"
            style={{
              position: 'absolute',
              width: 48,
              height: 48,
              backgroundColor: '#003636',
              top: block.y * 48,
              right: block.x * 48,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2 text-4xl md:text-5xl lg:text-6xl text-ink font-title tracking-tight"
          >
            Clinical reasoning for the <span className="text-brand italic font-display">care team</span>
          </motion.h2>
          <div className="h-4" />
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center max-w-6xl mx-auto">
          {/* Mock Chat Window */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card p-0 overflow-hidden shadow-2xl border-brand/10 bg-white group max-w-[480px] mx-auto lg:mx-0"
          >
            {/* App Header */}
            <div className="bg-[#f8fafa] border-b border-muted/20 px-3 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-400/30"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400/30"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400/30"></div>
                </div>
                <div className="flex items-center gap-1.5 border-l border-muted/20 pl-3">
                  <div className="w-6 h-6 rounded bg-brand flex items-center justify-center overflow-hidden">
                    <img src={brandIcon} alt="EvidenceMD" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[9px] font-bold text-ink uppercase tracking-wider">Reasoning</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Removed Expert Badge */}
                {/* Removed Placeholder Circle */}
              </div>
            </div>
            
            {/* App Content Area (using real screenshot) */}
            <div className="relative h-[420px] overflow-hidden bg-white">
              <div className="absolute inset-0">
                <img 
                  src={appScreenshot} 
                  alt="EvidenceMD App Screenshot" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Overlay Cues */}
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none"></div>
            </div>
            
            {/* App Footer/Input Area */}
            <div className="p-3 bg-white border-t border-muted/10">
              <div className="bg-[#f8fafa] border border-muted/20 rounded-xl px-3 py-1.5 shadow-sm flex items-center justify-between gap-3">
                <div className="text-ink/30 text-[10px] font-body flex-grow">Ask a follow up...</div>
                <div className="flex items-center gap-1.5">
                  <div className="p-1 text-ink/40">
                    <Paperclip size={14} />
                  </div>
                  <div className="w-6 h-6 rounded-lg bg-brand/20 flex items-center justify-center text-brand">
                    <ArrowUp size={14} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <div className="space-y-6">
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                <p className="text-sm font-body text-ink/70">Access clinical-grade reasoning on every device.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                <p className="text-sm font-body text-ink/70">Verify decisions with traceable citations.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                <p className="text-sm font-body text-ink/70">Collaborate using shared evidence chains.</p>
              </div>
            </div>
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4 items-start group"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 20 })}
                </div>
                <div>
                  <h3 className="text-xl mb-1">{feature.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed font-body">{feature.description}</p>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="pt-4"
            >
               <button className="button button-primary px-8 py-3 text-base">
                 Download Mobile App
               </button>
            </motion.div>
          </div>
        </div>

        {/* App Plans Section */}
        <div className="mt-32 pt-20 border-t border-muted/20">
          <div className="text-center mb-16">
            <h2 className="mb-4">App Plans</h2>
            <p className="text-lg text-ink/60 font-body">Choose the plan that fits your workflow.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {/* Free Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8 flex flex-col items-center text-center hover:border-brand/50 transition-colors"
            >
              <h3 className="text-2xl mb-2 font-title">Free</h3>
              <div className="text-3xl font-bold mb-6 text-ink">$0</div>
              <p className="text-ink/60 text-sm mb-8 font-body leading-relaxed flex-grow">
                Basic access to EvidenceMD with limited question use.
              </p>
              <button className="button button-secondary w-full py-3">Start Free</button>
            </motion.div>

            {/* Plus Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-8 flex flex-col items-center text-center border-brand ring-1 ring-brand/20 relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-[#fefdfb] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Recommended</div>
              <h3 className="text-2xl mb-2 font-title">Plus</h3>
              <div className="text-3xl font-bold mb-6 text-ink">$25 <span className="text-sm font-normal text-ink/40">/ month</span></div>
              <div className="space-y-4 mb-8 flex-grow">
                <p className="text-ink/60 text-sm font-body leading-relaxed">
                  Full access for individual clinicians.
                </p>
                <div className="flex items-center justify-center gap-2 text-brand text-sm font-semibold">
                  <CheckCircle2 size={16} />
                  <span>Learner+ (CME/CPD opportunities) — included with Plus and above.</span>
                </div>
              </div>
              <button className="button button-primary w-full py-3">Download the App</button>
            </motion.div>

            {/* Pro Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-8 flex flex-col items-center text-center hover:border-brand/50 transition-colors"
            >
              <h3 className="text-2xl mb-2 font-title">Pro</h3>
              <div className="text-3xl font-bold mb-6 text-ink">$79 <span className="text-sm font-normal text-ink/40">/ month</span></div>
              <div className="space-y-4 mb-8 flex-grow">
                <p className="text-ink/60 text-sm font-body leading-relaxed">
                  Includes AI Ambient Scribe.
                </p>
                <div className="flex items-center justify-center gap-2 text-brand text-sm font-semibold">
                  <CheckCircle2 size={16} />
                  <span>Learner+ (CME/CPD opportunities) — included with Plus and above.</span>
                </div>
              </div>
              <button className="button button-primary w-full py-3">Download the App</button>
            </motion.div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-[11px] text-ink/40 font-body">
              Learner+ is included with Plus and Pro. Availability may vary by region and accrediting body.
            </p>
            <p className="text-[11px] text-ink/40 font-body">
              Plans apply to the EvidenceMD app. API usage is priced separately.
            </p>
          </div>
        </div>
      </div>
      <PixelCorner position="bottom-left" color="#003636" size={48} opacity={1} />
    </section>
  );
};
