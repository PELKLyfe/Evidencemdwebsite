import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="p-6 border-b border-muted/10 flex items-center justify-between bg-white sticky top-0 z-10">
              <h2 className="font-title text-2xl text-ink">Privacy Policy</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-muted/10 rounded-full transition-colors text-ink/40 hover:text-ink"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto font-body text-ink/70 leading-relaxed space-y-8">
              <section>
                <h3 className="text-lg font-title text-ink mb-3">1. Introduction</h3>
                <p>
                  EvidenceMD, Inc. ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our clinical decision support platform and API services. By accessing or using our services, you agree to the terms of this Privacy Policy.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-title text-ink mb-3">2. Corporate Identity</h3>
                <p>
                  EvidenceMD, Inc. is a Delaware General Corporation (Stock Corporation).
                </p>
                <div className="mt-4 p-4 bg-muted/5 rounded-lg border border-muted/10 text-sm space-y-2">
                  <p><strong>Principal Office Address:</strong> 1111B South Governors Avenue, Suite 99442, Dover, DE 19904</p>
                  <p><strong>Registered Agent:</strong> Legalinc Corporate Services Inc., 131 Continental Dr, Suite 305, Newark, DE 19713</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-title text-ink mb-3">3. Information We Collect</h3>
                <div className="space-y-4">
                  <p>
                    <strong>Personal and Professional Information:</strong> We collect information you provide directly to us, such as your name, email address, professional credentials, and institutional affiliation when you create an account.
                  </p>
                  <p>
                    <strong>Clinical and Technical Data:</strong> When you use our reasoning services, we process clinical text, documents, and medical images. For enterprise users, this data is handled in accordance with Business Associate Agreements (BAAs).
                  </p>
                  <p>
                    <strong>Usage Data:</strong> We automatically collect certain information about your interaction with our platform, including IP addresses, browser types, and usage patterns to optimize performance.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-title text-ink mb-3">4. How We Use Your Information</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>To provide, maintain, and improve our clinical decision support AI.</li>
                  <li>To process transactions and manage your subscription or API credits.</li>
                  <li>To provide traceable evidence chains and citations for clinical decisions.</li>
                  <li>To ensure compliance with healthcare regulations and security protocols.</li>
                  <li>To communicate with you about service updates and administrative changes.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-title text-ink mb-3">5. Data Protection and HIPAA</h3>
                <p>
                  EvidenceMD is designed with HIPAA compliance as a core requirement. For enterprise customers, we execute Business Associate Agreements (BAAs) to govern the handling of Protected Health Information (PHI). Data is encrypted both at rest and in transit using industry-standard protocols.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-title text-ink mb-3">6. Data Sharing and Disclosure</h3>
                <p>
                  We do not sell your personal data. We may share information with:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li><strong>Service Providers:</strong> Third-party vendors who assist in hosting and operating our platform under strict confidentiality agreements.</li>
                  <li><strong>Compliance:</strong> When required by law or to protect the safety and integrity of our users.</li>
                  <li><strong>Enterprise Partners:</strong> Institutional administrators may have access to usage logs within their organization's workspace.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-title text-ink mb-3">7. Your Rights and Choices</h3>
                <p>
                  Depending on your location, you may have rights regarding your personal information, including the right to access, correct, or delete your data. You can manage your communication preferences through your account settings.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-title text-lg font-title text-ink mb-3">8. Contact Information</h3>
                <p>
                  For any privacy-related inquiries or to exercise your data rights, please contact our Data Protection Office at:
                  <br />
                  <a href="mailto:privacy@evidencemd.ai" className="text-brand font-bold hover:underline">privacy@evidencemd.ai</a>
                  <br />
                  Alternative contact: <a href="mailto:founders@evidencemd.ai" className="text-brand font-bold hover:underline">founders@evidencemd.ai</a>
                </p>
              </section>

              <section className="pt-6 border-t border-muted/10 text-xs">
                <p>Last Updated: February 7, 2026</p>
                <p className="mt-2 font-semibold text-ink">© 2026 EvidenceMD, Inc. All rights reserved.</p>
              </section>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
