import React from 'react';
import { 
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
  Copy
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { toast } from 'sonner';

const CodeBlock = ({ code, language = 'javascript' }: { code: string, language?: string }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="relative group my-6 font-body">
      <button 
        onClick={() => copyToClipboard(code)}
        className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white/50 transition-colors"
      >
        <Copy size={16} />
      </button>
      <div className="rounded-2xl overflow-hidden bg-[#0d1117] text-[13px] border border-white/5 shadow-2xl">
        <SyntaxHighlighter language={language} style={atomDark} customStyle={{ padding: '24px', margin: 0, background: 'transparent' }}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const DocumentationContent: React.FC = () => {
  return (
    <div className="space-y-24 pb-24 font-body">
      {/* Setup */}
      <section id="setup">
        <h2 className="text-2xl font-title text-ink mb-8 pb-4 border-b border-muted/10">Setup</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Base URL</div>
            <code className="block p-4 bg-muted/5 border border-muted/10 rounded-xl text-brand font-mono text-sm">
              https://evidencemd.ai/api/v1
            </code>
          </div>
          <div className="space-y-4">
            <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Endpoint</div>
            <code className="block p-4 bg-muted/5 border border-muted/10 rounded-xl text-ink font-mono text-sm">
              POST /chat/completions
            </code>
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Authentication</div>
          <div className="space-y-2">
            <code className="block p-4 bg-muted/5 border border-muted/10 rounded-xl text-ink font-mono text-sm">
              x-api-key: YOUR_API_KEY
            </code>
          </div>
        </div>
      </section>

      {/* Models */}
      <section id="models">
        <h2 className="text-2xl font-title text-ink mb-8 pb-4 border-b border-muted/10">Models</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="p-8 rounded-3xl border border-muted/20 bg-muted/5">
            <h3 className="text-xl font-bold font-title mb-2">evidencemd-fast</h3>
            <p className="text-sm text-ink/70 mb-4">Quick answers, ~20s response time.</p>
            <span className="px-3 py-1 bg-brand/10 text-brand text-[10px] font-bold rounded-full">1 credit/req</span>
          </div>
          <div className="p-8 rounded-3xl border border-brand/30 bg-brand/[0.02]">
            <h3 className="text-xl font-bold font-title mb-2">evidencemd-pro</h3>
            <p className="text-sm text-ink/70 mb-4">Deep analysis, ~40s response time.</p>
            <span className="px-3 py-1 bg-brand text-white text-[10px] font-bold rounded-full">2 credits/req</span>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quickstart">
        <h2 className="text-2xl font-title text-ink mb-4">Quick Start</h2>
        <CodeBlock language="python" code={`from openai import OpenAI
client = OpenAI(api_key="API_KEY", base_url="https://evidencemd.ai/api/v1")
response = client.chat.completions.create(
    model="evidencemd-pro",
    messages=[{"role": "user", "content": "Hypertension treatment?"}]
)`} />
      </section>

      {/* Parameters */}
      <section id="parameters">
        <h2 className="text-2xl font-title text-ink mb-8 pb-4 border-b border-muted/10">Parameters</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-muted/20">
                <th className="py-4 font-bold text-ink/40 uppercase tracking-widest text-[10px]">Param</th>
                <th className="py-4 font-bold text-ink/40 uppercase tracking-widest text-[10px]">Desc</th>
              </tr>
            </thead>
            <tbody className="text-ink/80">
              <tr className="border-b border-muted/5">
                <td className="py-4 font-mono text-xs text-brand">model</td>
                <td className="py-4">evidencemd-fast or evidencemd-pro</td>
              </tr>
              <tr className="border-b border-muted/5">
                <td className="py-4 font-mono text-xs text-brand">messages</td>
                <td className="py-4">Array of role/content objects</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Errors */}
      <section id="errors">
        <h2 className="text-2xl font-title text-ink mb-8 pb-4 border-b border-muted/10">Error Codes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <tbody className="text-ink/80">
              <tr className="border-b border-muted/5">
                <td className="py-4 font-bold text-ink/40">400</td>
                <td className="py-4 font-mono text-xs text-brand">invalid_model</td>
                <td className="py-4">Unknown model name</td>
              </tr>
              <tr className="border-b border-muted/5">
                <td className="py-4 font-bold text-ink/40">401</td>
                <td className="py-4 font-mono text-xs text-brand">missing_api_key</td>
                <td className="py-4">No API key in headers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Benchmarks */}
      <section id="benchmarks">
        <h2 className="text-2xl font-title text-ink mb-8 pb-4 border-b border-muted/10">Benchmarks</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-brand bg-brand/[0.02]">
            <div className="text-3xl font-title text-brand mb-2">94%</div>
            <div className="text-xs font-bold uppercase tracking-widest text-brand/60">Medical Reasoning</div>
          </div>
          <div className="p-6 rounded-2xl border border-muted/10">
            <div className="text-3xl font-title text-ink mb-2">90%</div>
            <div className="text-xs font-bold uppercase tracking-widest text-ink/40">Clinical Strategy</div>
          </div>
        </div>
      </section>
    </div>
  );
};
