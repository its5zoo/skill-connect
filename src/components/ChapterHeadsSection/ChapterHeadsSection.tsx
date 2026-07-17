// ============================================================
// Chapter Heads Section (image 5)
// ============================================================
import React from 'react';
import type { Speaker } from '../../types';
import { chapterHeadGroups } from '../../data/eventData';
import SpeakerCard from '../SpeakerCard/SpeakerCard';

import styles from './ChapterHeadsSection.module.css';

// QT Foundation Logo using generated image
const QTFoundationLogo: React.FC = () => (
  <div className={styles.qtFoundationLogo}>
    <img
      src="/logos/qt_logo.png"
      alt="Quality Thought Future Skills Foundation"
      className={styles.qtLogoImg}
    />
    <div className={styles.qtLogoText}>
      <span className={styles.qtLogoSub}>Future Skills Foundation</span>
    </div>
  </div>
);

// ── Per-group component with its OWN observer ──────────────────
interface GroupSectionProps {
  id: string;
  speakers: Speaker[];
  showHeader?: boolean;
}

const ChapterGroupSection: React.FC<GroupSectionProps> = ({ id, speakers, showHeader }) => {
  return (
    <section
      className={styles.section}
      id={`chapter-heads-${id}`}
      aria-label="Chapter Heads"
    >
      <div className={styles.container}>
        {showHeader && (
          <>
            <p className={styles.welcomeText}>Welcome to the Chapter Heads</p>
            <QTFoundationLogo />
          </>
        )}

        <div className={styles.speakersGrid}>
          {speakers.map((head, idx) => (
            <div
              key={head.id}
              className={styles.cardWrapper}
            >
              <SpeakerCard
                speaker={head}
                animationDelay={`${idx * 110}ms`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Main export ────────────────────────────────────────────────
const ChapterHeadsSection: React.FC = () => (
  <>
    {chapterHeadGroups.map((group) => (
      <ChapterGroupSection
        key={group.id}
        id={group.id}
        speakers={group.speakers}
        showHeader={true}
      />
    ))}
  </>
);

export default ChapterHeadsSection;
