import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // For smoother animations
import styles from './ServicesBanner.module.css';

const services = [
  { text: 'Premium Pork Supply', icon: '🐖' }, // Tie to story—swap emojis for SVGs later
  { text: 'Artisan Mince Production', icon: '🔪' },
  { text: 'Global Pork Exports', icon: '🌍' }, // International flair
  { text: 'Traceable Meat Processing', icon: '✅' }
];

const ServicesBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 6000); // Faster: 6s for better flow

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.banner}>
      <motion.div // Animate entrance
        className={styles.leftSection}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className={styles.tagline}>
          "Feeding the nation sustainably."
        </p>
      </motion.div>
      <div className={styles.greenSection}>
        <motion.div
          key={currentIndex} // Key for remount + smooth transition
          className={styles.slider}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <span className={styles.icon}>{services[currentIndex].icon}</span>
          <h3 className={styles.serviceText}>{services[currentIndex].text}</h3>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesBanner;