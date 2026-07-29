// ============================================================
// GuestsSection.tsx — Dedicated Honored Guests Section
// ============================================================

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { guestsData } from '../../data/guestsData';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './GuestsSection.module.css';

interface GuestsSectionProps {
  isHomePage?: boolean;
  initialCount?: number;
}

const GuestsSection: React.FC<GuestsSectionProps> = ({ isHomePage = false, initialCount = 5 }) => {
  const navigate = useNavigate();
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(gridRef);

  const displayedGuests = isHomePage ? guestsData.slice(0, initialCount) : guestsData;

  return (
    <section id="guests" className={`${styles.section} ${styles.sectionCream}`}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <span className={styles.sectionTag}>HONORED GUESTS</span>
            <h2 className={styles.sectionTitle}>
              GUESTS
            </h2>
            <p className={styles.sectionSubtitle}>
              Eminent ministers, police commissioners &amp; international leaders gracing Skill Connect 2026
            </p>
          </div>
        </div>

        {/* Guests Grid */}
        <div className={styles.guestsGrid} ref={gridRef}>
          {displayedGuests.map((guest, idx) => (
            <div
              key={guest.id}
              className={styles.cardWrapper}
              style={{ animationDelay: `${idx * 85}ms` }}
            >
              <SpeakerCard
                speaker={{
                  id: guest.id,
                  name: guest.name,
                  title: guest.title,
                  organization: guest.organization || '',
                  cardColor: (['pink', 'yellow', 'teal'].includes(guest.cardColor || '') ? guest.cardColor : 'teal') as 'pink' | 'yellow' | 'teal',
                  image: guest.image,
                }}
              />
            </div>
          ))}
        </div>

        {/* View All Guests Button (On Home Page) */}
        {isHomePage && (
          <div className={styles.viewMoreContainer}>
            <button
              onClick={() => navigate('/guests')}
              className={styles.viewMoreBtn}
              aria-label="View all guests"
            >
              <span>View All Guests</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GuestsSection;
