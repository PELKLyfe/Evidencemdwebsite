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

export const Hero = ({ onTabChange }: { onTabChange: (tab: string) => void }) => {
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
              className="flex flex-col items-center lg:items-start gap-8"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://apps.apple.com/us/app/evidencemd-medical-reasoning/id6751770543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ink text-white px-5 py-2.5 rounded-[12px] flex items-center gap-3 hover:opacity-90 transition-all border border-brand/20 shadow-lg w-fit"
                >
                  <svg viewBox="0 0 384 512" className="w-8 h-8 fill-white">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[9px] font-medium uppercase tracking-tight">Download on the</span>
                    <span className="text-lg font-bold font-body -mt-1 tracking-tight">App Store</span>
                  </div>
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=ai.evidencemd.chat&pcampaignid=web_share" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-ink text-white px-5 py-2.5 rounded-[12px] flex items-center gap-3 hover:opacity-90 transition-all border border-brand/20 shadow-lg w-fit"
                >
                  <img src={googlePlayIcon} alt="Google Play" className="w-8 h-8 object-contain" />
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[9px] font-medium uppercase tracking-tight">GET IT ON</span>
                    <span className="text-lg font-bold font-body -mt-1 tracking-tight text-nowrap">Google Play</span>
                  </div>
                </a>
              </div>
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
      <PixelCorner position="bottom-right" color="#003636" size={48} opacity={1} className="hidden md:block" />
    </section>
  );
};
