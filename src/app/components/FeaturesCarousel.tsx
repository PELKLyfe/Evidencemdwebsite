import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { 
  Search, 
  Layers, 
  GitBranch, 
  RefreshCw, 
  Activity, 
  Dna, 
  Bone, 
  Link, 
  Mic, 
  LineChart, 
  CreditCard,
  GraduationCap
} from 'lucide-react';
import { PixelCorner } from './PixelCorner';

interface FeatureCardProps {
  index: number;
  title: string;
  claim: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  total: number;
  scrollYProgress: any;
}

const FeatureCard = ({ index, title, claim, description, icon, tags, total, scrollYProgress }: FeatureCardProps) => {
  const formattedIndex = (index + 1).toString().padStart(2, '0');

  const start = index / total;
  const end = (index + 1) / total;
  
  const cardProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
  
  const x = useTransform(cardProgress, [0, 0.4, 0.7, 1], [0, 450, 450, 0]);
  const y = useTransform(cardProgress, [0, 0.4, 0.7, 1], [0, -100, -100, 0]);
  const z = useTransform(cardProgress, [0, 0.4, 0.7, 1], [0, 150, -200, -200]);
  const rotateZ = useTransform(cardProgress, [0, 0.4, 0.7, 1], [0, 10, 10, 0]);
  const rotateY = useTransform(cardProgress, [0, 0.4, 0.7, 1], [0, -10, -10, 0]);
  const scale = useTransform(cardProgress, [0, 0.4, 0.7, 1], [1, 1.02, 0.95, 0.95]);
  const opacity = useTransform(cardProgress, [0, 0.6, 0.8, 1], [1, 1, 0, 0]);
  
  return (
    <motion.div
      style={{ 
        x,
        y, 
        z,
        rotateZ,
        rotateY,
        opacity: index === total - 1 ? 1 : opacity, 
        scale: index === total - 1 ? 1 : scale,
        zIndex: total - index,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[720px] h-[440px] bg-white border border-[#CCCCCC]/20 rounded-sm p-10 flex flex-col justify-between shadow-xl transition-shadow duration-300 will-change-transform"
    >
      <div className="absolute inset-0 pointer-events-none rounded-sm overflow-hidden opacity-[0.3] z-0">
        <div className="absolute top-[60px] inset-x-0 h-px bg-red-400/20"></div>
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #006D6910 31px, #006D6910 32px)',
            marginTop: '60px'
          }}
        ></div>
        <div className="absolute left-14 top-0 bottom-0 w-px bg-red-400/20"></div>
      </div>
      
      <div className="absolute top-4 right-6 text-[80px] font-title text-[#006D69] opacity-[0.03] leading-none pointer-events-none select-none z-0">
        {formattedIndex}
      </div>

      <div className="relative z-10 pl-12 pt-2">
        <div className="w-12 h-12 rounded-xl bg-[#006D69]/5 flex items-center justify-center mb-6 text-[#006D69]">
          {icon}
        </div>
        <h3 className="text-3xl lg:text-4xl font-title text-[#003636] mb-3 leading-tight tracking-tight">
          {title}
        </h3>
        <p className="font-bold text-[#006D69] text-xs mb-3 font-body tracking-[0.1em] uppercase">
          {claim}
        </p>
        <p className="text-[#003636]/70 text-base lg:text-lg leading-relaxed font-body max-w-lg">
          {description}
        </p>
      </div>

      <div className="relative z-10 pl-12 flex items-center justify-between mt-auto pb-2">
        <div className="flex flex-col gap-2">
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#003636]/20 font-body">Verification Node</span>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span key={i} className="text-[10px] px-2 py-0.5 border border-[#006D69]/5 text-[#006D69]/50 rounded bg-[#006D69]/5 font-semibold font-body">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-1.5 opacity-30">
          <div className="w-1.5 h-1.5 rounded-full bg-[#006D69]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#006D69]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#006D69]"></div>
        </div>
      </div>
    </motion.div>
  );
};

export const FeaturesCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progressText, setProgressText] = useState("01 / 12");
  
  // Ensure the section is relative for useScroll calculation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const num = Math.min(12, Math.max(1, Math.ceil(latest * 12)));
    setProgressText(`${num.toString().padStart(2, '0')} / 12`);
  });

  const features = [
    {
      title: "Clinical Evidence Chains",
      claim: "Grounded in verifiable medical truth",
      description: "Access an evidence chain grounded in peer-reviewed research and authoritative clinical guidelines with citations you can verify.",
      icon: <Search size={28} />,
      tags: ["Guidelines", "PubMed", "NIH"]
    },
    {
      title: "Synthesized Intelligence",
      claim: "Clinical-grade reasoning across medical databases",
      description: "Synthesize information across multiple reference standards to deliver a comprehensive view of complex medical queries.",
      icon: <Layers size={28} />,
      tags: ["Meta-analysis", "Databases"]
    },
    {
      title: "Transparent Reasoning",
      claim: "Audit every clinical and financial decision",
      description: "Build an evidence chain from clinical data to conclusions, producing auditable reasoning for the entire care team.",
      icon: <GitBranch size={28} />,
      tags: ["Rationale", "Auditable"]
    },
    {
      title: "Continuous Updates",
      claim: "Reasoning that reflects current literature",
      description: "Stay aligned with new clinical research and evolving medical standards through a continuously refreshed knowledge base.",
      icon: <RefreshCw size={28} />,
      tags: ["Fresh Data", "Updates"]
    },
    {
      title: "Decision Support",
      claim: "Practical clinical and financial pathways",
      description: "Convert evidence into structured next steps: differential considerations, workup options, and treatment pathways with verifiable citations.",
      icon: <Activity size={28} />,
      tags: ["Pathways", "Workups"]
    },
    {
      title: "Biomedical Research",
      claim: "Accelerated literature target mapping",
      description: "Map targets, mechanisms, and trial outcomes across medical literature to support discovery and protocol design with evidence chains.",
      icon: <Dna size={28} />,
      tags: ["Research", "Trials"]
    },
    {
      title: "Visual Verification",
      claim: "Clinical imaging with trusted citations",
      description: "Retrieve high-quality reference images with diagnostic captions and trusted citations you can verify in clinical context.",
      icon: <Bone size={28} />,
      tags: ["Imaging", "Pathology"]
    },
    {
      title: "Bedside Translation",
      claim: "Connect research to patient context",
      description: "Translate clinical research into action by analyzing patient data alongside current literature and evidence chains.",
      icon: <Link size={28} />,
      tags: ["Translation", "Context"]
    },
    {
      title: "Ambient Scribe",
      claim: "Automated clinical documentation reasoning",
      description: "Generate clinician-ready notes from patient visits with minimal interruption, maintaining clinical-grade detail and accuracy.",
      icon: <Mic size={28} />,
      tags: ["Voice", "Documentation"]
    },
    {
      title: "Clinical Trajectories",
      claim: "Visualize lab trends and baselines",
      description: "Chart labs and clinical values over time to visualize baselines and trajectories with verifiable reasoning.",
      icon: <LineChart size={28} />,
      tags: ["Labs", "Trends"]
    },
    {
      title: "Financial Reasoning",
      claim: "Coverage and cost-sensitive recommendations",
      description: "Provide financial-grade reasoning for coverage checks, prior authorization logic, and SDOH-aware clinical recommendations.",
      icon: <CreditCard size={28} />,
      tags: ["Claims", "Insurance"]
    },
    {
      title: "CME/CPD Opportunities",
      claim: "Earn professional credits as you work",
      description: "Every clinical reasoning query and evidence review contributes toward your continuing education requirements. Track CME and CPD hours automatically within your workflow.",
      icon: <GraduationCap size={28} />,
      tags: ["CME", "CPD", "Accreditation"]
    }
  ];

  return (
    <section ref={containerRef} className="relative h-[1200vh] bg-background" style={{ position: 'relative' }}>
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02] z-0" 
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper.png")' }}
      ></div>

      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden pt-20 relative">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 items-center gap-12 lg:gap-20 relative">
          
          <div className="lg:col-span-5 z-20 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="kicker mb-6"
            >
              THE EVIDENCEMD FEATURES
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-title text-[#003636] mb-8 leading-[0.9] tracking-tight"
            >
              Clinical capabilities for <br/>verified reasoning
            </motion.h2>
            
            <div className="max-w-xs space-y-6 relative">
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#006D69]"></div>
                  <p className="text-sm font-body text-[#003636]/70">Clinical and financial reasoning modes.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#006D69]"></div>
                  <p className="text-sm font-body text-[#003636]/70">Traceable evidence chains for every decision.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#006D69]"></div>
                  <p className="text-sm font-body text-[#003636]/70">Model-routed intelligence for the care team.</p>
                </div>
              </div>
              <div className="flex justify-between text-xs font-bold text-[#006D69] uppercase tracking-[0.3em] font-body">
                <span>Clinical Journal</span>
                <span className="tabular-nums">{progressText}</span>
              </div>
              <div className="h-1.5 w-full bg-[#006D69]/10 rounded-full overflow-hidden relative">
                <motion.div 
                  className="h-full bg-[#006D69]"
                  style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[600px] w-full max-w-2xl mx-auto flex items-center justify-center">
            <div className="relative w-full h-full" style={{ perspective: "1500px", transformStyle: "preserve-3d" }}>
              {features.map((feature, idx) => (
                <FeatureCard 
                  key={idx}
                  index={idx}
                  total={features.length}
                  scrollYProgress={scrollYProgress}
                  {...feature}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
