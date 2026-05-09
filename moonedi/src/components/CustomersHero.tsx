// CustomersHero.tsx
import React from 'react';
import styles from './CustomersHero.module.css';
import Customers from '../assets/dendoktoor-container-ship-6631117.jpg'

const CustomersHero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust for fixed navbar if you have one
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <div className={styles.badge}>Trusted Across Borders</div>
        
        <h1 className={styles.title}>
          Premium Moneedi Pork <br />
          Delivered to <span className={styles.highlight}>Botswana, SADC & Europe</span>
        </h1>

        <p className={styles.subtitle}>
          From local butcheries in Gaborone to supermarkets in SADC and fine dining in Europe — 
          we deliver high-quality, traceable Botswana pork with pride.
        </p>

        <div className={styles.ctaButtons}>
          <button 
            onClick={() => scrollToSection('local-customers')}
            className={styles.primaryBtn}
          >
            Local Customers - Botswana
          </button>
          <button 
            onClick={() => scrollToSection('sadc-customers')}
            className={styles.secondaryBtn}
          >
            SADC Region
          </button>
          <button 
            onClick={() => scrollToSection('europe-customers')}
            className={styles.secondaryBtn}
          >
            Europe Exports
          </button>
        </div>

        <div className={styles.impactBox}>
          <p className={styles.impactText}>
            <strong>Empowering Botswana:</strong> Creating jobs for our people, supporting local farmers, 
            advancing sustainable agriculture, and earning valuable foreign exchange.
          </p>
        </div>
      </div>

      <img 
        src={Customers}
        alt="Moneedi pork exports and local distribution"
        className={styles.bgImage}
      />
    </section>
  );
};

export default CustomersHero;