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
import { Toaster, toast } from 'sonner';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);

  // Scroll to top whenever the active tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    
    // Fallback for slower rendering or scroll restoration
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, [activeTab, showLoginPage]);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);
  
  const handleSignIn = () => {
    setShowLoginPage(true);
  };

  if (showLoginPage) {
    return (
      <div className="relative animate-in fade-in duration-500">
        <Toaster position="top-center" expand={false} richColors />
        <LoginPage onBack={() => setShowLoginPage(false)} />
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="relative">
            <Hero onTabChange={setActiveTab} onSignInClick={handleSignIn} />
            <WhoItsFor />
            <FeaturesCarousel />
            <Testimonials />
          </div>
        );
      case 'app':
        return <CoreProduct onSignInClick={handleSignIn} />;
      case 'api':
        return <ReasoningQuality onSignInClick={handleSignIn} />;
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

function App() {
  // Replace these with your actual Auth0 credentials from the dashboard
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
