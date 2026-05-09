import React from 'react';
import styles from './MissionPurposeVision.module.css';

interface Statement {
  title: string;
  content: string;
}

const statements: Statement[] = [
  {
    title: 'Our Vision',
    content:
      'To become Botswana’s leading premium pork producer, recognized regionally and internationally for sustainable, high-quality, traceable pork that nourishes communities and drives agricultural excellence.',
  },
  {
    title: 'Our Mission',
    content:
      'To sustainably breed, raise, and process pigs into high-quality pork products while fostering rural economic development and cooperatives among the small farmers to produce to feed the abattoir, ensuring food safety, and building long-term value for our stakeholders.',
  },
  {
    title: 'Our Purpose',
    content:
      'Feeding the nation sustainably — building a resilient pork value chain that honors Botswana’s land, empowers our people, promotes responsible farming, and delivers exceptional quality from farm to table.',
  },
];

const MissionPurposeVision: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Who We Are</h2>
        <p className={styles.subheading}>
Moneedi Enterprises (Proprietary) Limited is a fully citizen-owned agribusiness specializing in sustainable piggery farming and pork processing through a modern abattoir facility. 
        </p>

        <div className={styles.grid}>
          {statements.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.content}>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionPurposeVision;