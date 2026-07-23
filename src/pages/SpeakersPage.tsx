// ============================================================
// SpeakersPage.tsx — Standalone Speakers page
// ============================================================
import React from 'react';
import PageLayout from './PageLayout';
import SpeakersSection from '../components/SpeakersSection/SpeakersSection';
import { speakerGroups, foundationTeam } from '../data/eventData';
import styles from './SpeakersPage.module.css';

const SpeakersPage: React.FC = () => {
  // Wrap the foundationTeam array in a SpeakerGroup-like object
  const foundationGroup = {
    id: 'foundation-group',
    speakers: foundationTeam,
  };

  return (
    <PageLayout>
      {/* ── Dedicated Page Gold-Sepia Full-Width Rectangular Banner ── */}
      <div className={styles.headerBanner}>
        <div className={styles.headerContainer}>
          <h2 className={styles.bannerTitle}>
            Speakers
          </h2>
        </div>
      </div>

      {/* 1. Distinguished / Industry / Innovation Speakers */}
      {speakerGroups.map((group, index) => (
        <SpeakersSection key={group.id} group={group} groupIndex={index} isDetailPage={true} />
      ))}

      {/* 2. Quality Thought Foundation Team */}
      <SpeakersSection key={foundationGroup.id} group={foundationGroup} groupIndex={3} isDetailPage={true} />
    </PageLayout>
  );
};

export default SpeakersPage;
