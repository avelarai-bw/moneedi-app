import React from 'react';
import styles from './BotswanaFoodLawsSection.module.css';
import Laws from '../assets/mikesies0-zebra-722151_1280.jpg'
const BotswanaFoodLawsSection: React.FC = () => {
  return (
    <section id="botswana-laws" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
         
          <h2 className={styles.title}>Botswana Food Laws & Regulations</h2>
          <p className={styles.subtitle}>Fully compliant with national legal requirements</p>
        </div>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <ul className={styles.lawList}>
              <li>Botswana Food Control Act (1993) and its amendments</li>
              <li>Meat and Meat Products Regulations</li>
              <li>Public Health Act – Food Hygiene Requirements</li>
              <li>Animal Diseases Act and Veterinary Regulations</li>
              <li>Standards Act – Botswana Bureau of Standards (BOBS)</li>
              <li>Export Control Regulations for meat and meat products</li>
              <li>Labelling and Advertising Regulations</li>
              <li> traceability and Record-Keeping Requirements</li>
            </ul>
            <p className={styles.note}>
              All our processes are designed to exceed the minimum requirements set by the Ministry of Agriculture and the Ministry of Health.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <img 
              src={Laws}
              alt="Botswana government food safety regulations compliance"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotswanaFoodLawsSection;