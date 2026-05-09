import React from 'react';
import styles from './AboutHero.module.css';
import Truck from '../assets/arttower-landscape-5186249_1920.jpg'
import { Link } from 'react-router-dom';
const AboutHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <div className={styles.badge}>Since 2024</div>
        
        <h1 className={styles.title}>
          Premium Pork, <span className={styles.highlight}>Responsibly Raised</span><br />
          and Delivered Fresh
        </h1>

        <p className={styles.subtitle}>
          At Moneedi, we believe in doing meat the right way — with care for animals, 
          respect for the environment, and uncompromising quality for our customers.
        </p>

        <div className={styles.ctaButtons}>
          <Link to="#our-process" className={styles.primaryBtn}>
            See How We Work
          </Link>
          <Link to="/contact" className={styles.secondaryBtn}>
            Get In Touch
          </Link>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Traceable</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>Fresh</span>
            <span className={styles.statLabel}>Daily Delivery</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>Botswana</span>
            <span className={styles.statLabel}>Proudly Local</span>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <img 
        src={Truck}
        alt="Moneedi premium pork farm and processing"
        className={styles.bgImage}
      />
    </section>
  );
};

export default AboutHero;