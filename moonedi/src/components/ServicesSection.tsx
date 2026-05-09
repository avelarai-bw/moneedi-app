import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  FaTruck, 
  FaCut, 
  FaHotdog,       // ← Changed from FaSausage (use this or import GiSausage from 'react-icons/gi')
  FaGlobe, 
  FaBoxOpen, 
  FaShoppingCart 
} from 'react-icons/fa';
import styles from './ServicesSection.module.css';

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: FaTruck,
    title: 'Fresh Pork Supplies',
    description: 'Reliable supply of premium fresh pork cuts — loins, shoulders, ribs, bellies, and more — delivered consistently to butcheries, hotels, restaurants, and retailers across Botswana.',
  },
  {
    icon: FaCut,
    title: 'Mince Production',
    description: 'High-quality pork mince produced daily in hygienic facilities. Available in various lean-to-fat ratios (e.g., 80/20, 90/10) for sausages, patties, meatballs, and everyday cooking needs.',
  },
  {
    icon: FaHotdog,  // ← Fixed icon
    title: 'Sausage Production',
    description: 'Artisanal sausages crafted with premium pork, natural casings, and Botswana-inspired seasonings. Fresh and smoked varieties — boerewors-style, breakfast links, chorizo, and custom flavors.',
  },
  {
    icon: FaGlobe,
    title: 'Exports & International Supply',
    description: 'Traceable, high-standard pork exports to regional and global markets. Compliant with international food safety and sustainability requirements — expanding Botswana’s agricultural footprint.',
  },
  {
    icon: FaBoxOpen,
    title: 'Value-Added & Processed Products',
    description: 'Ready-to-cook items like marinated cuts, portioned packs, smoked products, and custom processing for foodservice clients — saving time while maintaining premium quality.',
  },
  {
    icon: FaShoppingCart,
    title: 'Wholesale & Retail Partnerships',
    description: 'Flexible supply solutions for supermarkets, caterers, institutions, and small businesses — competitive pricing, reliable delivery, and dedicated support for local economic growth.',
  },
];

// Typed variants properly to fix TS error
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.7,
      ease: 'easeOut' as const,  // helps TS narrow the type
    },
  }),
} as const;  // 'as const' improves inference

const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Services</h2>
        <p className={styles.subheading}>
          Moneedi Enterprise delivers premium pork products and tailored solutions — from fresh supplies to value-added processing and exports — all rooted in quality, traceability, and sustainability.
        </p>

        <div className={styles.grid} ref={ref}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={index}  // passes the index as custom prop
            >
              <div className={styles.iconWrapper}>
                <service.icon className={styles.icon} />
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Need custom volumes, specifications, or partnership details?</p>
          <Link to="/contact" className={styles.ctaButton}>Contact Us Today</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;