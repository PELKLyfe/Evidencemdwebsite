import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Calculator, 
  HeartPulse, 
  CheckCircle2, 
  XCircle, 
  Sparkles,
  ChevronRight,
  Search,
  Activity
} from 'lucide-react';
import { ApiDocumentation } from './ApiDocumentation';
import { PixelCorner } from './PixelCorner';

export const ReasoningQuality = ({ onSignInClick }: { onSignInClick?: () => void }) => {
  const [showDocumentation, setShowDocumentation] = useState(false);

  const benchmarks = [
    { name: "EvidenceMD", score: "94%", label: "Medical AI Leader", active: true },
    { name: "GPT-5 Pro", score: "83%", label: "OpenAI", active: false },
    { name: "Claude 4.5 Opus", score: "76%", label: "Anthropic", active: false },
    { name: "Gemini 3 Pro", score: "70%", label: "Google", active: false }
  ];

  const comparisonFeatures = [
    { name: "Citations & Sources", emd: true, openai: false, claude: false, gemini: false },
    { name: "Peer-Reviewed Information", emd: true, openai: false, claude: false, gemini: false },
    { name: "Clinical Decision Support", emd: true, openai: false, claude: false, gemini: false },
    { name: "Biomedical Logic", emd: true, openai: false, claude: false, gemini: false }
  ];

  if (showDocumentation) {
    return (
      <section className="bg-[#FEFDFB] min-h-screen relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <ApiDocumentation 
            onBack={() => setShowDocumentation(false)} 
            onSignInClick={onSignInClick}
          />
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-background relative">
      <PixelCorner position="top-left" color="#003636" size={32} opacity={1} className="mt-8 ml-8 hidden md:block" />
      <div className="container mx-auto px-6">
        {/* API Page Hero */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl mb-8 leading-tight font-title"
          >
            Clinical Decision Support API <br />
            <span className="text-brand italic font-title">Built for evidence-based outputs.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-ink/60 max-w-2xl mx-auto mb-6 font-body"
          >
            Generate clinical and administrative decision support with structured formatting and citations. Built for production workflows.
          </motion.p>

          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={onSignInClick}
              className="button button-primary px-10 py-4 flex items-center gap-2"
            >
              Get API Key <ChevronRight size={18} />
            </button>
            <button 
              onClick={() => setShowDocumentation(true)}
              className="button button-secondary px-10 py-4"
            >
              View Documentation
            </button>
          </div>
          <p className="text-sm text-ink/40 font-body italic">Designed for reliable integration and consistent outputs.</p>
        </div>

        {/* Advanced Medical Logic Benchmark */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 font-title">Advanced Medical Logic Benchmark</h2>
            <p className="text-ink/60 font-body">Evidence-based medical logic accuracy compared to leading AI models</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
            {benchmarks.map((b, i) => (
              <motion.div 
                key={b.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-2xl border text-center transition-all ${
                  b.active 
                    ? 'border-brand bg-brand/[0.02] ring-1 ring-brand/10 shadow-lg shadow-brand/5' 
                    : 'border-muted/20 bg-white'
                }`}
              >
                <div className={`text-4xl font-bold mb-2 ${b.active ? 'text-brand' : 'text-ink'}`}>{b.score}</div>
                <div className="text-sm font-bold font-title text-ink mb-1">{b.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-ink/40 font-bold">{b.label}</div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-ink/30 text-[10px] font-body uppercase tracking-widest italic">Analysis performed using Jaccard Similarity Analysis</p>
        </div>

        {/* See the Difference Table */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl mb-4 font-title">See the Difference: Real Clinical Decision Support</h2>
            <p className="text-ink/60 font-body max-w-2xl mx-auto">EvidenceMD delivers structured, evidence-based responses with citations from peer-reviewed sources.</p>
          </div>
          <div className="max-w-4xl mx-auto overflow-hidden rounded-[32px] border border-muted/10 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/5 border-b border-muted/10">
                  <th className="py-6 px-8 text-[10px] font-bold uppercase tracking-widest text-ink/40">Feature</th>
                  <th className="py-6 px-4 text-center text-brand text-xs font-bold uppercase tracking-widest">EvidenceMD</th>
                  <th className="py-6 px-4 text-center text-ink/40 text-[10px] font-bold uppercase tracking-widest">OpenAI</th>
                  <th className="py-6 px-4 text-center text-ink/40 text-[10px] font-bold uppercase tracking-widest">Claude</th>
                  <th className="py-6 px-4 text-center text-ink/40 text-[10px] font-bold uppercase tracking-widest">Gemini</th>
                </tr>
              </thead>
              <tbody className="font-body">
                {comparisonFeatures.map((f, i) => (
                  <tr key={i} className="border-b border-muted/5 last:border-0">
                    <td className="py-6 px-8 text-sm font-bold text-ink/80">{f.name}</td>
                    <td className="py-6 px-4 text-center"><CheckCircle2 className="inline text-brand" size={18} /></td>
                    <td className="py-6 px-4 text-center"><XCircle className="inline text-red-500/40" size={18} /></td>
                    <td className="py-6 px-4 text-center"><XCircle className="inline text-red-500/40" size={18} /></td>
                    <td className="py-6 px-4 text-center"><XCircle className="inline text-red-500/40" size={18} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Terminal Example Response */}
        <div className="mb-32">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#031515] rounded-[40px] border border-brand/20 overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-[100px]"></div>
              
              {/* Terminal Header */}
              <div className="px-8 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                  <span className="text-[10px] text-white/20 ml-4 font-mono uppercase tracking-widest">EvidenceMD API Response</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-10 font-mono text-[13px] leading-relaxed">
                <div className="mb-8">
                  <div className="text-brand text-[10px] uppercase font-bold tracking-widest mb-2 opacity-50">User Query:</div>
                  <div className="text-white/90 text-sm">"What's the treatment plan for aortic thoracic aneurysm 5.9cm in dialysis patient?"</div>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="text-brand font-bold mb-4 flex items-center gap-2">
                      <Activity size={14} />
                      EvidenceMD Response:
                    </div>
                    <ul className="space-y-4 pl-4 border-l border-brand/20">
                      <li className="text-white/80">
                        <span className="text-brand font-bold">Size Thresholds:</span> Intervention at ≥5.5 cm per guidelines <span className="text-brand/60">[1]</span>
                      </li>
                      <li className="text-white/80">
                        <span className="text-brand font-bold">Critical Point:</span> Sharp increase in dissection risk at 6.0 cm <span className="text-brand/60">[26]</span>
                      </li>
                      <li className="text-white/80">
                        <span className="text-brand font-bold">Dialysis Mortality:</span> 30-day mortality ~17% for TEVAR <span className="text-brand/60">[10]</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="text-brand font-bold mb-4 flex items-center gap-2">
                      <Search size={14} />
                      2. Procedural Approach:
                    </div>
                    <ul className="space-y-4 pl-4 border-l border-brand/20">
                      <li className="text-white/80">
                        <span className="text-brand font-bold">TEVAR preferred</span> for descending TAA in high-risk patients <span className="text-brand/60">[3]</span>
                      </li>
                      <li className="text-white/80">
                        Lower perioperative morbidity vs open repair <span className="text-brand/60">[6]</span>
                      </li>
                      <li className="text-white/80">
                        <span className="text-brand font-bold">30-day survival 89.7%</span> in dialysis patients <span className="text-brand/60">[10]</span>
                      </li>
                    </ul>
                  </div>

                  {/* Sources Section */}
                  <div className="mt-12 pt-8 border-t border-white/5 bg-white/[0.01] -mx-10 px-10">
                    <div className="text-yellow-500/80 text-[10px] font-bold uppercase tracking-widest mb-6">Sources (6 peer-reviewed citations):</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12">
                      <div className="text-white/30 text-[11px] hover:text-white/50 transition-colors">[1] ACC/AHA Guidelines 2022 - ahotjournals.org</div>
                      <div className="text-white/30 text-[11px] hover:text-white/50 transition-colors">[8] PMC Study - pmc.ncbi.nlm.nih.gov</div>
                      <div className="text-white/30 text-[11px] hover:text-white/50 transition-colors">[3] SVS Guidelines - jvascsurg.org</div>
                      <div className="text-white/30 text-[11px] hover:text-white/50 transition-colors">[10] JSVS - jsvs.org</div>
                      <div className="text-white/30 text-[11px] hover:text-white/50 transition-colors">[6] Ann Thorac Surg - annalsthoracsurg.org</div>
                      <div className="text-white/30 text-[11px] hover:text-white/50 transition-colors">[26] JAMA Cardiology - jamanetwork.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-ink/30 text-xs font-body italic">Real API response with inline citations and peer-reviewed sources</p>
          </div>
        </div>

        {/* Why EvidenceMD Over Generic AI Comparison Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl mb-4 font-title">Why EvidenceMD Over Generic AI?</h2>
            <p className="text-ink/60 font-body max-w-2xl mx-auto">Generic LLMs like ChatGPT, Claude, and Gemini rely on broad internet data. EvidenceMD is purpose-built for healthcare with specialized medical logic.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* EMD Column */}
            <div className="p-10 rounded-[40px] border border-brand/20 bg-brand/[0.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center text-brand">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-bold font-title">EvidenceMD API</h3>
              </div>
              <p className="text-brand text-xs font-bold uppercase tracking-widest mb-4">Purpose-built for medical & biomedical logic</p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm font-body text-ink/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0"></div>
                  Grounded in peer-reviewed literature and specialty guidelines.
                </li>
                <li className="flex gap-3 text-sm font-body text-ink/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0"></div>
                  Real-time verifiable evidence with clickable source URLs.
                </li>
                <li className="flex gap-3 text-sm font-body text-ink/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0"></div>
                  Clinical-grade medical logic.
                </li>
              </ul>
            </div>
            {/* Generic AI Column */}
            <div className="p-10 rounded-[40px] border border-red-900/10 bg-red-50/[0.3]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600/60">
                  <XCircle size={24} />
                </div>
                <h3 className="text-2xl font-bold font-title text-red-900/80">Generic AI</h3>
              </div>
              <p className="text-red-900/50 text-xs font-bold uppercase tracking-widest mb-4">General-purpose, not optimized for healthcare</p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm font-body text-red-900/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/40 mt-1.5 shrink-0"></div>
                  Prone to medical hallucinations and incorrect clinical advice.
                </li>
                <li className="flex gap-3 text-sm font-body text-red-900/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/40 mt-1.5 shrink-0"></div>
                  Lack of verifiable citations from peer-reviewed sources.
                </li>
                <li className="flex gap-3 text-sm font-body text-red-900/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/40 mt-1.5 shrink-0"></div>
                  Generic responses that miss deep clinical nuance.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* API Pricing Section */}
        <div className="pt-20 border-t border-muted/20">
          <div className="text-center mb-16">
            <h2 className="mb-4 font-title">API Pricing</h2>
            <p className="text-lg text-ink/60 font-body">Predictable cost per clinical task. No token surprise bills.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
            {/* Market Context */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-2 font-title">Compare LLM compute costs</h3>
                <div className="text-brand text-xs font-bold uppercase tracking-widest mb-4">Token-based, not per-query.</div>
                <p className="text-ink/70 font-body leading-relaxed max-w-md">
                  Most LLM providers price by token usage. Cost varies by model choice and output length.
                </p>
              </div>

              <div className="bg-muted/5 border border-muted/20 rounded-2xl p-6 space-y-4">
                <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Typical market range</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-muted/10">
                    <div className="text-[10px] text-ink/40 uppercase font-bold mb-1">Input</div>
                    <div className="text-lg font-bold text-ink">~$0.15 to $3.00</div>
                    <div className="text-[10px] text-ink/40">/ 1M tokens</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-muted/10">
                    <div className="text-[10px] text-ink/40 uppercase font-bold mb-1">Output</div>
                    <div className="text-lg font-bold text-ink">~$0.60 to $15.00</div>
                    <div className="text-[10px] text-ink/40">/ 1M tokens</div>
                  </div>
                </div>
                <p className="text-[11px] text-ink/40 font-body italic text-center">
                  Costs vary by model and output length.
                </p>
              </div>
            </div>

            {/* EvidenceMD Credits */}
            <div className="space-y-8">
              <h3 className="text-2xl mb-6 font-title">EvidenceMD API pricing</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Fast Card */}
                <div className="card p-6 border-muted/20 hover:border-brand/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-title">Fast</h4>
                    <div className="bg-brand/10 text-brand text-[10px] font-bold px-2 py-0.5 rounded">1 credit</div>
                  </div>
                  <div className="text-2xl font-bold text-ink mb-4">$0.05 <span className="text-sm font-normal text-ink/40">/ request</span></div>
                  <p className="text-ink/60 text-sm font-body leading-snug">
                    Quick clinical answers and lightweight evidence lookup. (~20s response)
                  </p>
                </div>

                {/* Pro Card */}
                <div className="card p-6 border-brand ring-1 ring-brand/10 bg-brand/[0.02]">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-title">Pro</h4>
                    <div className="bg-brand text-[#fefdfb] text-[10px] font-bold px-2 py-0.5 rounded">2 credits</div>
                  </div>
                  <div className="text-2xl font-bold text-ink mb-4">$0.10 <span className="text-sm font-normal text-ink/40">/ request</span></div>
                  <p className="text-ink/60 text-sm font-body leading-snug">
                    Comprehensive analysis with deeper synthesis and longer evidence chains. (~40s response)
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-ink text-[#fefdfb] rounded-2xl">
                  <div className="text-lg font-bold mb-2">$25 = 500 credits <span className="text-[#fefdfb]/40 text-sm font-normal">($0.05 per credit)</span></div>
                  <p className="text-[#fefdfb]/60 text-sm font-body leading-relaxed">
                    Credits are deducted per API call. Prompt length and response size do not change the credit cost.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button 
                    onClick={onSignInClick}
                    className="button button-primary px-8 py-3"
                  >
                    Buy Credits
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PixelCorner position="bottom-right" color="#003636" size={48} opacity={1} className="hidden md:block" />
    </section>
  );
};
