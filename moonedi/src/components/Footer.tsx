import React from 'react';
import { motion } from 'framer-motion';
import whiteLogo from '../assets/moonedi-logo-w-bg - Copy (1).png'
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp 
} from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        {/* Logo & Tagline */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            {/* Replace with your actual logo image/SVG */}
            <img 
              src={whiteLogo}// or import logo from '@/assets/logo.png'
              alt="Moonedi Enterprise Logo" 
              className={styles.logoImg}
            />
            {/* Fallback text logo if no image */}
            {/* <h3 className={styles.logoText}>Moonedi</h3> */}
          </div>
          <p className={styles.tagline}>
            Feeding the nation sustainably — Premium pork from Botswana's heartland.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Quick Links</h4>
          <ul className={styles.links}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/process">Our Process</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Contact Us</h4>
          <ul className={styles.contactList}>
            <li>
              <FaPhoneAlt className={styles.icon} />
              <span>+267 71 234 5678</span> {/* ← Replace with real number */}
            </li>
            <li>
              <FaWhatsapp className={styles.icon} />
              <span>+267 71 234 5678 (WhatsApp)</span>
            </li>
            <li>
              <FaEnvelope className={styles.icon} />
              <span>info@moneedi.co.bw</span> {/* ← Replace */}
            </li>
            <li>
              <FaMapMarkerAlt className={styles.icon} />
              <span>
                Plot 12345, Industrial Site<br />
                Gaborone, Botswana
              </span> {/* ← Update real address */}
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Follow Us</h4>
          <div className={styles.social}>
            <a href="https://facebook.com/moonedi" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className={styles.socialIcon} />
            </a>
            <a href="https://instagram.com/moonedi_bw" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className={styles.socialIcon} />
            </a>
            <a href="https://twitter.com/moonedi_bw" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className={styles.socialIcon} />
            </a>
            <a href="https://linkedin.com/company/moonedi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Moneedi Enterprise (Pty) Ltd. All rights reserved.</p>
        <p>Built with pride in Botswana 🌍🐖</p>
      </div>
    </motion.footer>
  );
};

export default Footer;