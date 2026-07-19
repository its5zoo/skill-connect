// ============================================================
// Foundation Section - "Welcome to the Launch of"
// ============================================================
import React, { useRef } from "react";
import { foundationTeam } from "../../data/eventData";
import SpeakerCard from "../SpeakerCard/SpeakerCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./FoundationSection.module.css";

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

const FoundationSection: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(gridRef);

  return (
    <section
      className={styles.section}
      id="foundation"
      aria-label="Quality Thought Future Skills Foundation Launch"
    >
      <div className={styles.container}>
        <p className={styles.welcomeText}>Welcome to the Launch of</p>
        <QTFoundationLogo />

        <div className={styles.speakersGrid} ref={gridRef}>
          {foundationTeam.map((member, idx) => (
            <div
              key={member.id}
              className={styles.cardWrapper}
              style={{ animationDelay: `${idx * 85}ms` }}
            >
              <SpeakerCard speaker={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;



