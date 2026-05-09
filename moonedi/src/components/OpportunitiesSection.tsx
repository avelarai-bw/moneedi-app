import React from 'react';
import styles from './OpportunitiesSection.module.css';
import { Link } from 'react-router-dom';

interface Opportunity {
  title: string;
  description: string;
  highlight: string; // bold stat or key phrase
}

const opportunities: Opportunity[] = [
  {
    title: 'Direct Employment for Batswana',
    description: 'Monedi prioritizes hiring and training local talent across our farm, abattoir, processing, logistics, and admin teams — creating stable, skilled jobs right here in Botswana.',
    highlight: 'Building careers in sustainable agriculture',
  },
  {
    title: 'Skills Development & Training',
    description: 'We invest in ongoing training programs for staff and young Batswana — from animal husbandry and food safety to butchery techniques and quality assurance — empowering our people for long-term success.',
    highlight: 'Equipping the next generation',
  },
  {
    title: 'B2B Partnerships with Local Farmers',
    description: 'We source pigs and feed from Botswana farmers and suppliers whenever possible, strengthening the local pork value chain and providing reliable markets for citizen-owned businesses.',
    highlight: 'Supporting Batswana entrepreneurs',
  },
  {
    title: 'Tender & Supply Opportunities',
    description: 'Monedi opens tenders and supplier slots for local SMMEs — transport, packaging, maintenance, cleaning services, and more — in line with Botswana’s citizen economic empowerment goals.',
    highlight: 'Inclusive procurement for citizens',
  },
  {
    title: 'Community & Economic Impact',
    description: 'By producing premium, traceable pork sustainably, we contribute to national food security, reduce import reliance, and circulate wealth within Botswana — feeding families and growing communities together.',
    highlight: '"Feeding the nation sustainably" — for all Batswana',
  },
];

const OpportunitiesSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Creating Opportunities for Batswana</h2>
        <p className={styles.subheading}>
          At Moneedi Enterprise, we don't just produce premium pork — we build a stronger, more inclusive Botswana. Through jobs, partnerships, training, and fair tenders, we're committed to empowering citizens and growing our communities together.
        </p>

        <div className={styles.grid}>
          {opportunities.map((opp, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.title}>{opp.title}</h3>
              <p className={styles.highlight}>{opp.highlight}</p>
              <p className={styles.description}>{opp.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Interested in partnering, supplying, or joining the Moneedi team?</p>
          <Link to="/contact" className={styles.ctaButton}>Get in Touch</Link>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;