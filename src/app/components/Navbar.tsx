import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onSignInClick: () => void;
}

export const Navbar = ({ activeTab, onTabChange, onSignInClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Vision', id: 'vision' },
    { name: 'App', id: 'app' },
    { name: 'API', id: 'api' },
    { name: 'Enterprise', id: 'enterprise' },
  ];

  const handleTabClick = (id: string) => {
    onTabChange(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F0F7F6]/50 backdrop-blur-md border-b border-brand/5 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => handleTabClick('home')} 
          className="hover:opacity-90 transition-opacity cursor-pointer"
        >
          <Logo />
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleTabClick(link.id)}
              className={`text-sm font-semibold transition-all cursor-pointer relative py-1 ${
                activeTab === link.id 
                  ? 'text-ink' 
                  : 'text-ink/60 hover:text-ink'
              }`}
            >
              {link.name}
              {activeTab === link.id && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand rounded-full" />
              )}
            </button>
          ))}
          <button 
            onClick={onSignInClick}
            className="button button-primary px-8 py-2.5 text-sm"
          >
            Sign In / Sign Up
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-ink" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FEFDFB] shadow-2xl border-t border-brand/10 py-8 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-6 px-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleTabClick(link.id)}
                className={`text-xl font-bold text-left py-3 border-b border-brand/5 last:border-0 ${
                  activeTab === link.id ? 'text-brand' : 'text-ink/60'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => {
                onSignInClick();
                setIsMenuOpen(false);
              }}
              className="button button-primary py-5 text-center font-bold mt-4 shadow-lg shadow-brand/10"
            >
              Sign In / Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
