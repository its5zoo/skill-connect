// ============================================================
// Chapter Heads Section
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

interface GroupSectionProps {
  id: string;
  speakers: Speaker[];
  showHeader?: boolean;
  showViewAll?: boolean;
}

const ChapterGroupSection: React.FC<GroupSectionProps> = ({ id, speakers, showHeader, showViewAll }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(gridRef);

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

        <div className={styles.speakersGrid} ref={gridRef}>
          {speakers.map((head, idx) => (
            <div
              key={head.id}
              className={styles.cardWrapper}
              style={{ animationDelay: `${idx * 85}ms` }}
            >
              <SpeakerCard speaker={head} />
            </div>
          ))}
        </div>

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
    </section>
  );
};

interface ChapterHeadsSectionProps {
  isHomePage?: boolean;
}

const ChapterHeadsSection: React.FC<ChapterHeadsSectionProps> = ({ isHomePage }) => {
  const displayGroups = isHomePage ? chapterHeadGroups.slice(0, 1) : chapterHeadGroups;

  return (
    <>
      {displayGroups.map((group, index) => (
        <ChapterGroupSection
          key={group.id}
          id={group.id}
          speakers={group.speakers}
          showHeader={index === 0}
          showViewAll={isHomePage && index === 0}
        />
      ))}
    </>
  );
};

export default ChapterHeadsSection;



