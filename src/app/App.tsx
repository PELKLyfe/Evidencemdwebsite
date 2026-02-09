import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhoItsFor } from './components/WhoItsFor';
import { FeaturesCarousel } from './components/FeaturesCarousel';
import { Testimonials } from './components/Testimonials';
import { CoreProduct } from './components/CoreProduct';
import { ReasoningQuality } from './components/ReasoningQuality';
import { GTMValue } from './components/GTMValue';
import { Vision } from './components/Vision';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Toaster, toast } from 'sonner';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Scroll to top whenever the active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const handleSignIn = () => {
    toast.info("Redirecting to EvidenceMD Web App...", {
      description: "You are being navigated to the secure login portal."
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="relative">
            <Hero onTabChange={setActiveTab} />
            <WhoItsFor />
            <FeaturesCarousel />
            <Testimonials />
          </div>
        );
      case 'app':
        return <CoreProduct />;
      case 'api':
        return <ReasoningQuality />;
      case 'vision':
        return <Vision onTabChange={setActiveTab} />;
      case 'enterprise':
        return <GTMValue onContactClick={openContactModal} />;
      default:
        return <Hero />;
    }
  };

  return (
    <div 
      id="root-container" 
      className="relative min-h-screen bg-background font-body selection:bg-brand/20 selection:text-ink flex flex-col"
      style={{ position: 'relative', minHeight: '100vh' }}
    >
      <Toaster position="top-center" expand={false} richColors />
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} onSignInClick={handleSignIn} />
      <main className="relative flex-grow pt-20" style={{ position: 'relative' }}>
        <div key={activeTab} className="relative animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ position: 'relative' }}>
          {renderContent()}
        </div>
      </main>
      <Footer onTabChange={setActiveTab} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}

export default App;
