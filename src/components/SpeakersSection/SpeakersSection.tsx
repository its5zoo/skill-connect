// ============================================================
// Speakers Section — Editorial layout with alternating backgrounds
// ============================================================
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import type { SpeakerGroup } from '../../types';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './SpeakersSection.module.css';

interface SpeakersSectionProps {
  group: SpeakerGroup;
  groupIndex: number;
  showViewAll?: boolean;
}

const groupTitles: Record<number, { line1: string; line2?: string }> = {
  0: { line1: 'Distinguished', line2: 'Speakers' },
  1: { line1: 'Industry &', line2: 'Academic Leaders' },
  2: { line1: 'Technology &', line2: 'Innovation Leaders' },
  3: { line1: 'Quality Thought', line2: 'Foundation' },
  4: { line1: 'Chapter Heads', line2: 'Global Leaders (I)' },
  5: { line1: 'Chapter Heads', line2: 'Global Leaders (II)' },
  6: { line1: 'Chapter Heads', line2: 'Global Leaders (III)' },
};

const groupSubtitles: Record<number, string> = {
  0: 'Global visionaries shaping the future of skills and innovation',
  1: 'Eminent personalities from education, industry and government',
  2: 'Pioneers driving growth in technology and entrepreneurship',
  3: 'Visionaries driving change through the Future Skills Foundation',
  4: 'Eminent leaders representing regional and thematic chapters',
  5: 'Eminent leaders representing regional and thematic chapters',
  6: 'Eminent leaders representing regional and thematic chapters',
};


const SpeakersSection: React.FC<SpeakersSectionProps> = ({ group, groupIndex, showViewAll }) => {
  const titleData = groupTitles[groupIndex] || { line1: 'Featured', line2: 'Speakers' };
  const subtitle  = groupSubtitles[groupIndex] || 'Eminent leaders and visionaries';
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

        {showViewAll && (
          <div className={styles.viewMoreContainer}>
            <Link to="/speakers" className={styles.viewMoreBtn}>
              <span>View All Speakers</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SpeakersSection;



