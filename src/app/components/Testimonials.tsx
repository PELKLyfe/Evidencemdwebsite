import React from 'react';
import { Quote } from 'lucide-react';
import { PixelCorner } from './PixelCorner';

const testimonials = [
  {
    initials: "AS",
    name: "Dr. Abishek Shahi",
    title: "Harvard-trained Physician",
    content: "EvidenceMD AI's DeepSearch AI has transformed how I access medical information. The depth and accuracy of responses, coupled with direct citations to current research, make it an invaluable resource in my clinical practice."
  },
  {
    initials: "NR",
    name: "Dr. Naresh Ram",
    title: "MD, Internal Medicine",
    content: "As an internist dealing with complex cases, I need reliable information quickly. EvidenceMD AI's DeepSearch AI consistently outperforms other medical search tools I've used, providing clinically relevant information that helps inform my treatment decisions."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="font-title text-4xl text-ink mb-4">Reasoning Clinicians Trust</h2>
          <div className="w-20 h-1 bg-brand mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white border border-muted/30 p-10 rounded-2xl shadow-brand relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={80} className="text-brand" />
              </div>
              
              <div className="relative z-10">
                <p className="font-body text-ink/80 text-lg leading-relaxed italic mb-8">
                  "{t.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand font-bold text-lg">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-title text-xl text-ink leading-none mb-1">{t.name}</h4>
                    <p className="font-body text-sm text-ink/60">{t.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PixelCorner position="bottom-right" color="#003636" size={48} opacity={1} />
    </section>
  );
};
