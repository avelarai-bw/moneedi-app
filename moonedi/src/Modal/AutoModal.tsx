import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import styles from './AutoModal.module.css';

const AutoModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Only show if user hasn't seen it before (optional localStorage check)
      const hasSeen = localStorage.getItem('moonediModalSeen');
      if (!hasSeen) {
        setIsVisible(true);
        localStorage.setItem('moonediModalSeen', 'true');
      }
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            <button 
              className={styles.closeButton} 
              onClick={() => setIsVisible(false)}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <h2 className={styles.title}>Important Information</h2>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Cookie Policy</h3>
              <p className={styles.paragraph}>
                Moonedi Enterprise uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. Essential cookies ensure the website functions properly, while non-essential cookies (such as analytics and marketing) help us understand how visitors interact with our site. By continuing to use our website, you consent to our use of cookies in accordance with this policy. You can manage your preferences or withdraw consent at any time through your browser settings or our cookie banner.
              </p>
              <p className={styles.paragraph}>
                We may use first-party and third-party cookies for performance measurement, advertising, and functionality. No personally identifiable information is stored in essential cookies, and we do not use cookies for automated decision-making that produces legal effects. For more details, including types of cookies and durations, please refer to our full Cookie Policy.
              </p>
              <p className={styles.paragraph}>
                In compliance with Botswana data protection principles and international best practices, we ensure transparency and give you control over non-essential cookies. Your continued use after viewing this notice indicates acceptance, but you remain free to adjust your settings at any time.
              </p>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Security of Your Data</h3>
              <p className={styles.paragraph}>
                Protecting your personal information is a top priority at Moonedi Enterprise. We implement industry-standard security measures, including encryption, secure servers, access controls, and regular security assessments, to safeguard data collected through our website, forms, or interactions. All transmitted data uses HTTPS protocols to prevent unauthorized access during transit.
              </p>
              <p className={styles.paragraph}>
                We only collect necessary information (such as contact details for inquiries or orders) and retain it only as long as required for the purpose it was collected or to comply with legal obligations. We do not sell your personal data to third parties and share it only with trusted service providers under strict confidentiality agreements.
              </p>
              <p className={styles.paragraph}>
                In the unlikely event of a data breach, we are committed to notifying affected individuals and relevant authorities promptly, in line with applicable data protection laws. You have the right to access, correct, or request deletion of your data — contact us at any time to exercise these rights.
              </p>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Expected Values & Conduct on Our Site</h3>
              <p className={styles.paragraph}>
                Moonedi Enterprise fosters a respectful, inclusive, and professional online community. We expect all visitors to engage with courtesy, honesty, and respect toward others. This includes refraining from harassment, hate speech, spam, misinformation, or any behavior that disrupts the positive experience for fellow users or harms our brand reputation.
              </p>
              <p className={styles.paragraph}>
                When submitting inquiries, reviews, or comments, please provide accurate information and avoid posting unlawful, offensive, or copyrighted material without permission. We reserve the right to moderate, edit, or remove content that violates these expectations and may restrict access for repeated or serious breaches.
              </p>
              <p className={styles.paragraph}>
                By using our site, you agree to uphold these values, contributing to a trustworthy space that reflects Botswana's spirit of unity and sustainability. Thank you for being part of the Moonedi community — we appreciate your support and respectful participation.
              </p>
            </div>

            <button 
              className={styles.acceptButton}
              onClick={() => setIsVisible(false)}
            >
              I Understand & Continue
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AutoModal;