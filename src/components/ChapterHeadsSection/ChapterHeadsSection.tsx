// ============================================================
// Chapter Heads Section — Grouped Layout with Titles and Logos
// ============================================================
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import type { Speaker } from "../../types";
import { chapterHeadGroups } from "../../data/eventData";
import SpeakerCard from "../SpeakerCard/SpeakerCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./ChapterHeadsSection.module.css";

const QTFoundationLogo: React.FC = () => (
  <div className={styles.qtFoundationLogo}>
    <img
      src="/logos/qt_logo.webp"
      alt="Quality Thought"
      className={styles.qtLogoImg}
      loading="lazy"
      decoding="async"
    />
    <div className={styles.qtLogoText}>
      <span className={styles.qtLogoSub}>Future Skills Foundation</span>
    </div>
  </div>
);

interface ChapterGroupBlockProps {
  group: { id: string; speakers: Speaker[] };
  meta: { title: string; description: string };
  isHomePage: boolean;
  showViewAll: boolean;
}

const ChapterGroupBlock: React.FC<ChapterGroupBlockProps> = ({ group, meta, showViewAll }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(gridRef);

  return (
    <div className={styles.groupBlock}>
      
      {/* Group Title with smaller logo */}
      <div className={styles.groupHeader}>
        <div className={styles.groupTitleRow}>
          <div className={styles.groupLogoWrap}>
            <img src="/logos/qt_logo.webp" alt="QT Logo" className={styles.groupLogoImg} />
          </div>
          <h3 className={styles.groupTitle}>{meta.title}</h3>
        </div>
        {meta.description && <p className={styles.groupDescription}>{meta.description}</p>}
        <div className={styles.groupHeaderLine} />
      </div>

      {/* Cards Grid */}
      <div className={styles.speakersGrid} ref={gridRef}>
        {group.speakers.map((head, idx) => (
          <div
            key={head.id}
            className={styles.cardWrapper}
            style={{ animationDelay: `${idx * 85}ms` }}
          >
            <SpeakerCard speaker={head} />
          </div>
        ))}
      </div>

      {/* View All (homepage only) */}
      {showViewAll && (
        <div className={styles.viewMoreContainer}>
          <Link to="/chapter-heads" className={styles.viewMoreBtn}>
            <span>View All Chapter Heads</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      )}

    </div>
  );
};

interface ChapterHeadsSectionProps {
  isHomePage?: boolean;
}

const ChapterHeadsSection: React.FC<ChapterHeadsSectionProps> = ({ isHomePage }) => {
  const displayGroups = isHomePage ? chapterHeadGroups.slice(0, 1) : chapterHeadGroups;

  const groupMetadata: Record<string, { title: string; description: string }> = {
    'ch-group-1': {
      title: 'National Chapters & Partnerships',
      description: 'Leading key initiatives across Delhi, Mumbai, and national partnerships'
    },
    'ch-group-2': {
      title: 'Regional Chapters & Collaborations',
      description: 'Expanding our footprint across Southern India and University integrations'
    },
    'ch-group-3': {
      title: 'Academic & Industry Verticals',
      description: 'Fostering growth in B-Schools, HR, Media, Corporate, and Wellness domains'
    }
  };

  return (
    <section className={styles.section} id="chapter-heads" aria-label="Chapter Heads">
      <div className={styles.container}>
        
        {/* Main Section Header */}
        <div className={styles.mainHeader}>
          <p className={styles.welcomeText}>Welcome to the Chapter Heads</p>
          <QTFoundationLogo />
        </div>

        {/* Groups */}
        {displayGroups.map((group, index) => {
          const meta = groupMetadata[group.id] || { title: `Chapter Group ${index + 1}`, description: '' };
          return (
            <ChapterGroupBlock
              key={group.id}
              group={group}
              meta={meta}
              isHomePage={!!isHomePage}
              showViewAll={!!isHomePage && index === 0}
            />
          );
        })}

      </div>
    </section>
  );
};

export default ChapterHeadsSection;
