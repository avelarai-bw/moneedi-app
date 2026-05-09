// StatsSection.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './StatsSection.module.css';

interface Stats {
  totalProduced?: number; // in tons
  exported?: number; // in tons
  localCustomers?: number;
  internationalCustomers?: number;
}

const StatsSection: React.FC<Stats> = ({ 
  totalProduced = 500, 
  exported = 200, 
  localCustomers = 1000, 
  internationalCustomers = 50 
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px -100px 0px" });

  const stats = [
    { label: 'Total Tons Produced', value: totalProduced, icon: '🐖', color: '#4CAF50' },
    { label: 'Tons Exported', value: exported, icon: '🌍', color: '#2196F3' },
    { label: 'Local Customers', value: localCustomers, icon: '🏠', color: '#FF9800' },
    { label: 'International Customers', value: internationalCustomers, icon: '✈️', color: '#9C27B0' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  } as const;

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 } 
    },
  } as const;

  const ctaVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { delay: 1.5, duration: 0.5 } 
    },
  } as const;

  return (
    <section ref={containerRef} className={styles.statsSection}>
      <div className={styles.container}>
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={styles.title}
        >
          Bridging the Pork Gap in Botswana
        </motion.h2>
        <p className={styles.subtitle}>
          With declining beef exports and rising local costs, Moneedi is leading the charge in sustainable pork production. 
          From our farms to your table, we're delivering premium, traceable pork to meet growing demand.
        </p>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={styles.statsList}
        >
          {stats.map((stat, index) => (
            <motion.li 
              key={index} 
              variants={itemVariants} 
              className={styles.statItem}
            >
              <div className={styles.icon} style={{ backgroundColor: stat.color }}>
                <span>{stat.icon}</span>
              </div>
              <div className={styles.statContent}>
                <motion.span 
                  className={styles.statValue}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  {stat.value.toLocaleString()}
                </motion.span>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={styles.cta}
        >
          <button className={styles.btnPrimary}>Become a Customer</button>
          <button className={styles.btnSecondary}>Place an Order</button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;