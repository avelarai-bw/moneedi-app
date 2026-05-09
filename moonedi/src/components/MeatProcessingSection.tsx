// MeatProcessingSection.tsx
import React from 'react';
import styles from './MeatProcessingSection.module.css';
import Meat from '../assets/blackriv-pig-1985380 (1).jpg'
const MeatProcessingSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
      
        <h2 className={styles.title}>Meat Processing</h2>
        <p className={styles.subtitle}>
          Precision cutting, deboning, and hygienic packaging
        </p>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <ul className={styles.processList}>
              <li>Skilled butchers combined with modern automated lines</li>
              <li>Accurate portioning and trimming with minimal waste</li>
              <li>Vacuum sealing and modified atmosphere packaging</li>
              <li>Advanced hygiene protocols and metal detection</li>
              <li>Custom cuts for retail, restaurants, and institutions</li>
            </ul>
          </div>

          <div className={styles.imageWrapper}>
            <img 
              src={Meat}
              alt="Premium pork meat processing and cutting line"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeatProcessingSection;