// ============================================================
// Foundation Section – "Welcome to the Launch of" (image 4)
// ============================================================
import React from 'react';
import { foundationTeam } from '../../data/eventData';
import SpeakerCard from '../SpeakerCard/SpeakerCard';

import styles from './FoundationSection.module.css';

// Quality Thought Foundation Logo using generated image
const QTFoundationLogo: React.FC = () => (
  <div className={styles.qtFoundationLogo}>
    <img
      src="/logos/qt_logo.png"
      alt="Quality Thought"
      className={styles.qtLogoImg}
    />
    <div className={styles.qtLogoText}>
      <span className={styles.qtLogoSub}>Future Skills Foundation</span>
    </div>
  </div>
);

const FoundationSection: React.FC = () => {
  return (
    <section
      className={styles.section}
      id="foundation"
      aria-label="Quality Thought Future Skills Foundation Launch"
    >

      <div className={styles.container}>
        {/* Heading above logo */}
        <p className={styles.welcomeText}>Welcome to the Launch of</p>

        {/* Logo */}
        <QTFoundationLogo />

        {/* Team grid */}
        <div className={styles.speakersGrid}>
          {foundationTeam.map((member, idx) => (
            <div 
              key={member.id}
              className={styles.cardWrapper}
            >
              <SpeakerCard speaker={member} animationDelay={`${idx * 100}ms`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
