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
import { LoginPage } from './components/LoginPage';
import { Auth0Provider } from '@auth0/auth0-react';
import { Toaster } from 'sonner';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab, showLoginPage]);

  if (showLoginPage) {
    return <LoginPage onBack={() => setShowLoginPage(false)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero onTabChange={setActiveTab} onSignInClick={() => setShowLoginPage(true)} />
            <WhoItsFor />
            <FeaturesCarousel />
            <Testimonials />
          </>
        );
      case 'app': return <CoreProduct />;
      case 'api': return <ReasoningQuality onSignInClick={() => setShowLoginPage(true)} />;
      case 'vision': return <Vision onTabChange={setActiveTab} onSignInClick={() => setShowLoginPage(true)} />;
      case 'enterprise': return <GTMValue onContactClick={() => setIsContactModalOpen(true)} />;
      default: return <Hero onTabChange={setActiveTab} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-background font-body flex flex-col">
      <Toaster position="top-center" richColors />
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} onSignInClick={() => setShowLoginPage(true)} />
      <main className="relative flex-grow pt-20">
        <div key={activeTab} className="animate-in fade-in duration-500">
          {renderContent()}
        </div>
      </main>
      <Footer onTabChange={setActiveTab} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}

function App() {
  const domain = "YOUR_AUTH0_DOMAIN";
  const clientId = "YOUR_AUTH0_CLIENT_ID";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <AppContent />
    </Auth0Provider>
  );
}

export default App;
