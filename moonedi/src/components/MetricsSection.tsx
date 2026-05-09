import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './MetricsSection.module.css';

interface Metric {
  end: number;
  label: string;
  suffix?: string;
  decimals?: number;
}

const metrics: Metric[] = [
  { end: 1768, label: 'Total Pork Production', suffix: ' tonnes', decimals: 0 },
  { end: 3200, label: 'Local Customers', suffix: '+', decimals: 0 },
  { end: 180, label: 'International Customers', suffix: '+', decimals: 0 },
  { end: 4.2, label: 'Expected Contribution to National GDP via Exports', suffix: '%', decimals: 1 },
];

const AnimatedNumber: React.FC<{
  value: number;
  decimals?: number;
  suffix?: string;
  delay?: number;
}> = ({ value, decimals = 0, suffix = '', delay = 0 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(latest);
  });

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(count, value, {
      duration: 2.5,          // adjust timing
      ease: 'easeOut',
      delay,
    });

    return controls.stop;     // cleanup
  }, [inView, value, delay]);

  return (
    <motion.h3 className={styles.number} ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.h3>
  );
};

const MetricsSection: React.FC = () => {
  return (
    <section className={styles.metrics}>
      <div className={styles.container}>
        {metrics.map((metric, index) => (
          <div key={index} className={styles.metricItem}>
            <AnimatedNumber
              value={metric.end}
              decimals={metric.decimals}
              suffix={metric.suffix}
              delay={index * 0.25}   // nice stagger
            />
            <p className={styles.label}>{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricsSection;