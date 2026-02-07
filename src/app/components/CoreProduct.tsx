import React from 'react';
import { motion } from 'motion/react';
import { FileText, Image as ImageIcon, MessageSquare, ArrowUp, Paperclip, Share2, Bookmark } from 'lucide-react';
import { PixelCorner } from './PixelCorner';
import appScreenshot from "figma:asset/ead860eee7467ede18a71a54fc9c6bcb4464eb53.png";
import brandIcon from "figma:asset/553df17da779a92d47a352fd5eecb52645fc0217.png";

// A realistic mock UI for the App to ensure perfect fit on mobile
const MockAppUI = () => (
  <div className="flex flex-col h-full bg-white font-body">
    {/* Status Bar Mock */}
    <div className="px-6 pt-4 pb-2 flex justify-between items-center opacity-40">
      <span className="text-[10px] font-bold">9:41</span>
      <div className="flex gap-1">
        <div className="w-3 h-3 rounded-full border border-ink/20" />
        <div className="w-3 h-3 rounded-full border border-ink/20" />
      </div>
    </div>

    {/* Search/Query area */}
    <div className="px-5 py-3">
      <div className="bg-[#f0f4f4] rounded-2xl p-4 shadow-sm border border-brand/5">
        <p className="text-[12px] text-ink/80 leading-relaxed italic">
          "What are the clinical guidelines for managing Stage 2 Hypertension in patients with chronic kidney disease?"
        </p>
      </div>
    </div>

    {/* Reasoning Response */}
    <div className="flex-grow px-5 py-4 space-y-5 overflow-y-auto no-scrollbar">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center shrink-0 shadow-lg shadow-brand/20">
          <img src={brandIcon} alt="" className="w-5 h-5 object-contain" />
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-brand uppercase tracking-widest">Evidence Reasoning</span>
            <div className="h-px flex-grow bg-brand/10" />
          </div>
          
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="w-1 h-1 rounded-full bg-brand mt-1.5 shrink-0" />
              <p className="text-[11px] text-ink/70 leading-relaxed">
                <span className="font-bold text-ink">Target BP:</span> Guidelines recommend <span className="bg-brand/5 text-brand px-1 rounded">{"<"}130/80 mmHg</span> for patients with CKD. [1]
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-1 h-1 rounded-full bg-brand mt-1.5 shrink-0" />
              <p className="text-[11px] text-ink/70 leading-relaxed">
                <span className="font-bold text-ink">First-line therapy:</span> ACE inhibitors or ARBs preferred for albuminuria. [2]
              </p>
            </div>
          </div>

          {/* Sources Card */}
          <div className="bg-[#f8fafa] rounded-xl p-4 border border-brand/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold text-ink/40 uppercase tracking-wider">Sources (3)</span>
              <div className="flex gap-2">
                <Share2 size={12} className="text-ink/30" />
                <Bookmark size={12} className="text-ink/30" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-white border border-brand/10 flex items-center justify-center text-[8px] font-bold text-brand">1</div>
                <span className="text-[9px] text-ink/60 truncate">KDIGO 2024 Clinical Practice Guideline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
    <section id="app" className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-0 md:px-6 relative">
        <div className="text-center mb-10 md:mb-16 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl md:text-5xl lg:text-6xl text-ink font-title tracking-tight"
          >
            Clinical reasoning for the <span className="text-brand italic font-display">care team</span>
          </motion.h2>
          <p className="text-lg text-ink/60 font-body max-w-2xl mx-auto hidden md:block">
            Evidence-based intelligence at the point of care.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          
          {/* App Preview */}
          <div className="w-full flex justify-center px-6 lg:px-0">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[300px] md:max-w-[420px]"
            >
              <div className="relative bg-[#003636] p-2 md:p-3 rounded-[44px] md:rounded-[60px] shadow-2xl overflow-hidden border-4 border-ink/5">
                <div className="relative bg-white rounded-[36px] md:rounded-[52px] overflow-hidden">
                  <div className="relative h-[540px] md:h-[620px] flex flex-col">
                    <div className="md:hidden h-full">
                      <MockAppUI />
                    </div>
                    <div className="hidden md:block h-full relative">
                      <div className="bg-[#f8fafa] border-b border-muted/10 px-6 py-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
                          <img src={brandIcon} alt="EvidenceMD" className="w-5 h-5 object-contain" />
                        </div>
                        <span className="text-[12px] font-bold text-ink uppercase tracking-wider">Reasoning</span>
                      </div>
                      <div className="h-[460px] overflow-hidden">
                        <img 
                          src={appScreenshot} 
                          alt="EvidenceMD App Screenshot" 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
                        <div className="bg-[#f8fafa] border border-muted/20 rounded-2xl px-4 py-3 shadow-sm flex items-center justify-between gap-3">
                          <div className="text-ink/30 text-[12px] font-body">Ask a follow up...</div>
                          <div className="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                            <ArrowUp size={18} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:hidden p-4 bg-white border-t border-brand/5">
                      <div className="bg-[#f8fafa] border border-brand/10 rounded-2xl px-4 py-3 flex items-center justify-between gap-3">
                        <div className="text-ink/30 text-[11px] font-body">Ask a follow up...</div>
                        <div className="w-8 h-8 rounded-xl bg-brand flex items-center justify-center text-white shadow-lg shadow-brand/20">
                          <ArrowUp size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Column */}
          <div className="w-full space-y-10 lg:space-y-14 px-6 lg:px-0">
            <div className="lg:hidden w-full overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-6 px-6 pb-6">
              <div className="flex gap-4">
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    className="shrink-0 w-[280px] snap-center bg-white border border-brand/10 p-7 flex flex-col gap-5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                      {React.cloneElement(feature.icon as React.ReactElement, { size: 24 })}
                    </div>
                    <div>
                      <h3 className="text-xl font-title mb-2">{feature.title}</h3>
                      <p className="text-ink/60 text-sm leading-relaxed font-body">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-10">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-brand/5 border border-brand/5 flex items-center justify-center group-hover:bg-brand/10 group-hover:scale-105 transition-all duration-300">
                    {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
                  </div>
                  <div>
                    <h3 className="text-2xl mb-1.5 font-title">{feature.title}</h3>
                    <p className="text-ink/60 text-lg leading-relaxed font-body max-w-md">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <button className="button button-primary w-full sm:w-auto px-12 py-4.5 shadow-xl shadow-brand/20 rounded-2xl">
                 Download Mobile App
               </button>
               <button className="button button-secondary w-full sm:w-auto px-12 py-4.5 rounded-2xl">
                 Live Demo
               </button>
            </div>
          </div>
        </div>

        {/* App Plans */}
        <div className="mt-24 md:mt-40 pt-20 border-t border-muted/10 relative">
          <div className="text-center mb-16 px-6">
            <h2 className="mb-4 text-4xl md:text-5xl font-title">App Plans</h2>
            <p className="text-lg text-ink/60 font-body">Choose the configuration that suits your needs.</p>
          </div>

          <div className="w-full overflow-hidden">
            <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-8 md:px-0 md:grid md:grid-cols-3 gap-16 md:gap-10 max-w-6xl mx-auto pb-12 md:pb-0">
              {[
                {
                  name: "Free",
                  price: "$0",
                  desc: "Basic access to EvidenceMD with limited question use. Perfect for exploring features.",
                  btn: "Start Free",
                  primary: false
                },
                {
                  name: "Plus",
                  price: "$25",
                  period: "/ month",
                  desc: "Full access for individual clinicians. Learner+ (CME/CPD) included automatically.",
                  btn: "Download App",
                  primary: true
                },
                {
                  name: "Pro",
                  price: "$79",
                  period: "/ month",
                  desc: "Includes AI Ambient Scribe for seamless documentation. Learner+ included.",
                  btn: "Download App",
                  primary: false
                }
              ].map((plan, i) => (
                <motion.div 
                  key={i}
                  className={`shrink-0 w-[calc(100vw-64px)] sm:w-[340px] md:w-full snap-center bg-white border border-brand/10 p-10 flex flex-col items-center text-center transition-all duration-300 relative rounded-[32px] ${
                    plan.primary ? 'border-brand ring-4 ring-brand/5 md:scale-105 z-10 shadow-2xl' : 'shadow-sm'
                  }`}
                >
                  <h3 className="text-2xl mb-2 font-title">{plan.name}</h3>
                  <div className="text-4xl md:text-5xl font-bold mb-8 text-ink">
                    {plan.price}
                    {plan.period && <span className="text-base font-normal text-ink/30 ml-1">{plan.period}</span>}
                  </div>
                  <p className="text-ink/60 text-base mb-10 font-body leading-relaxed flex-grow">
                    {plan.desc}
                  </p>
                  <button className={`button ${plan.primary ? 'button-primary' : 'button-secondary'} w-full py-4.5 rounded-2xl font-bold`}>
                    {plan.btn}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center px-10">
            <p className="text-[11px] md:text-[12px] text-ink/30 font-body max-w-xl mx-auto italic">
              Learner+ included with Plus and Pro. Plans apply to the app; API usage is priced separately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
