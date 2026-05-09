import React from 'react';
import styles from './CertificationsSection.module.css';
import Certification from '../assets/naor4040-signing-6598540_1280.jpg'
const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.step}>03</div>
          <h2 className={styles.title}>Certifications & Compliance</h2>
          <p className={styles.subtitle}>Recognized standards that guarantee trust and quality</p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img 
              src={Certification}
              alt="Moneedi certifications and compliance"
              className={styles.image}
            />
          </div>

          <div className={styles.textContent}>
            <ul className={styles.certList}>
              <li>Botswana Bureau of Standards (BOBS) Compliance</li>
              <li>Ministry of Agriculture & Food Security Approval</li>
              <li>HACCP Certified Food Safety Management System</li>
              <li>Compliance with EU Export Requirements (where applicable)</li>
              <li>Animal Welfare and Veterinary Health Certifications</li>
              <li>ISO 22000 alignment (Food Safety Management)</li>
            </ul>
            <p className={styles.note}>
              We continuously work towards full international certifications to strengthen our export capabilities while strictly following Botswana laws.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;