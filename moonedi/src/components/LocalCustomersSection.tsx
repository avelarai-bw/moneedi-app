// LocalCustomersSection.tsx
import React from 'react';
import styles from './LocalCustomersSection.module.css';
import Local from '../assets/jsbaw7160-mutton-1427091_1280.jpg'
const LocalCustomersSection: React.FC = () => {
  return (
    <section id="local-customers" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          
          <h2 className={styles.title}>Local Customers – Botswana</h2>
          <p className={styles.subtitle}>Fresh pork delivered daily across Botswana</p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img 
              src={Local}
              alt="Moneedi pork in Botswana supermarkets and butcheries"
              className={styles.image}
            />
          </div>

          <div className={styles.textContent}>
            <h3>Who We Serve Locally:</h3>
            <ul className={styles.customerList}>
              <li>Supermarkets and Hypermarkets</li>
              <li>Butcheries and Meat Shops</li>
              <li>Hotels and Lodges</li>
              <li>Restaurants and Fast Food Outlets</li>
              <li>Institutions (Schools, Hospitals, Mines)</li>
              <li>Individual Households via selected retailers</li>
            </ul>

            <div className={styles.benefit}>
              <strong>Benefit to Botswana:</strong> Supporting local jobs, reducing import dependency, 
              and ensuring fresh, high-quality protein is available nationwide.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalCustomersSection;