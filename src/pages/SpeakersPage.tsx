// ============================================================
// SpeakersPage.tsx — Standalone Speakers page with grouped sections
// ============================================================
import React, { useRef } from 'react';
import PageLayout from './PageLayout';
import { speakerGroups, foundationTeam } from '../data/eventData';
import SpeakerCard from '../components/SpeakerCard/SpeakerCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './SpeakersPage.module.css';
import type { SpeakerGroup } from '../types';

interface GroupBlockProps {
  group: SpeakerGroup;
  index: number;
  tag?: string;
}

const GroupBlock: React.FC<GroupBlockProps> = ({ group, index, tag = 'EMINENT SPEAKERS' }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(gridRef);

  const bgClass = index % 2 === 0 ? styles.groupCream : styles.groupWhite;

  return (
    <section className={`${styles.groupSection} ${bgClass}`} id={group.id}>
      <div className={styles.container}>
        <div className={styles.groupHeader}>
          <span className={styles.sectionTag}>{tag}</span>
          <h2 className={styles.groupHeading}>{group.title}</h2>
          {group.subtitle && (
            <p className={styles.groupSubtitle}>{group.subtitle}</p>
          )}
        </div>
        <div className={styles.cardsGrid} ref={gridRef}>
          {group.speakers.map((speaker, idx) => (
            <div key={speaker.id} className={styles.cardWrapper} style={{ animationDelay: `${idx * 85}ms` }}>
              <SpeakerCard
                speaker={speaker}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SpeakersPage: React.FC = () => {
  // Build the QT Foundation as a SpeakerGroup
  const qtFoundationGroup: SpeakerGroup = {
    id: 'qt-foundation-group',
    title: 'Quality Thought Foundation',
    subtitle: "The visionary core team behind India's leading skilling & professional development platform",

    speakers: foundationTeam,
  };

  return (
    <PageLayout>
      {/* ── Banner ── */}
      <div className={styles.headerBanner}>
        <div className={styles.headerContainer}>
          <h2 className={styles.bannerTitle}>Speakers</h2>
        </div>
      </div>

      {/* Render all 6 speaker groups */}
      {speakerGroups.map((group, index) => (
        <GroupBlock key={group.id} group={group} index={index} />
      ))}

      {/* QT Foundation Team — Group 7 */}
      <GroupBlock
        group={qtFoundationGroup}
        index={speakerGroups.length}
        tag="QT FOUNDATION"
      />
    </PageLayout>
  );
};

export default SpeakersPage;
