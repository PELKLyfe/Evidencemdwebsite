import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  CheckCircle2, 
  ExternalLink,
  Activity
} from 'lucide-react';
import { PixelCorner } from './PixelCorner';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-8 pb-16 overflow-hidden bg-background">
      {/* Editorial Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Grain Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-multiply" 
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper.png")' }}
        ></div>
        
        {/* Subtle Radial Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,109,105,0.03)_0%,transparent_70%)]"></div>
        
        {/* Vertical Divider System (Grid Lines) */}
        <div className="container mx-auto px-6 h-full border-x border-muted/5 flex justify-between relative">
          <div className="w-px h-full bg-muted/5 absolute left-1/4"></div>
          <div className="w-px h-full bg-muted/5 absolute left-1/2"></div>
          <div className="w-px h-full bg-muted/5 absolute left-3/4"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-12 relative">
          
          {/* Left Content Column */}
          <div className="max-w-2xl">
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl lg:text-7xl font-title text-ink mb-8 leading-[0.9] tracking-tight"
            >
              The clinical reasoning <br/>platform for modern healthcare.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl font-body text-ink/70 mb-12 leading-relaxed"
            >
              Evidence-based answers with citations you can verify, scoped by the model router for clinical, insurance, and operational workflows.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="button button-primary px-8 py-4 text-base shadow-lg shadow-brand/10">
                Explore API Access
              </button>
              <button className="button button-secondary px-8 py-4 text-base">
                Download Mobile App
              </button>
            </motion.div>
          </div>

          {/* Right Visual Anchor Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            {/* Visual Anchor: Evidence Panel Mock UI */}
            <div className="relative">
              {/* Main Panel */}
              <div className="mt-4 bg-white border border-muted/20 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-brand/10"></div>
                
                <div className="flex items-center justify-between mb-8 border-b border-muted/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-brand/10 flex items-center justify-center">
                      <Search size={16} className="text-brand" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-brand tracking-[0.2em]">Clinical Query Panel</p>
                      <p className="text-xs font-mono text-ink/40">ID: EV-MD-9923</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400/20"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400/20"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400/20"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-muted/5 p-4 rounded-xl border border-muted/10">
                    <p className="text-xs font-body text-ink/60 mb-2 italic">User Prompt:</p>
                    <p className="text-sm font-semibold text-ink leading-relaxed">
                      "Assess pulmonary nodule findings in patient with history of COPD and suggest clinical workflow."
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand"></div>
                      <span className="text-[11px] font-bold text-ink uppercase tracking-wider">Automated Reasoning Chain</span>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-px bg-brand/20 h-full absolute left-[35px] mt-2"></div>
                       <div className="space-y-5 relative z-10">
                         <div className="flex items-start gap-4">
                            <div className="w-5 h-5 rounded-full bg-brand text-white flex items-center justify-center shrink-0">
                               <CheckCircle2 size={12} />
                            </div>
                            <div>
                               <p className="text-sm font-body text-ink/80">Segmented pulmonary findings from CT imagery <span className="text-[10px] bg-brand/10 text-brand px-1.5 py-0.5 rounded ml-1 font-mono font-bold">[REF: CT-88]</span></p>
                            </div>
                         </div>
                         <div className="flex items-start gap-4">
                            <div className="w-5 h-5 rounded-full bg-brand text-white flex items-center justify-center shrink-0">
                               <CheckCircle2 size={12} />
                            </div>
                            <div>
                               <p className="text-sm font-body text-ink/80">Cross-referenced Fleischner Society guidelines for solid nodule management.</p>
                            </div>
                         </div>
                         <div className="flex items-start gap-4">
                            <div className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0">
                               <Activity size={12} />
                            </div>
                            <div>
                               <p className="text-sm font-body text-ink/80 font-bold">Recommended: Follow-up imaging in 6 months.</p>
                               <div className="mt-3 flex gap-2">
                                  <span className="text-[9px] font-bold bg-muted/20 text-ink/60 px-2 py-1 rounded">Workflow: Clinical</span>
                                  <span className="text-[9px] font-bold bg-brand text-white px-2 py-1 rounded flex items-center gap-1 cursor-pointer hover:bg-ink transition-colors">
                                    Verify Citation <ExternalLink size={10} />
                                  </span>
                               </div>
                            </div>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-0 w-24 h-24 bg-brand/5 rounded-full blur-2xl"></div>
              </div>

              {/* Floating Element: Citation Tag */}
              <div 
                className="absolute -top-6 -right-6 bg-ink text-white p-4 rounded-xl shadow-xl z-20 border border-white/10"
              >
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded bg-white/10 flex flex-col items-center justify-center border border-white/5">
                      <span className="text-[10px] font-bold leading-none">NEJM</span>
                      <span className="text-[8px] opacity-40">2024</span>
                   </div>
                   <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase mb-0.5">Primary Source</p>
                      <p className="text-[11px] text-brand font-medium">Verified Evidence ID: MDX-77</p>
                   </div>
                </div>
              </div>

              {/* Background Abstract Geometry */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(0,109,105,0.05)_0%,transparent_60%)] pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
      <PixelCorner position="bottom-right" color="#003636" size={48} opacity={1} />
    </section>
  );
};
