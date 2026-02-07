import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  Users, 
  ShieldCheck, 
  Code2, 
  UserCircle,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { PixelCorner } from './PixelCorner';

const roleData = [
  {
    id: 'clinicians',
    title: 'Clinicians',
    icon: Stethoscope,
    summary: 'Evidence-based clinical reasoning with citations and structured decision support.',
    question: 'What are the treatment options for CKD stage 4 in a patient with diabetes and eGFR 28?',
    output: [
      'Differential and risk factors',
      'Guideline-based treatment pathway',
      'Medication considerations (contraindications, renal dosing)',
      'Monitoring plan and follow-up intervals',
      'Referral thresholds',
      'Evidence summary with inline citations [1][2]'
    ],
    sources: ['KDIGO CKD Guidelines', 'ADA Standards of Care', 'PubMed']
  },
  {
    id: 'ops',
    title: 'Care Teams & Operations',
    icon: Users,
    summary: 'Structured answers for care coordination, utilization workflows, and clinical operations.',
    question: 'What are the discharge follow-up priorities for a CHF patient after an ED visit?',
    output: [
      'High-risk red flags to monitor',
      'Recommended follow-up timeline',
      'Patient education checklist',
      'Medication reconciliation reminders',
      'Suggested care coordination tasks',
      'Escalation criteria [1][2]'
    ],
    sources: ['CMS Transitional Care Management', 'AHA Heart Failure Guidance', 'NCQA / Quality Measures']
  },
  {
    id: 'finance',
    title: 'Insurance & Financial Workflows',
    icon: ShieldCheck,
    summary: 'Coverage and prior authorization reasoning aligned to payer policy logic and medical necessity standards.',
    question: 'Does a 5.9 cm thoracic aortic aneurysm meet medical necessity for intervention, and what documentation supports prior auth?',
    output: [
      'Medical necessity summary (plain, submission-ready)',
      'Documentation checklist (imaging, diagnosis, symptoms)',
      'Guideline thresholds supporting intervention [1]',
      'ICD-10 / CPT suggestions',
      'Prior auth phrasing for coverage review',
      'Urgency and risk framing [2][3]'
    ],
    sources: ['CMS Medicare Coverage Guidance', 'Medicare Benefit Policy Manual (CMS)', 'Example Plan Medical Policy (payer)']
  },
  {
    id: 'devs',
    title: 'Developers',
    icon: Code2,
    summary: 'A healthcare reasoning API with predictable costs, structured outputs, and evidence chains.',
    question: 'Generate a JSON response for a medication interaction check with citations and a confidence label.',
    output: null,
    jsonOutput: {
      "summary": "...",
      "risk_level": "high",
      "recommendation": "...",
      "citations": ["pmid:xxxxx", "guideline:xxxxx"],
      "confidence_label": "high"
    },
    features: [
      'Structured response formats',
      'Evidence traceability',
      'Fast vs Pro model selection',
      'OpenAI-compatible endpoint usage [1]'
    ],
    sources: ['EvidenceMD API Docs', 'OpenAI-Compatible Schema', 'Example Payloads']
  },
  {
    id: 'patients',
    title: 'Patients',
    icon: UserCircle,
    summary: 'Clear explanations and evidence-backed answers written in plain language.',
    question: 'My doctor said I have stage 3 kidney disease. What does that mean and what should I do next?',
    output: [
      'What it means in plain language',
      'What causes it and what to monitor',
      'Diet and medication considerations (general)',
      'When to call your clinician urgently',
      'Questions to ask at your next visit',
      'Trusted sources for learning more [1][2]'
    ],
    sources: ['NIH / NIDDK CKD Overview', 'CDC Kidney Disease Basics', 'KDIGO Patient Resources']
  }
];

export const WhoItsFor = () => {
  const [activeRole, setActiveRole] = useState(roleData[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section id="who-its-for" className="py-24 px-6 md:px-12 bg-background relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-title text-[#003636] mb-4"
          >
            Who It’s For
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[#003636]/70 max-w-2xl mx-auto font-body"
          >
            Built for everyone who touches patient care.
          </motion.p>
        </div>

        {/* Mobile Selection: Scroll-down (Dropdown) Menu */}
        <div className="lg:hidden mb-8 relative z-50">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-white border border-brand/20 p-4 rounded-xl shadow-sm flex items-center justify-between text-ink"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                <activeRole.icon size={18} />
              </div>
              <span className="font-bold text-base">{activeRole.title}</span>
            </div>
            <ChevronDown size={20} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white border border-brand/10 rounded-xl shadow-xl overflow-hidden"
              >
                {roleData.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => {
                      setActiveRole(role);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left p-4 hover:bg-brand/5 flex items-center gap-3 border-b border-brand/5 last:border-0 ${activeRole.id === role.id ? 'bg-brand/5 text-brand' : 'text-ink/70'}`}
                  >
                    <role.icon size={16} />
                    <span className="font-medium">{role.title}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          {/* Desktop Column: Role Menu */}
          <div className="hidden lg:block lg:col-span-4 space-y-2 relative">
            {roleData.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 flex items-center gap-4 group relative overflow-hidden ${
                  activeRole.id === role.id 
                    ? 'bg-white shadow-[0_4px_20px_rgba(0,109,105,0.08)] border border-[#006D69]/20' 
                    : 'hover:bg-[#006D69]/5 opacity-60 hover:opacity-100 border border-transparent'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                  activeRole.id === role.id ? 'bg-[#006D69] text-white' : 'bg-[#006D69]/10 text-[#006D69]'
                }`}>
                  <role.icon size={20} strokeWidth={1.5} />
                </div>
                <span className={`font-body font-medium text-lg tracking-tight ${
                  activeRole.id === role.id ? 'text-[#003636]' : 'text-[#003636]/70'
                }`}>
                  {role.title}
                </span>
                {activeRole.id === role.id && (
                  <motion.div layoutId="active-indicator" className="ml-auto relative">
                    <ChevronRight size={18} className="text-[#006D69]" />
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* Right Column: Dynamic Content Panel */}
          <div className="lg:col-span-8 relative">
            {/* Subtle background detail: nodes and lines */}
            <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none hidden md:block">
              <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="4" fill="#003636" />
                <circle cx="700" cy="150" r="4" fill="#003636" />
                <circle cx="150" cy="500" r="4" fill="#003636" />
                <circle cx="650" cy="450" r="4" fill="#003636" />
                <circle cx="400" cy="300" r="4" fill="#003636" />
                <line x1="100" y1="100" x2="400" y2="300" stroke="#003636" strokeWidth="1" />
                <line x1="700" y1="150" x2="400" y2="300" stroke="#003636" strokeWidth="1" />
                <line x1="150" y1="500" x2="400" y2="300" stroke="#003636" strokeWidth="1" />
                <line x1="650" y1="450" x2="400" y2="300" stroke="#003636" strokeWidth="1" />
                <line x1="100" y1="100" x2="150" y2="500" stroke="#003636" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-2xl border border-[#CCCCCC]/40 shadow-[0_20px_50px_rgba(0,54,54,0.04)] overflow-hidden min-h-[440px] md:min-h-[580px] flex flex-col relative"
              >
                <div className="p-6 md:p-12 flex-grow relative">
                  {/* Block 1: Role Summary */}
                  <div className="mb-6 md:mb-10 relative">
                    <p className="text-xl md:text-3xl text-[#003636] font-title leading-tight max-w-2xl">
                      {activeRole.summary}
                    </p>
                  </div>

                  {/* Block 2: Example Question */}
                  <div className="mb-6 md:mb-10 relative">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#006D69] mb-3 md:mb-4 font-body">
                      Example question
                    </span>
                    <blockquote className="text-lg md:text-2xl font-display italic text-[#003636]/80 border-l-2 md:border-l-3 border-[#006D69]/20 pl-4 md:pl-8 py-1 md:py-2">
                      “{activeRole.question}”
                    </blockquote>
                  </div>

                  {/* Block 3: Typical Output */}
                  <div className="mb-4 relative">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#006D69] mb-4 md:mb-5 font-body">
                      Typical output
                    </span>
                    <div className="bg-[#FEFDFB]/50 border border-[#CCCCCC]/20 rounded-xl md:rounded-2xl p-6 md:p-8 font-body relative group/output">
                      {activeRole.id === 'devs' ? (
                        <div className="space-y-4 md:space-y-6 relative">
                          <div className="bg-[#003636] rounded-xl p-4 md:p-5 overflow-hidden shadow-lg shadow-black/20">
                            <pre className="text-[10px] md:text-sm text-[#006D69] leading-relaxed overflow-x-auto no-scrollbar">
                              <code>{JSON.stringify(activeRole.jsonOutput, null, 2)}</code>
                            </pre>
                          </div>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            {activeRole.features?.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-[#003636]/70">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#006D69] mt-1.5 shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <ul className="space-y-3 md:space-y-4 relative">
                          {activeRole.output?.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 md:gap-4 text-[#003636]/80 group/item">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#006D69]/40 group-hover/item:bg-[#006D69] mt-2 md:mt-2.5 shrink-0 transition-colors" />
                              <span className="leading-relaxed text-sm md:text-lg">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                {/* Citation Footer Strip */}
                <div className="bg-[#F8F9F9] border-t border-[#CCCCCC]/20 p-4 md:p-5 px-6 md:px-12 relative">
                  <div className="overflow-x-auto no-scrollbar pb-1">
                    <p className="text-[10px] md:text-[11px] text-[#003636]/50 font-body tracking-wide whitespace-nowrap">
                      Sources: {activeRole.sources.map((source, i) => (
                        <span key={i} className="mr-4 inline-block">
                          <span className="text-[#006D69] font-semibold mr-1">[{i + 1}]</span> {source}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <PixelCorner position="bottom-left" color="#003636" size={48} opacity={1} className="hidden md:block" />
    </section>
  );
};
