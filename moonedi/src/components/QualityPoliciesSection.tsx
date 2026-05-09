import React from 'react';
import styles from './QualityPoliciesSection.module.css';
import Quality from '../assets/sueinpng-technical-2355871_1280.jpg'
const QualityPoliciesSection: React.FC = () => {
  return (
    <section id="quality" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
         
          <h2 className={styles.title}>Quality Policies</h2>
          <p className={styles.subtitle}>Our commitment to consistent premium quality</p>
        </div>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <ul className={styles.policyList}>
              <li>Only healthy pigs from approved farms are accepted</li>
              <li>Zero tolerance for antibiotic residue and growth hormones</li>
              <li>Continuous staff training on quality and food safety</li>
              <li>Modern equipment calibrated and maintained regularly</li>
              <li>Customer feedback system for continuous improvement</li>
              <li>Full documentation and record-keeping for every batch</li>
            </ul>
          </div>

          <div className={styles.imageWrapper}>
            <img 
              src={Quality}
              alt="Moneedi quality control and inspection"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPoliciesSection;