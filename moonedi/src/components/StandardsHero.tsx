// StandardsHero.tsx
import React from 'react';
import styles from './StandardsHero.module.css';

const StandardsHero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <div className={styles.badge}>Committed to Excellence</div>
        
        <h1 className={styles.title}>
          Standards & <span className={styles.highlight}>Sustainability</span>
        </h1>

        <p className={styles.subtitle}>
          We uphold the highest hygiene, safety, and quality standards while practicing 
          responsible and sustainable pork production in full compliance with Botswana laws and international requirements.
        </p>

        <div className={styles.ctaButtons}>
          <button onClick={() => scrollToSection('hygiene')} className={styles.primaryBtn}>
            Hygiene & Safety
          </button>
          <button onClick={() => scrollToSection('quality')} className={styles.secondaryBtn}>
            Quality Policies
          </button>
          <button onClick={() => scrollToSection('botswana-laws')} className={styles.secondaryBtn}>
            Botswana Food Laws
          </button>
          <button onClick={() => scrollToSection('sustainability')} className={styles.secondaryBtn}>
            Sustainability
          </button>
          <button onClick={() => scrollToSection('certifications')} className={styles.secondaryBtn}>
            Certifications
          </button>
        </div>
      </div>

      <img 
        src="https://picsum.photos/id/1075/2000/1200" 
        alt="Moneedi high standards and sustainable pork production"
        className={styles.bgImage}
      />
    </section>
  );
};

export default StandardsHero;