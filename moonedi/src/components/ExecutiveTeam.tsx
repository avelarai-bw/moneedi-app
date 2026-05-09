import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './ExecutiveTeam.module.css';
import CEO from '../assets/Boago (1).jpg'
import CFO from '../assets/Boago (2).jpg'
import GM from '../assets/Boago (3).jpg'
import { Link } from 'react-router-dom';
interface Executive {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

const executives: Executive[] = [
  {
    name: 'Mr Boago Moemedi Kgopo',
    title: 'Chief Executive Officer',
    bio: 'Having worked across sectors like transportation, mining, retail, franchising, and government, he has consistently delivered results that enhance business performance, create employment opportunities, and drive positive social impact. ',
    imageUrl: CEO, // placeholder → replace
  },
  {
    name: 'Mr Kgololo Gareth Siwawa ',
    title: 'Chief Financial Officer',
    bio: 'He is the chief financial officer for Moneedi with vast experience in the industry',
    imageUrl: CFO, // placeholder
  },
  {
    name: 'Frederick Gaopalelwe Ramatlapeng',
    title: 'Chief Marketing Officer',
    bio: 'His career is marked by his ability to foster strategic partnerships and drive business growth in competitive markets. Frederick’s expertise spans multiple facets of the agricultural industry, making him a pivotal figure in advancing sustainable and efficient operational strategies.',
    imageUrl: GM, // placeholder
  }
];

const ExecutiveTeam: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Executive Team</h2>
        <p className={styles.subheading}>
          Dedicated leaders guiding Moneedi Enterprise toward excellence in sustainable pork production and community impact.
        </p>

        <motion.div 
          className={styles.slider}
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.track}>
            {executives.map((exec, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, x: 60 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                transition={{ delay: index * 0.15, duration: 0.7, ease: 'easeOut' }}
              >
                <div className={styles.imageWrapper}>
                  <img 
                    src={exec.imageUrl} 
                    alt={`${exec.name} - ${exec.title}`} 
                    className={styles.image}
                  />
                </div>
                <h3 className={styles.name}>{exec.name}</h3>
                <p className={styles.title}>{exec.title}</p>
                <p className={styles.bio}>{exec.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className={styles.cta}>
          <Link to="/contact" className={styles.ctaButton}>Meet the Full Team</Link>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTeam;