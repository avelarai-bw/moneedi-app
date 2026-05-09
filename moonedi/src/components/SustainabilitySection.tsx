import React from 'react';
import styles from './SustainabilitySection.module.css';
import Sustainability from '../assets/mutinka-pig-214349_1280.jpg'
const SustainabilitySection: React.FC = () => {
  return (
    <section id="sustainability" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.step}>04</div>
          <h2 className={styles.title}>Sustainability Practices</h2>
          <p className={styles.subtitle}>Responsible production for a better tomorrow</p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img 
              src={Sustainability}
              alt="Moneedi sustainable farming and environmental practices"
              className={styles.image}
            />
          </div>

          <div className={styles.textContent}>
            <ul className={styles.sustainabilityList}>
              <li>Environmentally controlled pig housing with waste management systems</li>
              <li>Water recycling and conservation practices in processing</li>
              <li>Reduction of energy consumption through modern efficient equipment</li>
              <li>Responsible manure management and biogas potential exploration</li>
              <li>Support for local farmers using sustainable feed practices</li>
              <li>Minimizing plastic usage with recyclable packaging</li>
              <li>Regular environmental audits and continuous improvement</li>
            </ul>
            <p className={styles.note}>
              We are committed to reducing our environmental footprint while maintaining premium quality and supporting Botswana’s green economy goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;