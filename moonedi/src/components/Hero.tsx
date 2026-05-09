import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';
import {Link} from 'react-router-dom';

// Replace these with your actual image paths
import Farm from "../assets/pig-1.jpg"
import Farm1 from "../assets/pig-2.jpg"
import Farm2 from "../assets/pig-3.jpg"
import Farm3 from "../assets/pig-4.jpg"

const slides = [
  {
    image: Farm,
    headline: "Premium Pork from Botswana",
    description: "Raised sustainably in Botswana's landscapes — fresh, traceable, and full of flavor.",
  },
  {
    image: Farm1,
    headline: "Sustainable Farming, Real Care",
    description: "Animal welfare and eco-friendly practices at the heart of every animal we raise.",
  },
  {
    image: Farm2,
    headline: "From Farm to Your Table",
    description: "Complete transparency — know exactly where your pork comes from.",
  },
  {
    image: Farm3,
    headline: "Excellence in Every Cut",
    description: "Modern facilities, strict hygiene, premium quality you can trust.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7500); // 7.5 seconds per slide — slow and elegant

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      className={styles.hero}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background images with smooth crossfade + slight scale */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className={styles.background}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        />
      </AnimatePresence>

      {/* Overlay gradient — stronger at bottom */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          <h1 className={styles.headline}>
            {slides[currentIndex].headline}
          </h1>

          <p className={styles.description}>
            {slides[currentIndex].description}
          </p>

          <div className={styles.ctaGroup}>
            <Link to="/register" className={styles.ctaPrimary}>
              Become a Customer
            </Link>
            <Link to="/customer-login" className={styles.ctaSecondary}>
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Minimal dots at bottom center */}
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;