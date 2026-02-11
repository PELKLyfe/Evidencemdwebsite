import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  CheckCircle2, 
  ExternalLink,
  Activity
} from 'lucide-react';
import { PixelCorner } from './PixelCorner';
import googlePlayIcon from "figma:asset/6fb3f26f922801efd856801ecabf5f6fe2c72c11.png";
import medicalCrossIcon from "figma:asset/7fc3afe194bb3556e17d78eeec4f965b29ff13fe.png";

export const Hero = ({ onTabChange, onSignInClick }: { onTabChange: (tab: string) => void, onSignInClick?: () => void }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-8 pb-0 overflow-hidden bg-background">
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
              className="lg:text-7xl font-title text-ink mb-8 leading-[0.9] tracking-tight text-[80px]"
            >
              Decision support for <br/>modern healthcare.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:text-3xl font-body text-ink/70 mb-6 leading-tight text-[27px]"
            >
              Clinical and administrative outputs <br className="hidden md:block" />backed by evidence.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center lg:items-start"
            >
              <div className="space-y-5">
                <p className="text-xl lg:text-2xl font-display text-brand italic text-[22px]">
                  Platform for care teams. API for builders.
                </p>
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={onSignInClick}
                    className="bg-ink text-white px-6 py-2.5 rounded-[12px] flex items-center gap-2 hover:bg-brand hover:scale-[1.02] active:scale-[0.98] transition-all border border-brand/10 shadow-lg w-fit group"
                  >
                    <span className="text-lg font-bold font-title tracking-tight">Try the Platform</span>
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <ExternalLink size={12} className="text-white" />
                    </div>
                  </button>
                  <button 
                    onClick={() => onTabChange('api')}
                    className="group relative flex items-center gap-2 px-0 py-2 bg-transparent transition-all w-fit"
                  >
                    <div className="flex items-center relative z-10 font-mono text-sm">
                      <span className="text-brand mr-1 font-bold">&gt;</span>
                      <span className="text-brand animate-pulse mr-1">_</span>
                      <span className="text-brand uppercase tracking-widest group-hover:underline decoration-brand/30 underline-offset-4 transition-all">Explore API</span>
                      <span className="text-[10px] text-brand/40 ml-3">V1.0.4</span>
                    </div>
                  </button>
                </div>
              </div>
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
              <div className="mt-4 bg-[#FEFDFB] border border-brand/10 rounded-xl shadow-2xl p-6 relative overflow-hidden max-w-[440px] ml-auto">
                <div className="absolute top-0 inset-x-0 h-1 bg-brand"></div>
                
                <div className="flex items-center justify-between mb-6 border-b border-brand/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                      <img src={medicalCrossIcon} alt="Medical Cross" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-ink/40">ID: CH-12567 | 58F | Stage 3b CKD</p>
                    </div>
                  </div>
                  <div className="px-2 py-0.5 bg-brand/10 rounded-full border border-brand/20">
                    <span className="text-[9px] font-bold text-brand uppercase tracking-wider">High Risk</span>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Prompt */}
                  <div className="bg-ink/[0.02] p-4 rounded-lg border border-ink/5">
                    <p className="text-[9px] uppercase font-bold text-ink/40 mb-2 tracking-widest">Query</p>
                    <p className="text-sm font-title text-ink leading-tight">
                      "Assess readmission risk and draft an SGLT2i medical rationale."
                    </p>
                  </div>

                  {/* Logic Chain */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-white border border-brand/10 rounded-lg shadow-sm">
                        <p className="text-[9px] text-ink/40 uppercase font-bold mb-0.5">Clinical Risk</p>
                        <p className="text-lg font-title text-brand">9.2% A1c <span className="text-[9px] font-mono text-ink/30 ml-1">[ev001]</span></p>
                      </div>
                      <div className="p-3 bg-white border border-brand/10 rounded-lg shadow-sm">
                        <p className="text-[9px] text-ink/40 uppercase font-bold mb-0.5">Admin Logic</p>
                        <p className="text-lg font-title text-ink">DRG 291 <span className="text-[9px] font-body text-ink/60 font-medium">(w/ MCC)</span></p>
                      </div>
                    </div>

                    <div className="relative pl-5 space-y-3 border-l border-brand/10 ml-1.5">
                      <div className="relative">
                        <div className="absolute -left-[24.5px] top-1 w-2 h-2 rounded-full bg-brand ring-4 ring-brand/5"></div>
                        <p className="text-[11px] font-body text-ink/80 leading-snug">
                          <span className="font-bold text-ink text-[10px] uppercase tracking-wide">SDOH:</span> 1.3 multiplier for transport barriers <span className="text-[9px] text-brand font-mono">[ev016]</span>.
                        </p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[24.5px] top-1 w-2 h-2 rounded-full bg-brand ring-4 ring-brand/5"></div>
                        <p className="text-[11px] font-body text-ink/80 leading-snug">
                          <span className="font-bold text-ink text-[10px] uppercase tracking-wide">PA:</span> Jardiance indicated for E11.22/N18.32 <span className="text-[9px] text-brand font-mono">[ev001]</span>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Medical Necessity Note */}
                  <div className="bg-brand/[0.03] p-4 rounded-lg border border-brand/10">
                    <p className="text-[9px] uppercase font-bold text-brand mb-2 tracking-[0.15em]">Draft: Medical Necessity Note</p>
                    <p className="text-[11px] font-body text-ink/70 leading-relaxed line-clamp-3 italic">
                      "Patient presents with vascular congestion [ev010], edema, and uncontrolled HTN [ev003] post-syncope [ev_011]. Mgmt failed due to SDOH (1.3 multiplier). Monitoring & IV diuresis titration required."
                    </p>
                  </div>
                </div>

                {/* CTA Action Bar */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-brand/5">
                  <div className="flex gap-1.5">
                    <span className="text-[9px] font-bold bg-brand/5 text-brand px-2 py-1 rounded border border-brand/10">Ref: Cardiology</span>
                    <span className="text-[9px] font-bold bg-brand/5 text-brand px-2 py-1 rounded border border-brand/10">PA Drafted</span>
                  </div>
                  <button className="text-[9px] font-bold text-white bg-brand px-3 py-1.5 rounded-lg hover:bg-ink transition-all flex items-center gap-1.5 shadow-lg shadow-brand/10">
                    Execute <CheckCircle2 size={10} />
                  </button>
                </div>
              </div>

              {/* Floating Element: Source Citation */}
              <div 
                className="absolute -top-6 -right-4 bg-ink text-white p-4 rounded-xl shadow-2xl z-20 border border-brand/20 w-44"
              >
                <div className="flex items-start gap-2 mb-2">
                   <div className="w-8 h-8 rounded bg-white/5 flex flex-col items-center justify-center border border-white/10 shrink-0">
                      <span className="text-[9px] font-bold leading-none">EMPA</span>
                   </div>
                   <div>
                      <p className="text-[9px] font-bold tracking-widest uppercase mb-0.5 text-brand">Trial Evidence</p>
                      <p className="text-[10px] leading-tight opacity-80">CV Mortality Reduction</p>
                   </div>
                </div>
                <div className="h-px bg-white/10 w-full mb-2"></div>
                <p className="text-[9px] text-brand font-mono font-medium">Source: PubMed / RCT</p>
              </div>

              {/* Background Glow */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(0,109,105,0.08)_0%,transparent_70%)] pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
      <PixelCorner position="bottom-right" color="#003636" size={48} opacity={1} className="hidden md:block" />
    </section>
  );
};
