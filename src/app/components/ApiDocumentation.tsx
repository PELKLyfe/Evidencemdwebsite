import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  Copy, 
  Zap, 
  Cpu, 
  Terminal, 
  Activity, 
  Code2, 
  ShieldCheck, 
  BookOpen, 
  Globe, 
  AlertCircle, 
  Clock, 
  CheckCircle2, 
  Menu, 
  ArrowRight,
  Layers,
  MessageSquare,
  Search,
  Database,
  Lock,
  Workflow,
  X,
  Languages,
  Check,
  Minus,
  ArrowDown,
  ArrowRightCircle,
  FileJson,
  Info,
  Heart,
  ShieldAlert,
  Unplug,
  BarChart3,
  MousePointer2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PixelCorner } from './PixelCorner';
import { Logo } from './Logo';

interface ApiDocumentationProps {
  onBack: () => void;
  onSignInClick?: () => void;
}

// Reusable Components
const CopyButton = ({ text }: { text: string }) => {
  const copy = () => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };
  return (
    <button 
      onClick={copy}
      className="p-1.5 hover:bg-white/10 rounded transition-colors text-slate-400 hover:text-white"
    >
      <Copy size={14} />
    </button>
  );
};

const CodeViewer = ({ code, language, title }: { code: string; language: string; title?: string }) => {
  return (
    <div className="relative group border border-slate-200 rounded-xl overflow-hidden bg-[#f8f9fa] shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">
            {language}
          </span>
          {title && <span className="text-[10px] text-slate-300 font-mono italic">{title}</span>}
        </div>
        <CopyButton text={code} />
      </div>
      <div className="overflow-x-auto p-6">
        <SyntaxHighlighter
          language={language}
          style={tomorrow}
          customStyle={{
            margin: 0,
            padding: 0,
            fontSize: '13px',
            lineHeight: '1.6',
            background: 'transparent',
            fontFamily: 'var(--font-barlow-mono, monospace)'
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const TabbedCodeViewer = ({ tabs, streamingToggle = false }: { 
  tabs: { [key: string]: { streaming: string, nonStreaming: string } | string },
  streamingToggle?: boolean 
}) => {
  const tabKeys = Object.keys(tabs);
  const initialTab = tabKeys.includes('python') ? 'python' : (tabKeys[0] || '');
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isStreaming, setIsStreaming] = useState(true);

  useEffect(() => {
    if (!tabKeys.includes(activeTab) && tabKeys.length > 0) {
      setActiveTab(tabKeys[0]);
    }
  }, [tabs]);

  const getCode = (tab: string) => {
    const val = tabs[tab];
    if (!val) return "";
    if (typeof val === 'string') return val;
    return isStreaming ? val.streaming : val.nonStreaming;
  };

  const formatLabel = (tab: string) => {
    if (tab === 'javascript') return 'JS / Fetch';
    if (tab === 'curl') return 'cURL';
    return tab.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {tabKeys.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 text-[10px] font-bold uppercase tracking-widest border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab ? 'border-[#006D69] text-[#006D69]' : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              {formatLabel(tab)}
            </button>
          ))}
        </div>
        {streamingToggle && (
          <div className="flex bg-slate-100 p-1 rounded-lg mb-2 sm:mb-0 shrink-0">
            <button
              onClick={() => setIsStreaming(true)}
              className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md transition-all ${
                isStreaming ? 'bg-white text-[#006D69] shadow-sm' : 'text-slate-400'
              }`}
            >
              Streaming
            </button>
            <button
              onClick={() => setIsStreaming(false)}
              className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md transition-all ${
                !isStreaming ? 'bg-white text-[#006D69] shadow-sm' : 'text-slate-400'
              }`}
            >
              Non-Streaming
            </button>
          </div>
        )}
      </div>
      <CodeViewer 
        language={activeTab.includes('curl') ? 'bash' : (activeTab.includes('javascript') ? 'typescript' : 'python')} 
        code={getCode(activeTab)} 
      />
    </div>
  );
};

export const ApiDocumentation: React.FC<ApiDocumentationProps> = ({ onBack, onSignInClick }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'hero', label: 'Overview', icon: <Zap size={16} /> },
    { id: 'models', label: 'Models', icon: <Cpu size={16} /> },
    { id: 'quickstart', label: 'Quick Start', icon: <Terminal size={16} /> },
    { id: 'followup', label: 'Follow-ups', icon: <MessageSquare size={16} /> },
    { id: 'parameters', label: 'Request Parameters', icon: <Code2 size={16} /> },
    { id: 'thinking', label: 'Thinking Mode', icon: <ShieldCheck size={16} /> },
    { id: 'response-format', label: 'Response Format', icon: <Activity size={16} /> },
    { id: 'json-mode', label: 'JSON Mode', icon: <FileJson size={16} /> },
    { id: 'languages', label: 'Supported Languages', icon: <Globe size={16} /> },
    { id: 'optional-params', label: 'Optional Parameters', icon: <Layers size={16} /> },
    { id: 'system-prompts', label: 'System Prompts', icon: <Info size={16} /> },
    { id: 'health-check', label: 'Health Check', icon: <Heart size={16} /> },
    { id: 'errors', label: 'Error Codes', icon: <AlertCircle size={16} /> },
    { id: 'rate-limits', label: 'Rate Limits & Headers', icon: <Activity size={16} /> },
    { id: 'tracing', label: 'Request Tracing', icon: <MousePointer2 size={16} /> },
    { id: 'benchmarks', label: 'Benchmarks', icon: <BarChart3 size={16} /> },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const quickStartTabs = {
    python: {
      streaming: `from openai import OpenAI\n\nclient = OpenAI(\n    api_key="YOUR_API_KEY",\n    base_url="https://evidencemd.ai/api/v1"\n)\n\nstream = client.chat.completions.create(\n    model="evidencemd-pro",\n    messages=[{"role": "user", "content": "What is the first-line treatment for hypertension?"}],\n    stream=True,\n    extra_body={\n        "specialty": "Cardiology",\n        "language": "English",\n    },\n)\n\nfor chunk in stream:\n    if chunk.choices and chunk.choices[0].delta.content:\n        print(chunk.choices[0].delta.content, end="", flush=True)`,
      nonStreaming: `response = client.chat.completions.create(\n    model="evidencemd-fast",\n    messages=[{"role": "user", "content": "What is metformin used for?"}],\n)\nprint(response.choices[0].message.content)`
    },
    curl: {
      streaming: `curl https://evidencemd.ai/api/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -H "x-api-key: YOUR_API_KEY" \\\n  -d '{\n    "model": "evidencemd-pro",\n    "messages": [\n      {"role": "system", "content": "You are a cardiology specialist. Focus on guideline-directed therapy."},\n      {"role": "user", "content": "Treatment for AFib?"}\n    ],\n    "stream": true,\n    "specialty": "Cardiology",\n    "language": "English",\n    "include_thinking": true\n  }'`,
      nonStreaming: `curl https://evidencemd.ai/api/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -H "x-api-key: YOUR_API_KEY" \\\n  -d '{\n    "model": "evidencemd-fast",\n    "messages": [\n      {"role": "user", "content": "What is metformin used for?"}\n    ]\n  }'`
    },
    javascript: {
      streaming: `const response = await fetch('https://evidencemd.ai/api/v1/chat/completions', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n    'x-api-key': 'YOUR_API_KEY',\n  },\n  body: JSON.stringify({\n    model: 'evidencemd-pro',\n    messages: [\n      { role: 'system', content: 'You are a cardiology specialist. Focus on guideline-directed therapy.' },\n      { role: 'user', content: 'Treatment for AFib?' },\n    ],\n    stream: true,\n    specialty: 'Cardiology',\n    language: 'English',\n    include_thinking: true,\n  }),\n});\n\nconst reader = response.body.getReader();\nconst decoder = new TextDecoder();\nlet thinking = '', answer = '', inThinking = false;\n\nwhile (true) {\n  const { done, value } = await reader.read();\n  if (done) break;\n  for (const line of decoder.decode(value).split('\\n')) {\n    if (!line.startsWith('data: ') || line === 'data: [DONE]') continue;\n    const text = JSON.parse(line.slice(6)).choices?.[0]?.delta?.content || '';\n    if (text.includes('<thinking>')) { inThinking = true; continue; }\n    if (text.includes('</thinking>')) { inThinking = false; continue; }\n    if (inThinking) thinking += text;\n    else answer += text;\n  }\n}\n\nconsole.log('Answer:', answer);\nconsole.log('Thinking:', thinking.slice(0, 300));`,
      nonStreaming: `const response = await fetch("https://evidencemd.ai/api/v1/chat/completions", {\n  method: "POST",\n  headers: { "Content-Type": "application/json", "x-api-key": "YOUR_API_KEY" },\n  body: JSON.stringify({\n    model: "evidencemd-fast",\n    messages: [{ role: "user", content: "What is metformin used for?" }],\n  }),\n});\nconst data = await response.json();\nconsole.log(data.choices[0].message.content);`
    }
  };

  const followUpTabs = {
    python: {
      streaming: `from openai import OpenAI\n\nclient = OpenAI(api_key="YOUR_API_KEY", base_url="https://evidencemd.ai/api/v1")\n\nconversation = [\n    {"role": "system", "content": "You are a cardiology specialist."},\n]\n\n# Turn 1: Ask a question\nconversation.append({"role": "user", "content": "What is metformin used for?"})\n\nstream = client.chat.completions.create(\n    model="evidencemd-pro",\n    messages=conversation,\n    stream=True,\n    extra_body={"specialty": "Cardiology"},\n)\n\nassistant_reply = ""\nfor chunk in stream:\n    if chunk.choices and chunk.choices[0].delta.content:\n        text = chunk.choices[0].delta.content\n        print(text, end="", flush=True)\n        assistant_reply += text\n\nconversation.append({"role": "assistant", "content": assistant_reply})\n\n# Turn 2: Follow-up\nconversation.append({"role": "user", "content": "What are the side effects?"})\n\nstream = client.chat.completions.create(\n    model="evidencemd-pro",\n    messages=conversation,\n    stream=True,\n    extra_body={"specialty": "Cardiology"},\n)\n\nfor chunk in stream:\n    if chunk.choices and chunk.choices[0].delta.content:\n        print(chunk.choices[0].delta.content, end="", flush=True)`,
      nonStreaming: `python response = client.chat.completions.create(\n    model="evidencemd-fast",\n    messages=[{"role": "user", "content": "What is metformin used for?"}],\n)\nprint(response.choices[0].message.content)`
    },
    curl: {
      streaming: `# Turn 1 — Initial Question\ncurl https://evidencemd.ai/api/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -H "x-api-key: YOUR_API_KEY" \\\n  -d '{\n    "model": "evidencemd-pro",\n    "messages": [\n      {"role": "system", "content": "You are a cardiology specialist."},\n      {"role": "user", "content": "What is metformin used for?"}\n    ],\n    "stream": true,\n    "specialty": "Cardiology"\n  }'\n\n# Turn 2 — Follow-up (include previous messages)\ncurl https://evidencemd.ai/api/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -H "x-api-key: YOUR_API_KEY" \\\n  -d '{\n    "model": "evidencemd-pro",\n    "messages": [\n      {"role": "system", "content": "You are a cardiology specialist."},\n      {"role": "user", "content": "What is metformin used for?"},\n      {"role": "assistant", "content": "Metformin is a first-line medication for type 2 diabetes..."},\n      {"role": "user", "content": "What are the side effects?"}\n    ],\n    "stream": true,\n    "specialty": "Cardiology"\n  }'`,
      nonStreaming: `curl https://evidencemd.ai/api/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -H "x-api-key: YOUR_API_KEY" \\\n  -d '{\n    "model": "evidencemd-fast",\n    "messages": [\n      {"role": "user", "content": "What is metformin used for?"}\n    ]\n  }'`
    },
    javascript: {
      streaming: `const API_URL = "https://evidencemd.ai/api/v1/chat/completions";\nconst headers = { "Content-Type": "application/json", "x-api-key": "YOUR_API_KEY" };\n\nconst conversation = [\n  { role: "system", content: "You are a cardiology specialist." },\n];\n\nasync function ask(question) {\n  conversation.push({ role: "user", content: question });\n\n  const res = await fetch(API_URL, {\n    method: "POST",\n    headers,\n    body: JSON.stringify({\n      model: "evidencemd-pro",\n      messages: conversation,\n      stream: true,\n      specialty: "Cardiology",\n    }),\n  });\n\n  const reader = res.body.getReader();\n  const decoder = new TextDecoder();\n  let reply = "";\n\n  while (true) {\n    const { done, value } = await reader.read();\n    if (done) break;\n    for (const line of decoder.decode(value).split("\\n")) {\n      if (!line.startsWith("data: ") || line === "data: [DONE]") continue;\n      const text = JSON.parse(line.slice(6)).choices?.[0]?.delta?.content || "";\n      reply += text;\n      process.stdout.write(text);\n    }\n  }\n\n  conversation.push({ role: "assistant", content: reply });\n  return reply;\n}\n\nawait ask("What is metformin used for?");\nawait ask("What are the side effects?");`,
      nonStreaming: `const response = await fetch("https://evidencemd.ai/api/v1/chat/completions", {\n  method: "POST",\n  headers: { "Content-Type": "application/json", "x-api-key": "YOUR_API_KEY" },\n  body: JSON.stringify({\n    model: "evidencemd-fast",\n    messages: [{ role: "user", content: "What is metformin used for?" }],\n  }),\n});\nconst data = await response.json();\nconsole.log(data.choices[0].message.content);`
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#FEFDFB] font-body text-slate-900 relative">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <Logo className="h-8" />
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar - Desktop Sticky */}
      <aside className={`
        lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] 
        fixed inset-0 z-40 lg:z-0 
        w-72 bg-slate-50 border-r border-slate-200 
        transition-transform duration-300 transform 
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center justify-between mb-10 px-4">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-[#006D69] text-[10px] font-bold uppercase tracking-widest transition-colors">
              <ChevronLeft size={14} /> Back
            </button>
            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 text-slate-400">
                <X size={20} />
              </button>
            </div>
          </div>
          
          <nav className="flex-grow overflow-y-auto space-y-0.5 custom-scrollbar pr-2">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-4">Documentation</div>
            {sections.map((s) => (
              <button 
                key={s.id} 
                onClick={() => scrollToSection(s.id)} 
                className={`
                  w-full flex items-center gap-3 rounded-lg text-sm transition-all px-4 py-2.5 text-left
                  ${activeSection === s.id 
                    ? 'bg-[#006D69] text-white font-bold shadow-md shadow-[#006D69]/20' 
                    : 'text-slate-500 hover:bg-slate-200 hover:text-slate-900'}
                `}
              >
                <span className={activeSection === s.id ? 'text-white' : 'text-[#006D69]/60'}>
                  {s.icon}
                </span>
                <span>{s.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-slate-200 px-4">
            <div className="p-4 bg-white border border-slate-200 rounded-xl">
              <div className="text-[10px] font-bold text-[#006D69] uppercase tracking-widest mb-1">API v1.4.0</div>
              <div className="text-[11px] text-slate-400 italic">Latest: Feb 2026</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow min-w-0 transition-all duration-300 relative">
        {/* SECTION 1 — HERO / OVERVIEW */}
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 text-center border-b border-slate-100 bg-gradient-to-b from-[#006D69]/[0.02] to-transparent relative overflow-hidden">
          <PixelCorner position="top-right" size={40} color="#006D69" opacity={0.05} className="mt-12 mr-12" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl w-full"
          >
            <h1 className="text-4xl md:text-6xl font-title text-slate-900 mb-6">EvidenceMD API Documentation</h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
              Complete API reference — endpoints, parameters, streaming format, error codes, and code examples.
            </p>
            
            <div className="flex flex-col items-center gap-6 mb-12">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Base URL</span>
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
                  <code className="text-[#006D69] font-mono font-bold text-sm">https://evidencemd.ai/api/v1</code>
                  <CopyButton text="https://evidencemd.ai/api/v1" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Endpoint</span>
                <code className="text-slate-800 font-mono font-bold text-sm bg-slate-100/50 px-4 py-1.5 rounded-lg border border-slate-200/50">POST /chat/completions</code>
              </div>
            </div>

            <div className="w-full max-w-lg mx-auto p-6 bg-[#051010] rounded-2xl text-left border border-white/5 shadow-2xl">
              <div className="text-[10px] font-bold text-[#006D69] uppercase tracking-widest mb-4">Authentication (pick one)</div>
              <div className="space-y-3 font-mono text-[13px] text-white/80">
                <div className="flex justify-between items-center group">
                  <code>x-api-key: YOUR_API_KEY</code>
                  <CopyButton text="x-api-key: YOUR_API_KEY" />
                </div>
                <div className="border-t border-white/5 my-2"></div>
                <div className="flex justify-between items-center group">
                  <code>Authorization: Bearer YOUR_API_KEY</code>
                  <CopyButton text="Authorization: Bearer YOUR_API_KEY" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 2 — MODELS */}
        <section id="models" className="px-6 md:px-20 py-32 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-title text-slate-900 mb-16 text-center">Models</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 border border-slate-100 rounded-3xl bg-slate-50/50 hover:border-[#006D69]/20 transition-all flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-2xl font-bold font-title text-slate-900">evidencemd-fast</h3>
                  <span className="px-3 py-1 bg-[#006D69]/10 text-[#006D69] text-[10px] font-bold rounded-full uppercase tracking-wider">1 credit / request</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-8 font-body">
                  <Clock size={16} />
                  <span>~20 second response time</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex gap-3 text-sm text-slate-600"><Check size={18} className="text-[#006D69] shrink-0" /><span>Quick answers</span></li>
                  <li className="flex gap-3 text-sm text-slate-600"><Check size={18} className="text-[#006D69] shrink-0" /><span>Peer-reviewed sources with inline citations</span></li>
                  <li className="flex gap-3 text-sm text-slate-400 italic"><Minus size={18} className="shrink-0" /><span>No thinking mode (include_thinking is ignored)</span></li>
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 border border-[#006D69]/20 rounded-3xl bg-white shadow-xl shadow-[#006D69]/5 flex flex-col relative overflow-hidden">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-2xl font-bold font-title text-[#006D69]">evidencemd-pro</h3>
                  <span className="px-3 py-1 bg-[#006D69] text-white text-[10px] font-bold rounded-full uppercase tracking-wider">2 credits / request</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-8 font-body">
                  <Clock size={16} />
                  <span>~40 second response time</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex gap-3 text-sm text-slate-600"><Check size={18} className="text-[#006D69] shrink-0" /><span>Deep analysis</span></li>
                  <li className="flex gap-3 text-sm text-slate-600"><Check size={18} className="text-[#006D69] shrink-0" /><span>Comprehensive citations from peer-reviewed literature</span></li>
                  <li className="flex gap-3 text-sm text-slate-600"><Check size={18} className="text-[#006D69] shrink-0" /><span>Supports thinking mode (include_thinking: true)</span></li>
                </ul>
              </motion.div>
            </div>
            <p className="text-center text-xs text-slate-400 italic font-body">Billing note: Credits are charged per request. Invalid requests (bad model, missing messages) are rejected before any credits are deducted.</p>
          </div>
        </section>

        {/* SECTION 3 — QUICK START */}
        <section id="quickstart" className="px-6 md:px-20 py-32 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-title text-slate-900 mb-4">Quick Start</h2>
            <p className="text-slate-500 font-body mb-12">Start integrating EvidenceMD with just a few lines of code.</p>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#006D69] mb-8">Single Query — Implementation</h3>
            <TabbedCodeViewer tabs={quickStartTabs} streamingToggle={true} />
          </div>
        </section>

        {/* SECTION 4 — FOLLOW-UP CONVERSATIONS */}
        <section id="followup" className="px-6 md:px-20 py-32 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-title text-slate-900 mb-6">Follow-up Conversations</h2>
            <p className="text-slate-600 leading-relaxed max-w-3xl font-body mb-16">For multi-turn conversations, send the full message history with each request. EvidenceMD uses the history to understand context-dependent follow-ups like "What about side effects?"</p>
            <div className="flex flex-col md:flex-row items-start gap-8 mb-20 relative">
              <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-slate-100 z-0"></div>
              {[
                { step: 1, label: "Initial Question", desc: "User asks a question → you send it as a user message" },
                { step: 2, label: "API Response", desc: "API responds → you store the response as an assistant message" },
                { step: 3, label: "Contextual Follow-up", desc: "User asks a follow-up → you send all previous messages + the new question" }
              ].map((item, idx) => (
                <div key={idx} className="flex-1 relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white border-2 border-[#006D69] rounded-full flex items-center justify-center mb-6 shadow-xl shadow-[#006D69]/5">
                    <span className="text-2xl font-bold text-[#006D69]">{item.step}</span>
                  </div>
                  <h4 className="font-title font-bold text-slate-900 mb-2">{item.label}</h4>
                  <p className="text-xs text-slate-500 font-body leading-relaxed px-4">{item.desc}</p>
                </div>
              ))}
            </div>
            <TabbedCodeViewer tabs={followUpTabs} />
            <div className="mt-12 p-6 bg-[#006D69]/[0.02] border border-[#006D69]/10 rounded-2xl flex items-center gap-4">
              <div className="p-2 bg-[#006D69] text-white rounded-lg"><AlertCircle size={20} /></div>
              <p className="text-sm text-slate-600 font-body"><span className="font-bold text-[#006D69]">Billing callout:</span> Each request is billed as 1 request (1 or 2 credits depending on model).</p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — REQUEST PARAMETERS */}
        <section id="parameters" className="px-6 md:px-20 py-32 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-title text-slate-900 mb-12">Request Parameters</h2>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Parameter</th>
                    <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Required</th>
                    <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Description</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  {[
                    { p: 'model', r: true, d: 'evidencemd-fast (1 credit) or evidencemd-pro (2 credits)' },
                    { p: 'messages', r: true, d: 'Array of {role, content} objects. Roles: system (optional), user, assistant. For follow-ups, include the full conversation history.' },
                    { p: 'stream', r: false, d: 'true = real-time SSE streaming. Default: false (single JSON response).' },
                    { p: 'specialty', r: false, d: 'Free-text specialty — e.g. "Cardiology", "Neurology", "Pediatrics", "Insurance Broker". Omit for general medical.' },
                    { p: 'language', r: false, d: 'Response language — 30 supported (case-insensitive). Default: "English". Invalid values return 400 with the list.' },
                    { p: 'include_thinking', r: false, d: 'Pro only. Set true to stream chain-of-thought in <thinking> tags. English only. Ignored on fast model.' },
                    { p: 'response_format', r: false, d: 'Set {"type": "json_object"} for structured JSON output. Default: text (markdown with references). Can combine with include_thinking.' },
                    { p: 'stream_options', r: false, d: 'Set {"include_usage": true} to receive a final usage chunk with token counts. Only valid when stream: true.' }
                  ].map((row, i) => (
                    <tr key={row.p} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="p-5">
                        <a href={`#param-${row.p}`} id={`param-${row.p}`} className="font-mono text-xs font-bold text-[#006D69] hover:underline">
                          <code>{row.p}</code>
                        </a>
                      </td>
                      <td className="p-5">
                        {row.r ? (
                          <span className="px-2 py-0.5 bg-[#006D69]/10 text-[#006D69] text-[10px] font-bold rounded uppercase">Yes</span>
                        ) : (
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-400 text-[10px] font-bold rounded uppercase">No</span>
                        )}
                      </td>
                      <td className="p-5 text-slate-600 leading-relaxed">{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-2xl flex items-center gap-4">
              <div className="p-2 bg-blue-500 text-white rounded-lg"><Code2 size={20} /></div>
              <p className="text-sm text-blue-900 font-body">
                <span className="font-bold">OpenAI SDK note:</span> Pass specialty, language, include_thinking via <code className="bg-blue-100 px-1 rounded">extra_body={"{...}"}</code>. Pass response_format directly (it's an OpenAI-native parameter).
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — THINKING MODE */}
        <section id="thinking" className="px-6 md:px-20 py-32 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-4xl font-title text-slate-900">Thinking Mode</h2>
              <span className="px-3 py-1 bg-[#006D69] text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Pro Only</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50/50">
                <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-widest mb-4">evidencemd-fast</h4>
                <p className="text-sm text-slate-600 font-body">include_thinking is ignored. No thinking tags returned.</p>
              </div>
              <div className="p-8 border border-[#006D69]/20 rounded-3xl bg-white shadow-xl shadow-[#006D69]/5">
                <h4 className="font-bold text-[#006D69] text-[10px] uppercase tracking-widest mb-4">evidencemd-pro</h4>
                <p className="text-sm text-slate-600 font-body">Set <code className="font-mono text-[#006D69]">include_thinking: true</code> to get <code className="font-mono">&lt;thinking&gt;...&lt;/thinking&gt;</code> tags before the answer.</p>
              </div>
            </div>

            <div className="p-6 bg-amber-50/50 border border-amber-100 rounded-2xl flex items-center gap-4 mb-12">
              <div className="p-2 bg-amber-500 text-white rounded-lg"><AlertCircle size={20} /></div>
              <p className="text-sm text-amber-900 font-body">
                <span className="font-bold">Warning callout:</span> Thinking mode is automatically disabled when language is set to a non-English language. You'll get the answer in your chosen language but without <code className="font-mono">&lt;thinking&gt;</code> tags.
              </p>
            </div>

            <div className="space-y-8">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#006D69]">Python extraction example</h4>
              <CodeViewer language="python" code={`stream = client.chat.completions.create(\n    model="evidencemd-pro",\n    messages=[{"role": "user", "content": "Treatment for AFib?"}],\n    stream=True,\n    extra_body={"include_thinking": True},\n)\n\nthinking, answer, in_thinking = "", "", False\n\nfor chunk in stream:\n    text = chunk.choices[0].delta.content or ""\n    if "<thinking>" in text:\n        in_thinking = True\n        text = text.replace("<thinking>", "")\n    if "</thinking>" in text:\n        in_thinking = False\n        text = text.replace("</thinking>", "")\n        continue\n    if in_thinking:\n        thinking += text    # model's reasoning (hide from user)\n    else:\n        answer += text      # final answer (show to user)\n        print(text, end="", flush=True)\n\nprint(f"\\n\\nThinking: {len(thinking)} chars")`} />
              
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#006D69]">Raw SSE Response (thinking enabled)</h4>
              <CodeViewer language="bash" code={`data: {"choices":[{"delta":{"content":"<thinking>"}}]}\ndata: {"choices":[{"delta":{"content":"Reviewing ACC/AHA atrial fibrillation guidelines..."}}]}\ndata: {"choices":[{"delta":{"content":"</thinking>\\n\\n"}}]}\ndata: {"choices":[{"delta":{"content":"## Treatment for Atrial Fibrillation\\n\\n"}}]}\ndata: {"choices":[{"delta":{"content":"According to the 2023 ACC/AHA guidelines [1]..."}}]}\ndata: {"choices":[{"delta":{},"finish_reason":"stop"}]}\ndata: [DONE]`} />
            </div>
          </div>
        </section>

        {/* SECTION 7 — RESPONSE FORMAT */}
        <section id="response-format" className="px-6 md:px-20 py-32 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-title text-slate-900 mb-16">Response Format</h2>

            {/* Subsection: Streaming */}
            <div className="mb-24">
              <h3 className="text-2xl font-title text-slate-900 mb-4">Streaming</h3>
              <p className="text-slate-600 font-body mb-12">Response arrives in real-time as Server-Sent Events (SSE).</p>
              
              <div className="flex flex-wrap items-center justify-between gap-4 p-8 bg-white border border-slate-200 rounded-3xl mb-12 shadow-sm overflow-x-auto">
                {[
                  "role chunk",
                  "content chunks",
                  "references chunk",
                  "stop chunk",
                  "usage chunk (opt)",
                  "[DONE]"
                ].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold uppercase tracking-widest text-[#006D69] whitespace-nowrap">
                      {step}
                    </div>
                    {i < arr.length - 1 && <ArrowRightCircle className="text-slate-200 shrink-0" size={20} />}
                  </div>
                ))}
              </div>

              <CodeViewer language="bash" title="SSE Text Mode (Default)" code={`data: {"id":"chatcmpl-abc","object":"chat.completion.chunk","model":"evidencemd-pro","choices":[{"delta":{"role":"assistant","content":""},"finish_reason":null}]}\ndata: {"id":"chatcmpl-abc","object":"chat.completion.chunk","model":"evidencemd-pro","choices":[{"delta":{"content":"According to guidelines [1]..."},"finish_reason":null}]}\ndata: {"id":"chatcmpl-abc","object":"chat.completion.chunk","model":"evidencemd-pro","choices":[{"delta":{"content":"\\n---\\n**References:**\\n1) https://..."},"finish_reason":null}]}\ndata: {"id":"chatcmpl-abc","object":"chat.completion.chunk","model":"evidencemd-pro","choices":[{"delta":{},"finish_reason":"stop"}]}\ndata: [DONE]`} />
              
              <div className="mt-8 p-6 bg-blue-50/50 border border-blue-100 rounded-2xl flex items-center gap-4">
                <div className="p-2 bg-blue-500 text-white rounded-lg"><BookOpen size={20} /></div>
                <p className="text-sm text-blue-900 font-body">
                  <span className="font-bold text-blue-600">Info callout:</span> Inline citations [1], [2] and a References section are embedded directly in streamed content — fully visible to any OpenAI SDK. All chunks are standard chat.completion.chunk objects — 100% compatible with OpenAI SDKs.
                </p>
              </div>
            </div>

            <hr className="border-slate-200 my-16" />

            {/* Subsection: Non-Streaming */}
            <div>
              <h3 className="text-2xl font-title text-slate-900 mb-4">Non-Streaming</h3>
              <p className="text-slate-600 font-body mb-12">Returns a single JSON response with the complete answer and sources.</p>
              
              <div className="relative">
                <CodeViewer language="json" title="Text Mode Response" code={`{\n  "id": "chatcmpl-abc123",\n  "object": "chat.completion",\n  "created": 1700000000,\n  "model": "evidencemd-pro",\n  "system_fingerprint": "fp_evidencemd_v2",\n  "choices": [{\n    "index": 0,\n    "message": {\n      "role": "assistant",\n      "content": "According to the 2023 ACC/AHA guidelines [1], first-line treatment...\\n---\\n**References:**\\n1) https://...",\n      "refusal": null\n    },\n    "logprobs": null,\n    "finish_reason": "stop"\n  }],\n  "usage": { "prompt_tokens": 12, "completion_tokens": 245, "total_tokens": 257 },\n  "sources": [\n    {"index": 1, "title": "ACC/AHA 2023 Guidelines", "url": "https://..."}\n  ]\n}`} />
                
                {/* Annotations */}
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <div className="text-[10px] font-bold text-[#006D69] uppercase mb-1">content</div>
                    <p className="text-xs text-slate-500 font-body">includes both inline citations and References section, ready to display as-is</p>
                  </div>
                  <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <div className="text-[10px] font-bold text-[#006D69] uppercase mb-1">usage</div>
                    <p className="text-xs text-slate-500 font-body">token counts for monitoring and billing</p>
                  </div>
                  <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <div className="text-[10px] font-bold text-[#006D69] uppercase mb-1">sources</div>
                    <p className="text-xs text-slate-500 font-body">structured metadata array for custom rendering logic</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-blue-50/50 border border-blue-100 rounded-2xl flex items-center gap-4">
                <div className="p-2 bg-blue-500 text-white rounded-lg"><BookOpen size={20} /></div>
                <p className="text-sm text-blue-900 font-body leading-relaxed">
                  <span className="font-bold text-blue-600">Info callout:</span> In text mode, sources appear both in content (as markdown references) and in the top-level sources array. In JSON mode, sources are embedded inside the content JSON string only — the top-level sources array is omitted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — JSON MODE */}
        <section id="json-mode" className="px-6 md:px-20 py-32 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-4xl font-title text-slate-900">JSON Mode</h2>
              <span className="px-3 py-1 bg-slate-100 text-slate-400 text-[10px] font-bold rounded-full uppercase tracking-wider">Optional</span>
            </div>
            
            <p className="text-lg text-slate-600 font-body mb-12">Get structured JSON output instead of markdown. Set <code className="bg-slate-100 px-1 rounded">response_format: {"{\"type\": \"json_object\"}"}</code>.</p>

            <TabbedCodeViewer tabs={{
              python_streaming: {
                streaming: `from openai import OpenAI\nimport json\n\nclient = OpenAI(api_key="YOUR_API_KEY", base_url="https://evidencemd.ai/api/v1")\n\nstream = client.chat.completions.create(\n    model="evidencemd-pro",\n    messages=[{"role": "user", "content": "First-line treatment for hypertension?"}],\n    stream=True,\n    response_format={"type": "json_object"},\n    extra_body={"specialty": "Cardiology"},\n)\n\ncontent = ""\nfor chunk in stream:\n    if chunk.choices and chunk.choices[0].delta.content:\n        content += chunk.choices[0].delta.content\n\ndata = json.loads(content)\nprint(data["answer"])       # medical answer with inline [1], [2] citations\nprint(data["citations"])    # [1, 3, 5] — citation numbers used\nprint(data["sources"])      # [{"index": 1, "title": "...", "url": "..."}, ...]`,
                nonStreaming: ``
              },
              python_nonstreaming: {
                streaming: `response = client.chat.completions.create(\n    model="evidencemd-pro",\n    messages=[{"role": "user", "content": "First-line treatment for hypertension?"}],\n    response_format={"type": "json_object"},\n    extra_body={"specialty": "Cardiology"},\n)\n\nimport json\ndata = json.loads(response.choices[0].message.content)\nprint(data["answer"])\nprint(data["citations"])\nprint(data["sources"])`,
                nonStreaming: ``
              },
              curl: {
                streaming: `curl https://evidencemd.ai/api/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -H "x-api-key: YOUR_API_KEY" \\\n  -d '{\n    "model": "evidencemd-pro",\n    "messages": [\n      {"role": "user", "content": "First-line treatment for hypertension?"}\n    ],\n    "response_format": {"type": "json_object"},\n    "specialty": "Cardiology"\n  }'`,
                nonStreaming: ``
              }
            }} />

            <div className="grid md:grid-cols-2 gap-8 my-16">
              <CodeViewer language="json" title="Non-Streaming JSON Response" code={`{\n  "id": "chatcmpl-abc123",\n  "object": "chat.completion",\n  "created": 1700000000,\n  "model": "evidencemd-pro",\n  "system_fingerprint": "fp_evidencemd_v2",\n  "choices": [{\n    "index": 0,\n    "message": {\n      "role": "assistant",\n      "content": "{\\"answer\\":\\"According to the 2023 ACC/AHA guidelines [1]...\\",\\"citations\\":[1,3],\\"sources\\":[{\\"index\\":1,\\"title\\":\\"ACC/AHA 2023\\",\\"url\\":\\"https://...\\"}]}",\n      "refusal": null\n    },\n    "logprobs": null,\n    "finish_reason": "stop"\n  }],\n  "usage": { "prompt_tokens": 12, "completion_tokens": 185, "total_tokens": 197 }\n}`} />
              <CodeViewer language="bash" title="Streaming JSON SSE" code={`data: {"id":"chatcmpl-abc","object":"chat.completion.chunk","model":"evidencemd-pro","choices":[{"delta":{"role":"assistant","content":""},"finish_reason":null}]}\ndata: {"id":"chatcmpl-abc","object":"chat.completion.chunk","model":"evidencemd-pro","choices":[{"delta":{"content":"{\\"answer\\": \\""},"finish_reason":null}]}\ndata: {"id":"chatcmpl-abc","object":"chat.completion.chunk","model":"evidencemd-pro","choices":[{"delta":{"content":"According to the 2023 ACC/AHA"},"finish_reason":null}]}\ndata: {"id":"chatcmpl-abc","object":"chat.completion.chunk","model":"evidencemd-pro","choices":[{"delta":{"content":" guidelines [1], first-line treatment includes"},"finish_reason":null}]}\ndata: {"id":"chatcmpl-abc","object":"chat.completion.chunk","model":"evidencemd-pro","choices":[{"delta":{"content":"\\", \\"citations\\": [1, 3], \\"sources\\": [{\\"index\\": 1, \\"title\\": \\"ACC/AHA 2023\\", \\"url\\": \\"https://acc.org/guidelines\\"}]}"},"finish_reason":null}]}\ndata: {"id":"chatcmpl-abc","object":"chat.completion.chunk","model":"evidencemd-pro","choices":[{"delta":{},"finish_reason":"stop"}]}\ndata: [DONE]`} />
            </div>

            <div className="mb-12">
              <div className="p-6 bg-[#006D69] text-white rounded-2xl shadow-xl shadow-[#006D69]/10 inline-block mb-8">
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">Fixed schema</div>
                <div className="text-lg font-mono font-bold">{"{ answer, citations, sources }"}</div>
              </div>

              <div className="overflow-hidden border border-slate-200 rounded-2xl bg-white shadow-sm mb-12">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Feature</th>
                      <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Details</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-sm">
                    {[
                      { f: 'Text mode (default)', d: 'Content is markdown with inline citations and a References section. Sources in separate sources array.' },
                      { f: 'JSON mode', d: 'Content is a JSON string with answer, citations, and sources — ideal for structured integrations.' },
                      { f: 'Fixed schema', d: 'JSON mode always returns {answer, citations, sources}. Custom user-defined schemas are not supported.' },
                      { f: 'No "JSON" prompt required', d: 'Unlike OpenAI, you do not need to include the word "JSON" in your prompt. EvidenceMD JSON mode is post-processing — answer quality is identical to text mode.' },
                      { f: 'JSON + Thinking mode', d: 'You can combine response_format with include_thinking: true. The <thinking> tags appear inside the answer field. Parse them out for the final answer only.' },
                      { f: 'OpenAI SDK drop-in', d: 'The standard accumulate delta.content → json.loads() pattern works identically. Guaranteed valid JSON.' }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-100 last:border-0">
                        <td className="p-5 font-bold text-slate-900">{row.f}</td>
                        <td className="p-5 text-slate-600">{row.d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 — SUPPORTED LANGUAGES */}
        <section id="languages" className="px-6 md:px-20 py-32 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-title text-slate-900 mb-8">Supported Languages</h2>
            <p className="text-slate-600 font-body mb-12">
              Pass one of these values as the <code className="text-[#006D69] font-bold">language</code> parameter. Case-insensitive — "hindi", "HINDI", and "Hindi" all work. Default: English.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
              {[
                "English", "Spanish", "Latin American Spanish", "French", "German", "Greek", "Italian", "Portuguese", "Brazilian Portuguese", "Russian",
                "Turkish", "Arabic", "Hindi", "Bengali", "Telugu", "Tamil", "Urdu", "Indonesian", "Vietnamese", "Japanese",
                "Chinese", "Korean", "Dutch", "Thai", "Finnish", "Kannada", "Polish", "Romanian", "Swahili", "Persian"
              ].map(lang => (
                <div key={lang} className="p-3 bg-white border border-slate-100 rounded-xl text-sm text-slate-500 font-body shadow-sm">
                  {lang}
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 italic font-body">
              Note: Passing an unsupported value returns a 400 error with the full list of valid languages in the response.
            </p>
          </div>
        </section>

        {/* SECTION 10 — OPTIONAL PARAMETERS */}
        <section id="optional-params" className="px-6 md:px-20 py-32 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-title text-slate-900 mb-16">Optional Parameters</h2>
            <div className="space-y-12 mb-20">
              {[
                { 
                  name: "specialty", 
                  type: "string", 
                  desc: "Free-text field. Pass any specialty or role to personalize responses. Omit for general medical responses.",
                  examples: "Cardiology, Neurology, Oncology, Pediatrics, OB/GYN, Psychiatry, Insurance Broker, Biomedical Research, Emergency Medicine, Dermatology"
                },
                { 
                  name: "language", 
                  type: "string", 
                  default: "English",
                  desc: "Get responses in a different language. Case-insensitive. Unsupported values return a 400 error listing all valid options."
                },
                { 
                  name: "include_thinking", 
                  type: "boolean", 
                  default: "false",
                  desc: "Set to true to stream the model's chain-of-thought reasoning in <thinking>...</thinking> tags before the answer. Pro only. English only. Zero impact on existing integrations when omitted."
                },
                { 
                  name: "response_format", 
                  type: "object", 
                  default: '{"type": "text"}',
                  desc: "Set to {\"type\": \"json_object\"} for structured JSON output. Works with both streaming and non-streaming. No \"JSON\" prompt required. Can combine with include_thinking."
                },
                { 
                  name: "stream_options", 
                  type: "object", 
                  default: "null",
                  desc: "Set to {\"include_usage\": true} to receive a final usage chunk with token counts after the stop chunk. Only valid when stream: true."
                }
              ].map(param => (
                <div key={param.name} className="pl-6 border-l-2 border-[#006D69]/20 group hover:border-[#006D69] transition-colors">
                  <div className="flex items-baseline gap-3 mb-3">
                    <h4 className="font-mono font-bold text-lg text-[#006D69]">{param.name}</h4>
                    <span className="text-xs text-slate-400 font-body">
                      {param.type}{param.default && ` (default: ${param.default})`}
                    </span>
                  </div>
                  <p className="text-slate-600 font-body leading-relaxed mb-4">{param.desc}</p>
                  {param.examples && (
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Examples</span>
                      <p className="text-xs text-slate-500 font-mono italic">{param.examples}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="overflow-hidden border border-slate-200 rounded-2xl bg-white shadow-sm mb-12">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Method</th>
                    <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">How</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr>
                    <td className="p-5 font-bold">cURL / fetch</td>
                    <td className="p-5 text-slate-600 leading-relaxed">
                      Add directly in JSON body — <code className="bg-slate-100 px-1 rounded">"specialty": "Cardiology", "language": "Hindi", "response_format": {"{\"type\": \"json_object\"}"}</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 font-bold">OpenAI SDK</td>
                    <td className="p-5 text-slate-600 leading-relaxed">
                      Pass <code className="bg-slate-100 px-1 rounded">response_format</code> directly (OpenAI-native). Pass <code className="bg-slate-100 px-1 rounded">specialty</code>, <code className="bg-slate-100 px-1 rounded">language</code>, <code className="bg-slate-100 px-1 rounded">include_thinking</code> via <code className="bg-slate-100 px-1 rounded">extra_body={"{...}"}</code>.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-amber-50/50 border border-amber-100 rounded-2xl flex items-center gap-4">
              <div className="p-2 bg-amber-500 text-white rounded-lg"><AlertCircle size={20} /></div>
              <p className="text-sm text-amber-900 font-body">
                <span className="font-bold">Warning callout:</span> <code className="font-mono">include_thinking</code> only works when <code className="font-mono">language</code> is "English" (or omitted). If you set a non-English language, thinking is automatically disabled.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 11 — SYSTEM PROMPTS */}
        <section id="system-prompts" className="px-6 md:px-20 py-32 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-4xl font-title text-slate-900">System Prompts</h2>
              <Info className="text-[#006D69]" size={24} />
            </div>
            <p className="text-lg text-slate-600 font-body mb-12">
              Add a <code className="text-[#006D69] font-bold">{"{\"role\": \"system\", \"content\": \"...\"}"}</code> message at the start of your messages array to set the model's behavior. System prompts are high-priority instructions — ideal for setting specialty focus, output format, or constraints. They persist across multi-turn conversations.
            </p>
            <CodeViewer language="json" code={`"messages": [\n  {"role": "system", "content": "You are a cardiology specialist. Focus on guideline-directed therapy."},\n  {"role": "user", "content": "Treatment for AFib?"}\n]`} />
          </div>
        </section>

        {/* SECTION 12 — HEALTH CHECK */}
        <section id="health-check" className="px-6 md:px-20 py-32 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-title text-slate-900 mb-8">Health Check</h2>
            <p className="text-slate-600 font-body mb-12">No authentication required. No credits consumed. Use for uptime monitoring and load balancer health checks.</p>
            <div className="space-y-8">
              <CodeViewer language="bash" title="Request" code={`curl -v https://evidencemd.ai/api/v1/health`} />
              <CodeViewer language="json" title="Response" code={`HTTP/1.1 200 OK\nx-request-id: req-a1b2c3d4e5f6\n\n{"status": "ok", "version": "2.1.0", "models": ["evidencemd-fast", "evidencemd-pro"]}`} />
            </div>
          </div>
        </section>

        {/* SECTION 13 — ERROR CODES */}
        <section id="errors" className="px-6 md:px-20 py-32 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-title text-slate-900 mb-12">Error Codes</h2>
            
            <div className="mb-12">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 font-mono">Error Response Format</h4>
              <CodeViewer language="json" code={`{\n  "error": {\n    "message": "Human-readable description of what went wrong",\n    "type": "error_type",\n    "param": null,\n    "code": "error_code"\n  }\n}`} />
            </div>

            <div className="overflow-hidden border border-slate-200 rounded-2xl bg-white shadow-sm mb-12">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</th>
                    <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Code</th>
                    <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Meaning</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm divide-y divide-slate-100">
                  {[
                    { s: '400', c: 'invalid_model', m: 'Unknown model name', type: 'amber' },
                    { s: '400', c: 'missing_message', m: 'At least one user message is required', type: 'amber' },
                    { s: '400', c: 'invalid_request', m: 'Malformed JSON, invalid parameter types, or unsupported language', type: 'amber' },
                    { s: '401', c: 'missing_api_key', m: 'No API key in request headers', type: 'amber' },
                    { s: '401', c: 'invalid_api_key', m: 'Key is invalid, revoked, or expired', type: 'amber' },
                    { s: '402', c: 'no_credits', m: 'Zero credits remaining', type: 'amber' },
                    { s: '402', c: 'insufficient_credits', m: 'Not enough credits for chosen model', type: 'amber' },
                    { s: '403', c: 'account_suspended', m: 'Account suspended — contact support', type: 'amber' },
                    { s: '429', c: 'rate_limit_exceeded', m: 'Too many requests — 60 req/min per API key. Includes Retry-After header.', type: 'amber' },
                    { s: '500', c: 'internal_error', m: 'Server error — safe to retry', type: 'red' },
                    { s: '503', c: 'model_unavailable', m: 'Model temporarily unavailable — retry shortly', type: 'red' },
                    { s: '504', c: 'request_timeout', m: 'Request exceeded 120s timeout — try a simpler query or use streaming', type: 'red' }
                  ].map((err, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}>
                      <td className="p-5">
                        <span className={`px-2 py-1 rounded font-mono text-xs font-bold ${err.type === 'amber' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                          {err.s}
                        </span>
                      </td>
                      <td className="p-5 font-mono text-xs font-bold text-slate-700">{err.c}</td>
                      <td className="p-5 text-slate-600 leading-relaxed">{err.m}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mb-12">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 font-mono">Error Handling (Python)</h4>
              <CodeViewer language="python" code={`from openai import OpenAI, APIError, RateLimitError\n\nclient = OpenAI(api_key="YOUR_API_KEY", base_url="https://evidencemd.ai/api/v1")\n\ntry:\n    response = client.chat.completions.create(\n        model="evidencemd-pro",\n        messages=[{"role": "user", "content": "Treatment for hypertension?"}],\n    )\n    print(response.choices[0].message.content)\nexcept RateLimitError as e:\n    print(f"Rate limited. Retry after: {e.response.headers.get('retry-after')}s")\nexcept APIError as e:\n    print(f"API error {e.status_code}: {e.message}")`} />
            </div>
          </div>
        </section>

        {/* SECTION 14 — RATE LIMITS & HEADERS */}
        <section id="rate-limits" className="px-6 md:px-20 py-32 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-title text-slate-900 mb-8">Rate Limits & Headers</h2>
            <p className="text-slate-600 font-body mb-12">OpenAI-compatible rate limiting with full header support. The OpenAI SDK auto-retries on 429.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="overflow-hidden border border-slate-200 rounded-2xl bg-white shadow-sm">
                <div className="bg-slate-50 border-b border-slate-200 p-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Default Limits</span>
                </div>
                <table className="w-full text-left border-collapse">
                  <tbody className="font-body text-sm divide-y divide-slate-100">
                    <tr>
                      <td className="p-4 font-bold text-slate-700">Requests per minute</td>
                      <td className="p-4 text-slate-600">60 per API key</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-700">Max request timeout</td>
                      <td className="p-4 text-slate-600">120 seconds</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-8 bg-amber-50/50 border border-amber-100 rounded-3xl flex items-center gap-6">
                <div className="p-3 bg-amber-500 text-white rounded-2xl shadow-lg shadow-amber-500/20">
                  <ShieldAlert size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-1">429 Response</h4>
                  <p className="text-sm text-amber-800 font-body leading-relaxed">
                    Includes <code className="font-mono">Retry-After</code> header (seconds). OpenAI SDKs auto-retry with exponential backoff.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 font-mono">Response Headers (on every response)</h4>
              <div className="overflow-hidden border border-slate-200 rounded-2xl bg-white shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Header</th>
                      <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Description</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-sm divide-y divide-slate-100">
                    {[
                      { h: 'x-request-id', d: 'Unique request ID for tracing' },
                      { h: 'openai-processing-ms', d: 'Server-side processing time in milliseconds' },
                      { h: 'x-ratelimit-limit-requests', d: 'Max requests allowed per minute' },
                      { h: 'x-ratelimit-remaining-requests', d: 'Requests remaining in current window' },
                      { h: 'x-ratelimit-reset-requests', d: 'Time until rate limit resets (e.g. "6ms", "1.5s", "1m30s")' },
                      { h: 'x-ratelimit-limit-tokens', d: 'Token limit per minute (informational — 128,000)' },
                      { h: 'x-ratelimit-remaining-tokens', d: 'Tokens remaining (informational — 128,000)' },
                      { h: 'x-ratelimit-reset-tokens', d: 'Token limit reset time (same as request reset)' },
                      { h: 'retry-after', d: 'Seconds to wait (only on 429 responses)' }
                    ].map((header, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-5 font-mono text-xs font-bold text-[#006D69]">{header.h}</td>
                        <td className="p-5 text-slate-600 leading-relaxed">{header.d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-12">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 font-mono">Monitoring Rate Limits (Python)</h4>
              <CodeViewer language="python" code={`response = client.chat.completions.with_raw_response.create(\n    model="evidencemd-pro",\n    messages=[{"role": "user", "content": "What is aspirin?"}]\n)\n\nprint(response.headers["x-ratelimit-remaining-requests"])  # e.g. "58"\nprint(response.headers["openai-processing-ms"])            # e.g. "1523"\n\ncompletion = response.parse()  # get the actual ChatCompletion\nprint(completion.choices[0].message.content)`} />
            </div>
          </div>
        </section>

        {/* SECTION 15 — REQUEST TRACING */}
        <section id="tracing" className="px-6 md:px-20 py-32 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-title text-slate-900 mb-8">Request Tracing</h2>
            <p className="text-lg text-slate-600 font-body mb-8 leading-relaxed">
              Every response — including errors (400, 401, 402, 429, 500, 503, 504) — includes an <code className="text-[#006D69] font-bold">x-request-id</code> header. Always log this value. Include it when contacting support for fastest resolution.
            </p>
            
            <div className="p-8 bg-blue-50 border border-blue-100 rounded-[32px] flex items-start gap-6">
              <div className="p-3 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-500/20">
                <MousePointer2 size={28} />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Client Request ID</h4>
                <p className="text-sm text-blue-800 font-body leading-relaxed">
                  Send <code className="font-mono bg-blue-100 px-1 rounded">X-Client-Request-Id</code> header with your own trace ID (up to 512 chars) for distributed tracing. It is logged alongside the server <code className="font-mono">x-request-id</code>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 16 — BENCHMARKS */}
        <section id="benchmarks" className="px-6 md:px-20 py-32 bg-white pb-60">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-title text-slate-900 mb-16 text-center">Benchmarks</h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* Chart 1: Medical Reasoning */}
              <div>
                <h4 className="text-xl font-title font-bold text-slate-900 mb-10 text-center">Medical Reasoning</h4>
                <div className="space-y-8">
                  {[
                    { model: 'EvidenceMD AI API', score: 94, isPrimary: true },
                    { model: 'GPT 5.2', score: 83, isPrimary: false },
                    { model: 'Claude 4.5 Opus', score: 76, isPrimary: false },
                    { model: 'Gemini 3 Pro', score: 70, isPrimary: false }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-end text-[10px] font-bold uppercase tracking-widest">
                        <span className={item.isPrimary ? 'text-[#006D69]' : 'text-slate-400'}>{item.model}</span>
                        <span className={item.isPrimary ? 'text-[#006D69]' : 'text-slate-400'}>{item.score}%</span>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.score}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                          className={`h-full rounded-full ${item.isPrimary ? 'bg-[#006D69]' : 'bg-slate-300'}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart 2: Medical / Financial Reasoning */}
              <div>
                <h4 className="text-xl font-title font-bold text-slate-900 mb-10 text-center">Medical / Financial Reasoning</h4>
                <div className="space-y-8">
                  {[
                    { model: 'EvidenceMD AI API', score: 90, isPrimary: true },
                    { model: 'GPT 5.2', score: 80, isPrimary: false },
                    { model: 'Claude 4.5 Opus', score: 75, isPrimary: false },
                    { model: 'Gemini 3 Pro', score: 70, isPrimary: false }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-end text-[10px] font-bold uppercase tracking-widest">
                        <span className={item.isPrimary ? 'text-[#006D69]' : 'text-slate-400'}>{item.model}</span>
                        <span className={item.isPrimary ? 'text-[#006D69]' : 'text-slate-400'}>{item.score}%</span>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.score}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                          className={`h-full rounded-full ${item.isPrimary ? 'bg-[#006D69]' : 'bg-slate-300'}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-20 p-8 border border-slate-100 rounded-[40px] bg-slate-50/50 text-center">
              <p className="text-xs text-slate-400 font-body italic">
                Benchmarks conducted on USMLE, MedQA, and internal medical billing reasoning datasets. Last updated February 2026.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="px-6 md:px-20 py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 md:p-20 rounded-[48px] bg-[#003636] text-white relative overflow-hidden shadow-2xl shadow-[#003636]/20"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#006D69]/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/5 rounded-full blur-[80px] -ml-32 -mb-32"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-title mb-6 leading-tight text-white">
                  Ready to integrate clinical-grade <br className="hidden md:block" />
                  decision support?
                </h2>
                <p className="text-lg text-white/90 font-body mb-10 max-w-xl mx-auto">
                  Build the future of evidence-based healthcare. Get your API key today and start building in minutes.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button 
                    onClick={onSignInClick}
                    className="button w-full sm:w-auto bg-[#006D69] hover:bg-[#005a57] text-white px-10 py-4 flex items-center justify-center gap-2 group transition-all"
                  >
                    Get API Key <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={onBack}
                    className="button w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-10 py-4 backdrop-blur-sm transition-all border border-white/10"
                  >
                    Back to Website
                  </button>
                </div>
                <p className="mt-8 text-xs text-white/50 font-body uppercase tracking-[0.2em]">
                  Start with 5 free credits
                </p>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
};
