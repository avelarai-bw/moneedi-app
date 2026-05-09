// EuropeExportsSection.tsx
import React from 'react';
import styles from './EuropeExportsSection.module.css';
import Europe from '../assets/papazachariasa-ship-5231205_1280.jpg'
const EuropeExportsSection: React.FC = () => {
  return (
    <section id="europe-customers" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          
          <h2 className={styles.title}>Europe Exports</h2>
          <p className={styles.subtitle}>Meeting strict EU standards with traceable Botswana pork</p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img 
              src={Europe}
              alt="Moneedi pork exported to Europe"
              className={styles.image}
            />
          </div>

          <div className={styles.textContent}>
            <h3>Serving European Markets:</h3>
            <ul className={styles.customerList}>
              <li>Specialty meat importers</li>
              <li>High-end restaurants and delicatessens</li>
              <li>Food processing companies</li>
              <li>Retail chains seeking premium African pork</li>
            </ul>

            <div className={styles.benefit}>
              <strong>National Impact:</strong> Earning foreign currency, showcasing Botswana as a reliable 
              producer of premium quality meat on the global stage.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EuropeExportsSection;