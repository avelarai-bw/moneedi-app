// DistributionSection.tsx
import React from 'react';
import styles from './DistributionSection.module.css';
import Distribution from '../assets/Industrial-Cold-Room-Manufacturers.jpg'
const DistributionSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <h2 className={styles.title}>Cold Chain Distribution</h2>
        <p className={styles.subtitle}>
          Fresh delivery with uninterrupted temperature control
        </p>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img 
              src={Distribution}
              alt="Moneedi refrigerated delivery trucks for fresh pork"
              className={styles.image}
            />
          </div>

          <div className={styles.textContent}>
            <ul className={styles.processList}>
              <li>Modern refrigerated fleet maintaining -2°C to 4°C</li>
              <li>Real-time GPS tracking and temperature monitoring</li>
              <li>Daily scheduled deliveries across Botswana</li>
              <li>Sustainable packaging and optimized routing</li>
              <li>Direct supply to supermarkets, butcheries, hotels & restaurants</li>
            </ul>
            <p className={styles.note}>
              Your premium pork stays fresh and safe from our facility straight to your door.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributionSection;