import React from 'react';
import styles from './PartnersSection.module.css';

const PartnersSection: React.FC = () => {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Partners &amp; Collaborators</h2>
          <p className={styles.subtitle}>
            Working together to advance Botswana’s agricultural transformation and food security
          </p>
        </div>

        <div className={styles.partnersGrid}>
          {/* Moneedi */}
          <div className={styles.partnerCard}>
            <div className={styles.logoBox}>ME</div>
            <h3>Moneedi Enterprises</h3>
            <p>Vertically Integrated Piggery & Pork Processing</p>
            <span className={styles.mainTag}>Lead Project</span>
          </div>

          {/* Government */}
          <div className={styles.partnerCard}>
            <div className={styles.logoBox}>🇧🇼</div>
            <h3>Ministry of Finance</h3>
            <p>Botswana Economic Transformation Programme (BETP)</p>
            <span className={styles.tag}>Strategic Government Partner</span>
          </div>

          {/* Other Partners */}
          <div className={styles.partnerCard}>
            <div className={styles.logoBox}>🐖</div>
            <h3>Ministry of Agriculture</h3>
            <p>Supporting Agricultural Development</p>
          </div>

          <div className={styles.partnerCard}>
            <div className={styles.logoBox}>🏦</div>
            <h3>Botswana Development Corporation</h3>
            <p>Investment &amp; Enterprise Development</p>
          </div>

          <div className={styles.partnerCard}>
            <div className={styles.logoBox}>🌍</div>
            <h3>Local Stakeholders</h3>
            <p>Farmers, Suppliers &amp; Communities</p>
          </div>
        </div>

        {/* Official Confirmation */}
        <div className={styles.confirmation}>
          <div className={styles.confirmationBox}>
            <h4>Official Recognition</h4>
            <p>
              Moneedi Enterprises (Pty) Ltd is officially recognized as a participant in the 
              <strong> Botswana Economic Transformation Programme (BETP)</strong> by the 
              Ministry of Finance (4 February 2026).
            </p>
            <a 
              href="/documents/betp-confirmation.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.downloadBtn}
            >
              Download Confirmation Letter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;