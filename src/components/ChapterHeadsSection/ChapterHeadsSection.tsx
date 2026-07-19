// ============================================================
// Chapter Heads Section
// ============================================================
import React, { useRef } from "react";
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
}

const ChapterGroupSection: React.FC<GroupSectionProps> = ({ id, speakers, showHeader }) => {
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
      </div>
    </section>
  );
};

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



