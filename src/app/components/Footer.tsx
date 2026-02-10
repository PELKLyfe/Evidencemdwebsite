import React, { useState } from 'react';
import { Logo } from './Logo';
import { Mail, Github, Twitter, Linkedin, MessageSquare } from 'lucide-react';
import { PrivacyModal } from './PrivacyModal';

interface FooterProps {
  onTabChange?: (tab: string) => void;
}

export const Footer = ({ onTabChange }: FooterProps) => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  return (
    <footer id="contact" className="bg-[#003636] text-[#fefdfb] pt-20 pb-10 relative">
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <Logo variant="inverse" className="mb-6" />
            <p className="text-background max-w-sm mb-8 leading-relaxed font-body">
              The translation layer between clinical intent and administrative logic.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/evidencemd/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors text-[#fefdfb]">
                <Linkedin size={18} />
              </a>
              <a href="https://x.com/evidence_md" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors text-[#fefdfb]">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-title text-xl text-background mb-6">Access</h4>
            <ul className="space-y-4 font-body">
              <li><button onClick={() => onTabChange?.('app')} className="text-background hover:text-brand transition-colors cursor-pointer text-left">Mobile Application</button></li>
              <li><button onClick={() => onTabChange?.('api')} className="text-background hover:text-brand transition-colors cursor-pointer text-left">API Documentation</button></li>
              <li><button onClick={() => onTabChange?.('enterprise')} className="text-background hover:text-brand transition-colors cursor-pointer text-left">Licensing & Pricing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-title text-xl text-background mb-6">Company</h4>
            <ul className="space-y-4 font-body">
              <li><button onClick={() => onTabChange?.('vision')} className="text-background hover:text-brand transition-colors cursor-pointer text-left">Vision</button></li>
              <li><button onClick={() => onTabChange?.('enterprise')} className="text-background hover:text-brand transition-colors cursor-pointer text-left">Careers</button></li>
              <li><button onClick={() => setIsPrivacyOpen(true)} className="text-background hover:text-brand transition-colors cursor-pointer text-left">Privacy Policy</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2 text-background font-body">
              <Mail size={18} className="text-brand" />
              <span>contact@evidencemd.ai</span>
            </div>
          </div>
          <div className="text-[#fefdfb]/50 text-sm font-body text-right">
            <p>Clinical insight you can trust</p>
            <p>© {new Date().getFullYear()} EvidenceMD.ai. All rights reserved.</p>
          </div>
        </div>
        <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      </div>
    </footer>
  );
};
