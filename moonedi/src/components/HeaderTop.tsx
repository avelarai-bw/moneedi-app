import styles from './HeaderTop.module.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const HeaderTop = () => {
  return (
    <div className={styles.headerTop}>
      <div className={styles.headerTop__content}>
        <div className={styles.contactInfoLeft}>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>Plot 123, Industrial Area, Gaborone, Botswana</span>
          </div>
          <a href="tel:+2671234567" className={styles.contactItem} aria-label="Call us">
            <FaPhone className={styles.icon} />
            <span>+267 123 4567</span>
          </a>
        </div>
        <span className={styles.tagline}>From Our Farm to Your Table</span>
        <div className={styles.contactInfoRight}>
          <a href="tel:+2679876543" className={styles.contactItem} aria-label="Call us alternate">
            <FaPhone className={styles.icon} />
            <span>+267 987 6543</span>
          </a>
          <a href="mailto:info@moonedi.com" className={styles.contactItem} aria-label="Email us">
            <FaEnvelope className={styles.icon} />
            <span>info@moneedi.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;