import React from 'react';

// Import your images (adjust paths to match your folder structure)
import farmImg from '../assets/alexas_fotos-piggy-2782618_1920.jpg';          // Step 1
import lairageImg from '../assets/pig-1.jpg';            // Step 2
import stunningImg from '../assets/pig-2.jpg';          // Step 3
import dehairingImg from '../assets/pig-3.jpg';        // Step 4
import eviscerationImg from '../assets/breeding.jpg';  // Step 5
import inspectionImg from '../assets/pig-one.jpg';      // Step 6
import chillingImg from '../assets/pig-two.jpg';          // Step 7
import deliveryImg from '../assets/parkstonephotography-pig-6953335_1920.jpg';          // Step 8

import styles from './ProcessTimeline.module.css';

interface Step {
  number: string;
  title: string;
  description: string;
  image: string;  // Now uses imported image
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Ethical Farm Sourcing',
    description: 'Pigs raised sustainably in Botswana landscapes. Full traceability from farm to fork. Pre-slaughter health checks and humane transport ensure animal welfare and meat quality.',
    image: farmImg,
  },
  {
    number: '02',
    title: 'Receiving & Lairage',
    description: 'Animals rest in clean, climate-controlled pens. Ante-mortem veterinary inspection and showering minimize stress and maintain hygiene.',
    image: lairageImg,
  },
  {
    number: '03',
    title: 'Humane Stunning & Bleeding',
    description: 'Electrical stunning followed by precise bleeding on hygienic lines. Staff are highly trained to ensure quick, humane processes.',
    image: stunningImg,
  },
  {
    number: '04',
    title: 'Scalding, Dehairing & Singeing',
    description: 'Automated scalding tanks and dehairing machines remove hair cleanly. Singeing and high-pressure washes achieve spotless carcasses.',
    image: dehairingImg,
  },
  {
    number: '05',
    title: 'Evisceration & Dressing',
    description: 'Overhead rails and stainless-steel platforms for efficient, hygienic removal of organs. Continuous sanitation and trained butchers prevent cross-contamination.',
    image: eviscerationImg,
  },
  {
    number: '06',
    title: 'Inspection & Quality Assurance',
    description: 'Rigorous post-mortem checks by qualified veterinarians. Temperature monitoring, metal detection, and lab testing guarantee safety and premium quality.',
    image: inspectionImg,
  },
  {
    number: '07',
    title: 'Chilling & Portioning',
    description: 'Rapid chilling locks in freshness. Precision cutting and trimming in controlled environments by skilled staff.',
    image: chillingImg,
  },
  {
    number: '08',
    title: 'Packaging & Cold-Chain Delivery',
    description: 'Vacuum-sealed packaging with full labeling. Strict cold-chain logistics ensure premium pork arrives fresh to local and international customers.',
    image: deliveryImg,
  },
];

const ProcessTimeline: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Process: From Farm to Premium Pork</h2>
        <p className={styles.subheading}>
          Every step is designed for hygiene, traceability, animal welfare, and exceptional quality — delivered fresh daily.
        </p>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.number}>{step.number}</div>
              <div className={styles.content}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.description}>{step.description}</p>
                <img 
                  src={step.image} 
                  alt={`${step.title} process at Monedi`} 
                  className={styles.image}
                  loading="lazy"  // Improves performance
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;