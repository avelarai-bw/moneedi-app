// AbattoirSection.tsx
import React from 'react';
import styles from './AbattoirSection.module.css';
import Abottoir from '../assets/mutinka-pigs-214350_1920.jpg'
const AbattoirSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
       {/* <div className={styles.step}>01</div>*/} 
        <h2 className={styles.title}>The Abattoir</h2>
        <p className={styles.subtitle}>
          Humane slaughter and strict quality control under veterinary supervision
        </p>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img 
              src={Abottoir}
              alt="Modern hygienic pork abattoir facility"
              className={styles.image}
            />
          </div>

          <div className={styles.textContent}>
            <ul className={styles.processList}>
              <li>State-of-the-art facility with highest animal welfare standards</li>
              <li>Automated humane stunning and bleeding process</li>
              <li>Continuous veterinary inspection before and after slaughter</li>
              <li>Temperature-controlled environment throughout</li>
              <li>Full farm-to-carcass traceability system</li>
            </ul>
            <p className={styles.note}>
              Every carcass is rigorously inspected for health and quality before proceeding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbattoirSection;