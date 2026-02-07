import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  Copy, 
  CheckCircle2, 
  Terminal, 
  Code2, 
  Cpu, 
  Settings, 
  Zap, 
  BookOpen,
  MessageSquare,
  Globe,
  Info
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { toast } from 'sonner';

interface ApiDocumentationProps {
  onBack: () => void;
}

export const ApiDocumentation: React.FC<ApiDocumentationProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'quickstart' | 'single' | 'conversation' | 'models'>('quickstart');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  const codeSnippets = {
    quickstart: `curl https://evidencemd.ai/api/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -d '{
    "model": "evidencemd-fast",
    "messages": [{"role": "user", "content": "What is metformin?"}],
    "stream": true
  }'`,
    single: `curl https://evidencemd.ai/api/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: em_abc123..." \\
  -d '{
    "model": "evidencemd-pro",
    "messages": [
      {
        "role": "user", 
        "content": "What are the first-line treatments for hypertension according to JNC 8 guidelines?"
      }
    ],
    "stream": true,
    "specialty": "cardiology"
  }'`,
    conversation: `curl https://evidencemd.ai/api/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: em_abc123..." \\
  -d '{
    "model": "evidencemd-pro",
    "messages": [
      {"role": "user", "content": "What is metformin used for?"},
      {"role": "assistant", "content": "Metformin is a first-line medication for type 2 diabetes..."},
      {"role": "user", "content": "What are the contraindications?"}
    ],
    "stream": true
  }'`,
    javascript: `const response = await fetch('https://evidencemd.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.EVIDENCEMD_API_KEY,
  },
  body: JSON.stringify({
    model: 'evidencemd-pro',
    messages: conversationHistory,
    stream: true,
  }),
});

const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  
  const chunk = decoder.decode(value);
  // Process SSE chunks
  console.log(chunk);
}`,
    python: `from openai import OpenAI

client = OpenAI(
    api_key="em_abc123...",
    base_url="https://evidencemd.ai/api/v1"
)

# Initialize conversation history
conversation = []

while True:
    user_input = input("You: ")
    conversation.append({"role": "user", "content": user_input})
    
    # Send full conversation history
    stream = client.chat.completions.create(
        model="evidencemd-pro",
        messages=conversation,
        stream=True
    )
    
    # Collect and print streamed response
    response = ""
    for chunk in stream:
        if chunk.choices and chunk.choices[0].delta and chunk.choices[0].delta.content:
            content = chunk.choices[0].delta.content
            print(content, end="", flush=True)
            response += content
    print()
    
    # Add assistant response to history for context
    conversation.append({"role": "assistant", "content": response})`
  };

  const tabs = [
    { id: 'quickstart', label: 'Quick Start', icon: <Zap size={16} /> },
    { id: 'single', label: 'Single Query', icon: <Terminal size={16} /> },
    { id: 'conversation', label: 'Conversational', icon: <MessageSquare size={16} /> },
    { id: 'models', label: 'Models & Params', icon: <Cpu size={16} /> }
  ];

  return (
    <div className="bg-white rounded-[32px] border border-muted/20 overflow-hidden shadow-sm min-h-[700px] flex flex-col relative">
      {/* Header */}
      <div className="px-8 py-6 border-b border-muted/10 flex items-center justify-between bg-muted/5">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full border border-muted/20 flex items-center justify-center text-ink/40 hover:text-brand hover:border-brand transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <div>
            <h3 className="text-xl font-title">API Documentation</h3>
            <p className="text-xs text-ink/40 font-body uppercase tracking-wider">Reference Guide</p>
          </div>
        </div>
        <div className="flex gap-2 p-1 bg-white rounded-full border border-muted/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-brand text-white shadow-brand/20' 
                  : 'text-ink/60 hover:text-ink'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-grow p-8 lg:p-12 overflow-y-auto relative">
        <AnimatePresence mode="wait">
          {activeTab === 'quickstart' && (
            <motion.div
              key="quickstart"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="max-w-4xl"
            >
              <div className="mb-8">
                <h4 className="text-2xl font-title mb-2">Quick Start</h4>
                <p className="text-ink/60 font-body">Get started with clinical-grade reasoning in under 2 minutes.</p>
              </div>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h5 className="font-bold mb-2">Get your API Key</h5>
                    <p className="text-ink/60 font-body text-sm mb-4">Sign in with Google to get your API key from the dashboard.</p>
                    <button className="text-brand font-bold text-sm hover:underline">Go to Dashboard →</button>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm">2</div>
                  <div className="flex-grow">
                    <h5 className="font-bold mb-2">Make your first request</h5>
                    <div className="relative group">
                      <button 
                        onClick={() => copyToClipboard(codeSnippets.quickstart)}
                        className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white/50 transition-colors"
                      >
                        <Copy size={16} />
                      </button>
                      <div className="rounded-2xl overflow-hidden bg-[#0d1117] text-[13px]">
                        <SyntaxHighlighter language="bash" style={atomDark} customStyle={{ padding: '24px', margin: 0 }}>
                          {codeSnippets.quickstart}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h5 className="font-bold mb-2">Receive evidence-based response</h5>
                    <p className="text-ink/60 font-body text-sm">Response includes inline citations <span className="text-brand font-bold">[1]</span>, <span className="text-brand font-bold">[2]</span> with source URLs from peer-reviewed literature.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'single' && (
            <motion.div
              key="single"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="max-w-4xl"
            >
              <div className="mb-8">
                <h4 className="text-2xl font-title mb-2">Single Query (cURL)</h4>
                <p className="text-ink/60 font-body">Perfect for one-off medical questions and diagnostic reasoning.</p>
              </div>

              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-muted/5 border border-muted/10 rounded-2xl">
                    <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest mb-2">Endpoint</div>
                    <code className="text-brand font-bold text-sm">POST /api/v1/chat/completions</code>
                  </div>
                  <div className="p-6 bg-muted/5 border border-muted/10 rounded-2xl">
                    <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest mb-2">Base URL</div>
                    <code className="text-ink font-bold text-sm">https://evidencemd.ai</code>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold mb-4">Example Request</h5>
                  <div className="relative group">
                    <button 
                      onClick={() => copyToClipboard(codeSnippets.single)}
                      className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white/50 transition-colors"
                    >
                      <Copy size={16} />
                    </button>
                    <div className="rounded-2xl overflow-hidden bg-[#0d1117] text-[13px]">
                      <SyntaxHighlighter language="bash" style={atomDark} customStyle={{ padding: '24px', margin: 0 }}>
                        {codeSnippets.single}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold mb-4">Response Format (SSE Stream)</h5>
                  <div className="rounded-2xl overflow-hidden bg-[#0d1117] text-[13px] p-6 space-y-4 font-mono">
                    <div className="text-white/40 italic"># Streaming tokens</div>
                    <div className="text-white/80">data: {'{"id":"chatcmpl-abc123","choices":[{"delta":{"content":"According to"},"index":0}]}'}</div>
                    <div className="text-white/80">data: {'{"id":"chatcmpl-abc123","choices":[{"delta":{"content":" JNC 8 guidelines [1]..."},"index":0}]}'}</div>
                    <div className="text-white/40 italic mt-4"># Final metadata and sources</div>
                    <div className="text-white/80">data: {'{"id":"chatcmpl-abc123","sources":[{"index":1,"title":"JNC 8 Guidelines","url":"https://..."}]}'}</div>
                    <div className="text-brand font-bold">data: [DONE]</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'conversation' && (
            <motion.div
              key="conversation"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="max-w-4xl"
            >
              <div className="mb-8">
                <h4 className="text-2xl font-title mb-2">Conversational (Multi-turn)</h4>
                <p className="text-ink/60 font-body">Build interactive chatbots and AI scribes with persistent clinical context.</p>
              </div>

              <div className="bg-brand/5 border border-brand/10 p-4 rounded-xl flex gap-3 mb-8">
                <Info size={20} className="text-brand shrink-0 mt-0.5" />
                <p className="text-xs text-ink/80 font-body leading-relaxed">
                  <strong>Pro Tip:</strong> For follow-up questions, include previous messages in the conversation. EvidenceMD automatically expands context-dependent queries like "What about side effects?"
                </p>
              </div>

              <div className="space-y-12">
                <div>
                  <h5 className="font-bold mb-4">Python Example (OpenAI SDK)</h5>
                  <div className="relative group">
                    <button 
                      onClick={() => copyToClipboard(codeSnippets.python)}
                      className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white/50 transition-colors"
                    >
                      <Copy size={16} />
                    </button>
                    <div className="rounded-2xl overflow-hidden bg-[#0d1117] text-[13px]">
                      <SyntaxHighlighter language="python" style={atomDark} customStyle={{ padding: '24px', margin: 0 }}>
                        {codeSnippets.python}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold mb-4">JavaScript/TypeScript Example</h5>
                  <div className="relative group">
                    <button 
                      onClick={() => copyToClipboard(codeSnippets.javascript)}
                      className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white/50 transition-colors"
                    >
                      <Copy size={16} />
                    </button>
                    <div className="rounded-2xl overflow-hidden bg-[#0d1117] text-[13px]">
                      <SyntaxHighlighter language="javascript" style={atomDark} customStyle={{ padding: '24px', margin: 0 }}>
                        {codeSnippets.javascript}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'models' && (
            <motion.div
              key="models"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="max-w-4xl"
            >
              <div className="mb-8">
                <h4 className="text-2xl font-title mb-2">Available Models</h4>
                <p className="text-ink/60 font-body">Choose the right model based on clinical complexity and required reasoning depth.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="p-8 border border-muted/20 rounded-3xl bg-muted/5">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h5 className="text-lg font-title">evidencemd-fast</h5>
                      <p className="text-xs text-ink/40 font-body">Quick response</p>
                    </div>
                    <div className="px-3 py-1 bg-brand/10 text-brand text-[10px] font-bold rounded-full uppercase">1 credit</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm font-body text-ink/70">
                      <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                      Response time: 20-30 seconds
                    </li>
                    <li className="flex gap-3 text-sm font-body text-ink/70">
                      <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                      8k thinking tokens
                    </li>
                    <li className="flex gap-3 text-sm font-body text-ink/70">
                      <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                      Peer-reviewed sources included
                    </li>
                  </ul>
                </div>

                <div className="p-8 border border-brand/30 rounded-3xl bg-brand/[0.02]">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h5 className="text-lg font-title">evidencemd-pro</h5>
                      <p className="text-xs text-ink/40 font-body">Deep analysis</p>
                    </div>
                    <div className="px-3 py-1 bg-brand text-white text-[10px] font-bold rounded-full uppercase">2 credits</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm font-body text-ink/70">
                      <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                      Response time: 40-50 seconds
                    </li>
                    <li className="flex gap-3 text-sm font-body text-ink/70">
                      <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                      32k thinking tokens
                    </li>
                    <li className="flex gap-3 text-sm font-body text-ink/70">
                      <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                      Comprehensive synthesis
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-title mb-6">Request Parameters</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-body text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-muted/20">
                        <th className="py-4 font-bold text-ink/40 uppercase tracking-widest text-[10px]">Parameter</th>
                        <th className="py-4 font-bold text-ink/40 uppercase tracking-widest text-[10px]">Type</th>
                        <th className="py-4 font-bold text-ink/40 uppercase tracking-widest text-[10px]">Required</th>
                        <th className="py-4 font-bold text-ink/40 uppercase tracking-widest text-[10px]">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-ink/80">
                      <tr className="border-b border-muted/5">
                        <td className="py-4 font-mono text-xs font-bold text-brand">model</td>
                        <td className="py-4">string</td>
                        <td className="py-4 text-ink/40 italic">Yes</td>
                        <td className="py-4">evidencemd-fast or evidencemd-pro</td>
                      </tr>
                      <tr className="border-b border-muted/5">
                        <td className="py-4 font-mono text-xs font-bold text-brand">messages</td>
                        <td className="py-4">array</td>
                        <td className="py-4 text-ink/40 italic">Yes</td>
                        <td className="py-4">Array of message objects with role and content</td>
                      </tr>
                      <tr className="border-b border-muted/5">
                        <td className="py-4 font-mono text-xs font-bold text-brand">stream</td>
                        <td className="py-4">boolean</td>
                        <td className="py-4 text-ink/40 italic">Yes</td>
                        <td className="py-4">Must be true (streaming only)</td>
                      </tr>
                      <tr className="border-b border-muted/5">
                        <td className="py-4 font-mono text-xs font-bold text-brand">specialty</td>
                        <td className="py-4">string</td>
                        <td className="py-4 text-ink/40 italic text-xs">No</td>
                        <td className="py-4">Medical specialty hint (cardiology, oncology, etc.)</td>
                      </tr>
                      <tr className="border-b border-muted/5">
                        <td className="py-4 font-mono text-xs font-bold text-brand">language</td>
                        <td className="py-4">string</td>
                        <td className="py-4 text-ink/40 italic text-xs">No</td>
                        <td className="py-4">Response language (auto-detected if not set)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="px-8 py-4 border-t border-muted/10 bg-muted/5 flex items-center justify-between text-[10px] text-ink/30 uppercase tracking-widest font-bold">
        <div className="flex items-center gap-4">
          <span>v1.0.4 stable</span>
          <span>Last Updated: Feb 2026</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-brand">Status Page</a>
          <a href="#" className="hover:text-brand">Changelog</a>
        </div>
      </div>
    </div>
  );
};
