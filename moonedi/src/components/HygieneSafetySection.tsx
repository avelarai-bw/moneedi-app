import React from 'react';
import styles from './HygieneSafetySection.module.css';
import Hygiene from '../assets/phantienphat-pig-3750943_1280.jpg'

const HygieneSafetySection: React.FC = () => {
  return (
    <section id="hygiene" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          
          <h2 className={styles.title}>Hygiene & Food Safety</h2>
          <p className={styles.subtitle}>Maintaining the highest standards of cleanliness and safety</p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img 
              src={Hygiene}
              alt="Strict hygiene standards in Moneedi abattoir and processing"
              className={styles.image}
            />
          </div>

          <div className={styles.textContent}>
            <ul className={styles.standardList}>
              <li>Full HACCP (Hazard Analysis Critical Control Points) system implemented</li>
              <li>Daily sanitation and deep cleaning protocols</li>
              <li>Strict personnel hygiene and protective clothing requirements</li>
              <li>Temperature monitoring and control at every stage</li>
              <li>Regular microbial testing and laboratory analysis</li>
              <li>Traceability from farm to finished product</li>
              <li>Compliance with Botswana Food Control Act and international Codex Alimentarius standards</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HygieneSafetySection;