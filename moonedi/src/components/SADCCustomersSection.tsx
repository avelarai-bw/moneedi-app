// SADCCustomersSection.tsx
import React from 'react';
import styles from './SADCCustomersSection.module.css';
import sadc from '../assets/alfvanbeem-ship-6391915_1280.jpg'
const SADCCustomersSection: React.FC = () => {
  return (
    <section id="sadc-customers" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          
          <h2 className={styles.title}>SADC Region</h2>
          <p className={styles.subtitle}>Exporting quality Botswana pork to neighboring countries</p>
        </div>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <h3>Key SADC Markets:</h3>
            <ul className={styles.customerList}>
              <li>South Africa</li>
              <li>Namibia</li>
              <li>Zambia</li>
              <li>Zimbabwe</li>
              <li>Botswana-based regional distributors</li>
            </ul>

            <p className={styles.description}>
              We supply consistent, high-quality pork cuts that meet SADC import standards. 
              Our cold chain logistics ensure product integrity across borders.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <img 
              src={sadc}
              alt="Moneedi pork export to SADC region"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SADCCustomersSection;