// ============================================================
// Speakers Section — Editorial layout with alternating backgrounds
// ============================================================
import React, { useRef } from 'react';
import type { SpeakerGroup } from '../../types';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './SpeakersSection.module.css';

interface SpeakersSectionProps {
  group: SpeakerGroup;
  groupIndex: number;
}

const groupTitles: Record<number, { line1: string; line2?: string }> = {
  0: { line1: 'Distinguished', line2: 'Speakers' },
  1: { line1: 'Industry &', line2: 'Academic Leaders' },
  2: { line1: 'Technology &', line2: 'Innovation Leaders' },
};

const groupSubtitles: Record<number, string> = {
  0: 'Global visionaries shaping the future of skills and innovation',
  1: 'Eminent personalities from education, industry and government',
  2: 'Pioneers driving growth in technology and entrepreneurship',
};


const SpeakersSection: React.FC<SpeakersSectionProps> = ({ group, groupIndex }) => {
  const titleData = groupTitles[groupIndex];
  const subtitle  = groupSubtitles[groupIndex];
  const bgClass   = groupIndex % 2 === 0 ? styles.sectionCream : styles.sectionWhite;

  // Attach IntersectionObserver to the grid — reveals children as they scroll in
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(gridRef);

  return (
    <section
      className={`${styles.section} ${bgClass}`}
      id={`speakers-group-${groupIndex + 1}`}
      aria-label={`${titleData.line1} ${titleData.line2 ?? ''}`}
    >
      <div className={styles.container}>
        {/* ── Header ── */}
        <div className={styles.header} data-reveal>
          <div className={styles.headerContent}>
            <span className={styles.sectionTag}>Speakers</span>
            <h2 className={styles.sectionTitle}>
              {titleData.line1}{' '}{titleData.line2 ?? ''}
            </h2>
            <p className={styles.sectionSubtitle}>{subtitle}</p>
          </div>
          <div className={styles.headerAccent} aria-hidden="true" />
        </div>

        {/* ── Speaker Cards ── */}
        <div className={styles.speakersGrid} ref={gridRef}>
          {group.speakers.map((speaker, idx) => (
            <div
              key={speaker.id}
              className={styles.cardWrapper}
              style={{ animationDelay: `${idx * 85}ms` }}
            >
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;



