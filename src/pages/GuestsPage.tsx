// ============================================================
// GuestsPage.tsx — Standalone Guests page with grouped sections
// ============================================================
import React, { useRef } from 'react';
import PageLayout from './PageLayout';
import { guestGroups } from '../data/guestsData';
import SpeakerCard from '../components/SpeakerCard/SpeakerCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './GuestsPage.module.css';

interface GroupBlockProps {
  group: typeof guestGroups[0];
  index: number;
}

const GroupBlock: React.FC<GroupBlockProps> = ({ group, index }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(gridRef);

  const bgClass = index % 2 === 0 ? styles.groupCream : styles.groupWhite;

  return (
    <section className={`${styles.groupSection} ${bgClass}`} id={group.id}>
      <div className={styles.container}>
        <div className={styles.groupHeader} data-reveal>
          <span className={styles.sectionTag}>HONORED GUESTS</span>
          <h2 className={styles.groupHeading}>{group.heading}</h2>
          <p className={styles.groupSubtitle}>{group.subtitle}</p>
        </div>
        <div className={styles.cardsGrid} ref={gridRef}>
          {group.guests.map((guest, idx) => (
            <div key={guest.id} className={styles.cardWrapper} style={{ animationDelay: `${idx * 85}ms` }}>
              <SpeakerCard
                speaker={{
                  id: guest.id,
                  name: guest.name,
                  title: guest.title,
                  organization: guest.organization || '',
                  cardColor: (guest.cardColor as 'pink' | 'yellow' | 'teal') || 'teal',
                  image: guest.image,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GuestsPage: React.FC = () => {
  return (
    <PageLayout>
      {/* ── Dedicated Page Gold-Sepia Full-Width Rectangular Banner ── */}
      <div className={styles.headerBanner}>
        <div className={styles.headerContainer}>
          <h2 className={styles.bannerTitle}>Honored Guests</h2>
        </div>
      </div>

      {/* Render all guest groups */}
      {guestGroups.map((group, index) => (
        <GroupBlock key={group.id} group={group} index={index} />
      ))}
    </PageLayout>
  );
};

export default GuestsPage;
