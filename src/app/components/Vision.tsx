import React from 'react';
import { motion } from 'motion/react';
import { Globe, Users, Cpu, ShieldCheck, ArrowRight, CreditCard, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PixelCorner } from './PixelCorner';
import luisImg from "figma:asset/e7f2187b571623f9c86e58f68d16f23933c58429.png";
import krishnaImg from "figma:asset/a6fd9ff7074d23643e060886ba2fb23101bcd8a2.png";

interface VisionProps {
  onTabChange?: (tab: string) => void;
}

export const Vision = ({ onTabChange }: VisionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#FEFDFB] selection:bg-brand/10 relative">
      {/* Editorial Header */}
      <section className="pt-24 pb-20 relative">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-8xl font-title text-ink mb-8 leading-[0.9] tracking-tight"
            >
              The clinical reasoning infrastructure for modern healthcare
            </motion.h1>
            
          </div>
        </div>
        <PixelCorner position="bottom-right" color="#003636" size={48} opacity={1} />
      </section>

      {/* Main Narrative */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-20 relative">
            
            {/* Left Sidebar (Sticky Context) */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h3 className="font-title text-3xl text-ink mb-4">Building infrastructure</h3>
                  <p className="font-body text-ink/60 leading-relaxed">
                    Healthcare systems require a stable reasoning layer. We provide the infrastructure for this transition.
                  </p>
                </div>
                
                <div className="p-8 bg-brand/5 rounded-2xl border border-brand/10">
                  <Globe className="text-brand mb-4" size={32} />
                  <h4 className="font-title text-xl text-ink mb-2">Available globally</h4>
                  <p className="text-sm text-ink/60 font-body">
                    We deliver clinical-grade reasoning to clinicians and developers across the world.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content (The Manifesto) */}
            <div className="lg:col-span-8 max-w-2xl">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-16"
              >
                {/* Introduction */}
                <motion.div variants={itemVariants} className="space-y-6">
                  <p className="text-xl font-body text-ink/80 leading-relaxed">
                    Clinicians are increasingly developing their own tools and automation. They require reasoning engines designed for medical and financial decision-making.
                  </p>
                  <p className="text-xl font-body text-ink/80 leading-relaxed">
                    General-purpose models often produce inconsistent quality and unverifiable reasoning. EvidenceMD solves this by providing a dedicated reasoning layer.
                  </p>

                </motion.div>

                {/* The Problem */}
                <motion.div variants={itemVariants} className="space-y-8">
                  <h2 className="text-4xl font-title text-ink pt-0">The Problem: <span className="text-brand italic underline decoration-brand/20 underline-offset-[12px] ml-2">Fragmented access to medical logic</span></h2>
                  <div className="space-y-6 text-lg text-ink/70 font-body leading-relaxed">
                    <p>
                      Existing clinical AI products are often restricted to specific roles or regions. This creates friction across the care team.
                    </p>
                    <p>
                      Innovation is gated by rigid identity models and limited global availability.
                    </p>
                    <p className="font-bold text-ink">
                      EvidenceMD provides a universal reasoning engine for all healthcare stakeholders.
                    </p>
                  </div>
                </motion.div>

                {/* Our Approach */}
                <motion.div variants={itemVariants} className="space-y-8 p-12 bg-ink text-white rounded-[32px] relative overflow-hidden shadow-2xl">
                   {/* Background watermark */}
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Users size={200} />
                  </div>
                  
                  <h2 className="text-4xl font-title text-white">Model-Routed Intelligence</h2>
                  <div className="space-y-6 text-lg text-white/80 font-body leading-relaxed relative z-10">
                    <p>
                      EvidenceMD supports every role in the healthcare system through specialty and domain scoping.
                    </p>
                    <p className="text-white font-semibold">
                      The model router provides clinical-grade, financial-grade, and operational reasoning modes.
                    </p>
                    <p>
                      Every query is processed through router-based scoping to ensure accurate outputs for the clinical context.
                    </p>
                  </div>
                </motion.div>

                {/* Model Router Grid */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: "Clinical Mode", desc: "Clinical-grade reasoning for diagnostic queries.", icon: <ShieldCheck className="text-brand" size={20} /> },
                    { label: "Financial Mode", desc: "Financial-grade reasoning and cost-sensitive logic.", icon: <CreditCard className="text-brand" size={20} /> },
                    { label: "Ops Mode", desc: "Structured workflows and documentation scoping.", icon: <Cpu className="text-brand" size={20} /> }
                  ].map((mode, i) => (
                    <div key={i} className="p-6 border border-muted/20 rounded-2xl hover:border-brand/30 transition-colors">
                      <div className="mb-4">{mode.icon}</div>
                      <h4 className="font-title text-lg text-ink mb-1">{mode.label}</h4>
                      <p className="text-xs text-ink/50 font-body">{mode.desc}</p>
                    </div>
                  ))}
                </motion.div>

                {/* Built for Builders */}
                <motion.div variants={itemVariants} className="space-y-8">
                  <h2 className="text-4xl font-title text-ink">Built for Builders: <span className="text-ink/40">An open reasoning API</span></h2>
                  <div className="space-y-6 text-lg text-ink/70 font-body leading-relaxed">
                    <p>
                      The future of healthcare consists of distributed tools built by clinicians and developers.
                    </p>
                    <p>
                      EvidenceMD provides the API required to power these applications with stable, cost-efficient medical logic.
                    </p>
                    <p className="font-bold text-brand">
                      We enable developers to build on a stable reasoning engine with citations you can verify.
                    </p>
                  </div>
                </motion.div>

                {/* The Outcome */}
                <motion.div variants={itemVariants} className="space-y-8 border-t border-muted/20 pt-16">
                  <h2 className="text-4xl font-title text-ink">Verifiable clinical intelligence</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      "Clinical-grade reasoning",
                      "Financial-grade reasoning",
                      "Citations you can verify",
                      "Audit-ready evidence chains"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-brand"></div>
                        <span className="font-body text-ink/80 text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* The Team */}
                <motion.div variants={itemVariants} className="space-y-12 border-t border-muted/20 pt-16">
                  <div className="space-y-4">
                    <h2 className="text-4xl font-title text-ink">Founding Team</h2>
                    <p className="text-lg text-ink/60 font-body leading-relaxed max-w-xl">
                      Building the reasoning clinicians trust.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                      {
                        name: "Luis Cisneros",
                        role: "Co-Founder & CEO",
                        email: "luis@evidencemd.ai",
                        linkedin: "https://www.linkedin.com/in/luis-cisneros-82a66a16a/",
                        bio: "Luis leads EvidenceMD’s product strategy, clinical positioning, and go-to-market execution. He focuses on building trusted medical reasoning infrastructure that delivers evidence-backed answers, transparent citations, and workflows that fit real clinical practice.",
                        image: luisImg
                      },
                      {
                        name: "Krishnakumar Srinivasan",
                        role: "Co-Founder & CTO",
                        email: "krishnakumar@evidencemd.ai",
                        linkedin: "https://www.linkedin.com/in/krishnakumar-srinivasan-506793106/",
                        bio: "Krishnakumar leads engineering and model development at EvidenceMD. He is a highly technical builder responsible for platform architecture, performance, and the systems that power EvidenceMD’s clinical reasoning, evidence retrieval, and developer-grade API infrastructure.",
                        image: krishnaImg
                      }
                    ].map((member, i) => (
                      <div key={i} className="group">
                        <div className="aspect-[4/5] bg-brand/5 rounded-3xl mb-6 overflow-hidden border border-brand/10 group-hover:border-brand/30 transition-all duration-500 relative">
                          <ImageWithFallback 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                          />
                          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <a 
                              href={member.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors"
                            >
                              <Linkedin size={14} />
                            </a>
                            <a 
                              href={`mailto:${member.email}`}
                              className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors"
                            >
                              <Mail size={14} />
                            </a>
                          </div>
                        </div>
                        <h4 className="font-title text-2xl text-ink mb-1">{member.name}</h4>
                        <p className="text-brand font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                        <p className="text-sm text-ink/60 font-body leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Closing Statement */}
                <motion.div 
                  variants={itemVariants}
                  className="pt-20 pb-32"
                >
                  <div className="group cursor-pointer">
                    <h2 className="text-5xl font-[Playfair_Display] text-ink group-hover:text-brand transition-colors leading-tight italic">
                      The future of healthcare will be built. EvidenceMD is the reasoning layer it will be built on.
                    </h2>
                    <div className="mt-8 flex items-center gap-3 text-brand font-bold uppercase tracking-widest text-sm">
                      <span onClick={() => onTabChange?.('api')}>Access API Documentation</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </div>
        <PixelCorner position="bottom-left" color="#003636" size={48} opacity={1} />
      </section>
    </div>
  );
};
