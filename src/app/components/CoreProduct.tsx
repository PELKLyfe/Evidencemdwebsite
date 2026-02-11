import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Image as ImageIcon, MessageSquare, ArrowUp, Paperclip, Share2, Bookmark, Check, ChevronRight } from 'lucide-react';
import { PixelCorner } from './PixelCorner';
import appScreenshot from "figma:asset/ead860eee7467ede18a71a54fc9c6bcb4464eb53.png";
import brandIcon from "figma:asset/553df17da779a92d47a352fd5eecb52645fc0217.png";
import googlePlayIcon from "figma:asset/6fb3f26f922801efd856801ecabf5f6fe2c72c11.png";

// New high-fidelity screenshots
import imagingImg from "figma:asset/3034510909197c8bc5c09f33a2227dad35535495.png";
import labTrendImg from "figma:asset/a8a5ba09cfaf4269adb0591e24de864169523433.png";
import scribeImg from "figma:asset/43e5aa74c09423ceae353e3d63f9d029b9f834fd.png";

export const CoreProduct = ({ onSignInClick }: { onSignInClick?: () => void }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');
  const [activeIndex, setActiveIndex] = useState(0);

  const outcomes = [
    {
      title: "Ambient scribe output",
      description: "Fast, review-ready documentation that captures the visit accurately without template-filling.",
      icon: <FileText className="text-brand" />,
      image: scribeImg
    },
    {
      title: "Imaging interpretation summary",
      description: "Clear extraction of key findings and clinical implications from imaging, with the signal surfaced first.",
      icon: <ImageIcon className="text-brand" />,
      image: imagingImg
    },
    {
      title: "Trend chart + explanation",
      description: "Longitudinal trends made obvious, paired with a plain-language clinical interpretation of what changed and why it matters.",
      icon: <MessageSquare className="text-brand" />,
      image: labTrendImg
    }
  ];

  // Auto-cycle outcomes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % outcomes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const appPlans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      desc: "Perfect for exploring core capabilities.",
      features: [
        "Basic note generation",
        "10 free scribe sessions",
        "Limited decision support questions",
        "Standard capabilities included"
      ],
      btn: "Get Started",
      primary: false
    },
    {
      name: "Pro",
      price: billingCycle === 'annually' ? "$89" : "$119",
      period: "/ month",
      billingNote: billingCycle === 'annually' ? "Billed annually" : "Billed monthly",
      desc: "Unlimited capacity for professional practice.",
      features: [
        "Unlimited note generation",
        "Unlimited scribe sessions",
        "Unlimited clinical decision support*",
        "All Pro Actions included",
        "Higher-intensity workflows & CME/CPD"
      ],
      btn: "Sign Up",
      primary: true
    }
  ];

  return (
    <section id="app" className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-0 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl md:text-5xl lg:text-6xl text-ink font-title tracking-tight"
          >
            Decision support built for the <span className="text-brand italic font-display text-4xl md:text-[48px]">care team.</span>
          </motion.h2>
          <div className="max-w-3xl mx-auto mt-6">
            <p className="text-ink/60 font-body text-lg italic">
              Three core outputs designed for real clinical workflow.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          
          {/* App Preview Frame */}
          <div className="w-full flex justify-center px-6 lg:px-0 order-1 lg:order-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[320px] md:max-w-[420px]"
            >
              <div className="relative bg-[#003636] p-2 md:p-3 rounded-[44px] md:rounded-[60px] shadow-2xl overflow-hidden border-4 border-ink/5">
                <div className="relative bg-white rounded-[36px] md:rounded-[52px] overflow-hidden aspect-[9/19] flex flex-col">
                  
                  {/* Internal Carousel */}
                  <div className="flex-grow w-full relative bg-[#f8fafa]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 w-full h-full flex items-center justify-center"
                      >
                        <img 
                          src={outcomes[activeIndex].image} 
                          alt={outcomes[activeIndex].title}
                          className={`w-full h-full ${activeIndex === 0 ? 'object-cover object-top' : 'object-contain'}`}
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* App Overlay elements */}
                    <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white via-white/40 to-transparent flex items-end justify-center pb-6">
                       <div className="flex gap-1.5">
                        {outcomes.map((_, i) => (
                          <div 
                            key={i} 
                            className={`h-1 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-5 bg-brand' : 'w-2 bg-brand/20'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating logic label */}
              

              {/* Patient Data Disclaimer */}
              <div className="mt-8 px-6 text-center">
                <p className="text-[10px] md:text-[11px] text-ink/30 font-body uppercase tracking-widest leading-relaxed">
                  Note: All patient data and clinical conversations shown are mock, synthetic data generated for demonstration purposes.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Outcomes Column */}
          <div className="w-full space-y-8 lg:space-y-10 px-6 lg:px-0">
            <div className="flex flex-col divide-y divide-brand/10">
              {outcomes.map((outcome, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="text-left py-8 first:pt-0 last:pb-0 group transition-all duration-300 relative"
                >
                  <div className="flex gap-8 items-start">
                    <div className="flex flex-col items-center pt-1.5">
                      <span className={`text-xs font-bold tracking-[0.2em] transition-colors duration-300 ${
                        activeIndex === idx ? 'text-brand' : 'text-ink/30'
                      }`}>
                        0{idx + 1}
                      </span>
                      {activeIndex === idx && (
                        <motion.div 
                          layoutId="active-indicator"
                          className="w-px h-12 bg-brand mt-4"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </div>
                    <div className="flex-grow">
                      <h3 className={`text-2xl md:text-3xl font-title transition-all duration-300 mb-3 ${
                        activeIndex === idx ? 'text-brand translate-x-1' : 'text-ink group-hover:text-brand/70'
                      }`}>
                        {outcome.title}
                      </h3>
                      <AnimatePresence mode="wait">
                        {activeIndex === idx && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            className="text-ink/60 text-base md:text-lg leading-relaxed font-body max-w-md"
                          >
                            {outcome.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-6">
               <a 
                  href="https://apps.apple.com/us/app/evidencemd-medical-reasoning/id6751770543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ink text-white px-5 py-2.5 rounded-[12px] flex items-center gap-3 hover:opacity-90 transition-all border border-brand/20 shadow-lg w-fit"
                >
                  <svg viewBox="0 0 384 512" className="w-8 h-8 fill-white">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  <div className="flex flex-col items-start leading-tight text-left">
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
                  <div className="flex flex-col items-start leading-tight text-left">
                    <span className="text-[9px] font-medium uppercase tracking-tight">GET IT ON</span>
                    <span className="text-lg font-bold font-body -mt-1 tracking-tight text-nowrap">Google Play</span>
                  </div>
                </a>
            </div>
          </div>
        </div>

        {/* Product Tiers */}
        <div className="mt-24 md:mt-40 pt-20 border-t border-muted/10 relative">
          <div className="text-center mb-12 px-6 max-w-3xl mx-auto">
            <h2 className="mb-6 text-4xl md:text-5xl font-title">Flexible plans for clinical teams</h2>
            <p className="text-xl text-ink/70 font-body leading-relaxed">
              Transparent pricing for clinicians and teams. Start free, then upgrade for unlimited documentation and decision support.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex flex-col items-center mb-16">
            <div className="relative bg-brand/5 p-1.5 rounded-2xl flex items-center border border-brand/10 shadow-sm">
              <motion.div 
                initial={false}
                animate={{ x: billingCycle === 'annually' ? 0 : 130 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute w-[130px] h-[calc(100%-12px)] bg-brand rounded-xl shadow-lg shadow-brand/20"
              />
              <button
                onClick={() => setBillingCycle('annually')}
                className={`relative z-10 w-[130px] py-2.5 text-sm font-bold transition-colors duration-200 ${billingCycle === 'annually' ? 'text-white' : 'text-ink/60 hover:text-ink'}`}
              >
                Annually
              </button>
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`relative z-10 w-[130px] py-2.5 text-sm font-bold transition-colors duration-200 ${billingCycle === 'monthly' ? 'text-white' : 'text-ink/60 hover:text-ink'}`}
              >
                Monthly
              </button>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-px w-4 bg-brand/20"></div>
              <span className="text-[12px] font-bold text-brand uppercase tracking-widest bg-brand/5 px-3 py-1 rounded-full border border-brand/10">
                Save 25% with annual billing
              </span>
              <div className="h-px w-4 bg-brand/20"></div>
            </div>
          </div>

          <div className="w-full overflow-hidden relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-6 md:px-0 pb-12">
              {appPlans.map((plan, i) => (
                <motion.div 
                  key={i}
                  className={`w-full bg-white border border-brand/10 p-10 flex flex-col transition-all duration-300 relative rounded-[32px] ${
                    plan.primary ? 'border-brand ring-4 ring-brand/5 md:scale-105 z-10 shadow-2xl' : 'shadow-sm'
                  }`}
                >
                  <div className="mb-8">
                    <h3 className="text-2xl mb-2 font-title">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <motion.span 
                        key={plan.price}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-ink"
                      >
                        {plan.price}
                      </motion.span>
                      {plan.period && <span className="text-base text-ink/40 font-body">{plan.period}</span>}
                    </div>
                    {plan.billingNote && <p className="text-[12px] text-brand font-bold mt-1 uppercase tracking-wider">{plan.billingNote}</p>}
                    <p className="text-ink/60 text-sm mt-4 font-body leading-relaxed">
                      {plan.desc}
                    </p>
                  </div>

                  <div className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check size={18} className="text-brand mt-0.5 shrink-0" />
                        <span className="text-sm text-ink/70 font-body leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={onSignInClick}
                    className={`button ${plan.primary ? 'button-primary' : 'button-secondary'} w-full py-4.5 rounded-2xl font-bold`}
                  >
                    {plan.btn}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center px-10 pb-20 max-w-3xl mx-auto space-y-8">
            <div className="bg-brand/5 rounded-3xl p-8 border border-brand/10 text-left">
              <h4 className="text-brand font-bold uppercase tracking-widest text-xs mb-4">Fair usage</h4>
              <p className="text-ink/70 font-body text-sm leading-relaxed">
                EvidenceMD is designed to support normal clinical workflows at scale. We reserve the right to monitor usage to ensure it aligns with typical clinical practice. If usage consistently exceeds reasonable levels, we may apply caps or request a plan adjustment to protect quality and reliability for all users.
              </p>
            </div>
            <p className="text-[11px] md:text-[12px] text-ink/30 font-body italic">
              *Unlimited usage designed for normal clinical practice. Plans apply to the app; API usage is priced separately.
            </p>
          </div>
        </div>
      </div>
      
      {/* Square motif for App page - Dark Teal, absolute bottom of section (next to footer), desktop only */}
      <PixelCorner 
        position="bottom-right" 
        color="#003636" 
        size={48} 
        opacity={1}
        className="hidden md:block absolute bottom-0 right-0"
      />
    </section>
  );
};
