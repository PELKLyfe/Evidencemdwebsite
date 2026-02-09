import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Eye, EyeOff, Check } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';
import { Logo } from './Logo';
import { DecorativeSquares } from './DecorativeSquares';
import googlePlayIcon from "figma:asset/6fb3f26f922801efd856801ecabf5f6fe2c72c11.png";
import hipaaBadge from 'figma:asset/211ef6c271f4d658da281ffd17a727fe306f0454.png';

interface LoginPageProps {
  onBack: () => void;
}

export const LoginPage = ({ onBack }: LoginPageProps) => {
  const { loginWithRedirect } = useAuth0();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    loginWithRedirect({
      appState: { returnTo: window.location.pathname },
      authorizationParams: {
        login_hint: email,
      }
    });
  };

  const handleGoogleSignIn = () => {
    loginWithRedirect({
      authorizationParams: {
        connection: 'google-oauth2',
      }
    });
  };

  return (
    <div className="h-screen bg-[#FEFDFB] flex flex-col md:flex-row overflow-hidden font-body text-ink">
      {/* Left side: branding/info */}
      <div className="hidden md:flex md:w-[38%] bg-[#003636] p-6 lg:p-10 flex-col justify-between relative overflow-hidden shrink-0">
        <button 
          onClick={onBack} 
          className="absolute top-8 lg:top-10 left-8 lg:left-10 flex items-center gap-2 text-white/60 hover:text-white transition-colors group z-20"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[9px] font-bold uppercase tracking-widest">Back to website</span>
        </button>

        {/* Enterprise Style L-Shape Motif */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 -right-4"
        >
          <DecorativeSquares 
            variant="l-shape" 
            size={64} 
            colors={["#FEFDFB"]}
            opacity={0.6}
          />
        </motion.div>
        
        <div className="relative z-10 mt-12 lg:mt-20">
          <div className="mb-8">
            <Logo variant="inverse" />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[42px] lg:text-[52px] font-title text-white leading-[1.1] mb-8 tracking-tight"
          >
            The next generation of <br />
            <span className="text-[#FEFDFB] italic opacity-90">medical reasoning.</span>
          </motion.h1>
          <p className="text-sm text-white/50 font-body max-w-xs leading-relaxed">
            Join thousands of clinicians and researchers using EvidenceMD to synthesize peer-reviewed literature.
          </p>
        </div>

        <div className="relative z-10">
          <img 
            src={hipaaBadge} 
            alt="HIPAA Compliant" 
            className="w-32 h-32 object-contain translate-y-4" 
          />
        </div>
      </div>

      {/* Right side: Login form */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 bg-[#FEFDFB] relative overflow-hidden">
        {/* Subtle square motif for right side */}
        <DecorativeSquares 
          variant="two-square" 
          size={160} 
          className="absolute top-0 right-0 opacity-[0.8] scale-x-[-1]" 
          colors={["#003636", "#003636"]}
        />

        <div className="w-full max-w-[400px] relative z-10 flex flex-col">
          <div className="md:hidden mb-6 flex justify-between items-center">
            <div className="scale-75 origin-left"><Logo /></div>
            <button onClick={onBack} className="p-2 text-ink/40 hover:text-ink transition-colors">
              <ArrowLeft size={18} />
            </button>
          </div>

          <div className="mb-6 text-center md:text-left">
            <h2 className="text-2xl font-title text-ink mb-1">Welcome Back</h2>
            <p className="text-[13px] text-ink/60 font-body">Sign in to your clinical dashboard.</p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-ink/40 uppercase tracking-widest ml-1">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="clinician@university.edu"
                className="w-full px-4 py-2.5 rounded-xl border border-muted/20 focus:border-[#006D69] focus:ring-4 focus:ring-[#006D69]/5 outline-none transition-all font-body text-sm text-ink bg-white"
                required
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Password</label>
                <button type="button" className="text-[10px] font-bold text-[#006D69] hover:underline">Forgot?</button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-muted/20 focus:border-[#006D69] focus:ring-4 focus:ring-[#006D69]/5 outline-none transition-all font-body text-sm text-ink bg-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-ink/20 hover:text-ink transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-1 py-1">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    className="peer sr-only" 
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <div className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${
                    rememberMe ? 'bg-[#006D69] border-[#006D69]' : 'border-muted/30 bg-white group-hover:border-[#006D69]/30'
                  }`}>
                    {rememberMe && <Check size={10} className="text-white stroke-[3px]" />}
                  </div>
                </div>
                <span className="text-[11px] font-bold text-ink/60 group-hover:text-ink transition-colors">Keep me signed in</span>
              </label>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#006D69] text-white py-3 rounded-xl font-bold text-sm shadow-md shadow-[#006D69]/5 hover:bg-[#005a57] transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Sign in
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted/10"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#FEFDFB] px-4 text-[9px] font-bold text-ink/20 uppercase tracking-[0.2em]">Or continue with</span>
            </div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2.5 py-2.5 border border-muted/20 rounded-xl hover:bg-muted/5 transition-all font-bold text-[12px] text-ink bg-white shadow-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google
          </button>

          <p className="text-center mt-6 text-[12px] font-body text-ink/40">
            Don't have an account? <button className="text-[#006D69] font-bold hover:underline">Create an account</button>
          </p>

          <div className="mt-8 pt-4 border-t border-muted/10 flex justify-center gap-6">
            <a href="#" className="flex items-center gap-1.5 text-ink/20 hover:text-ink transition-all">
              <svg viewBox="0 0 384 512" className="w-3 h-3 fill-current">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <span className="text-[8px] font-bold uppercase tracking-wider">iOS App</span>
            </a>
            <a href="#" className="flex items-center gap-1.5 text-ink/20 hover:text-ink transition-all">
              <img src={googlePlayIcon} alt="Google Play" className="w-3 h-3 object-contain opacity-20" />
              <span className="text-[8px] font-bold uppercase tracking-wider">Android App</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};