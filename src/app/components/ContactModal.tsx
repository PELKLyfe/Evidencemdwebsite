import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Building2, User, Mail, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Contact form data:', data);
    toast.success('Message sent successfully! Our team will be in touch soon.');
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-muted/20"
          >
            {/* Header */}
            <div className="bg-brand p-8 text-white relative">
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors z-50 cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <h2 className="text-3xl font-title mb-2 text-background">Contact EvidenceMD</h2>
              <p className="text-white/80 font-body text-sm">
                Get in touch with our team of clinical AI specialists.
              </p>
              
              {/* Decorative cross */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-5 bg-[#FEFDFB]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40 ml-1">Full Name</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-brand/40">
                      <User size={16} />
                    </div>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Dr. Sarah Chen"
                      className="w-full bg-white border border-muted/20 rounded-lg py-3 pl-10 pr-4 text-ink font-body text-sm focus:outline-none focus:border-brand/50 transition-colors"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-[10px] mt-1 ml-1 font-bold italic">{errors.name.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40 ml-1">Company / Institution</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-brand/40">
                      <Building2 size={16} />
                    </div>
                    <input
                      {...register('company', { required: 'Company is required' })}
                      placeholder="Mayo Clinic"
                      className="w-full bg-white border border-muted/20 rounded-lg py-3 pl-10 pr-4 text-ink font-body text-sm focus:outline-none focus:border-brand/50 transition-colors"
                    />
                  </div>
                  {errors.company && <p className="text-red-500 text-[10px] mt-1 ml-1 font-bold italic">{errors.company.message}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40 ml-1">Work Email</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-brand/40">
                    <Mail size={16} />
                  </div>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                    })}
                    placeholder="sarah.chen@institution.org"
                    className="w-full bg-white border border-muted/20 rounded-lg py-3 pl-10 pr-4 text-ink font-body text-sm focus:outline-none focus:border-brand/50 transition-colors"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-1 font-bold italic">{errors.email.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40 ml-1">Message / Clinical Context</label>
                <div className="relative">
                  <div className="absolute left-3 top-4 text-brand/40">
                    <MessageSquare size={16} />
                  </div>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    placeholder="How can EvidenceMD support your clinical reasoning workflow?"
                    rows={4}
                    className="w-full bg-white border border-muted/20 rounded-lg py-3 pl-10 pr-4 text-ink font-body text-sm focus:outline-none focus:border-brand/50 transition-colors resize-none"
                  />
                </div>
                {errors.message && <p className="text-red-500 text-[10px] mt-1 ml-1 font-bold italic">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand text-white font-body font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-ink transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-[10px] text-ink/30 text-center font-body uppercase tracking-[0.1em]">
                Secure Transmission · HIPAA Compliant Infrastructure
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};