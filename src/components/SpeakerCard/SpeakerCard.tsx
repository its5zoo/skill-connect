// ============================================================
// Speaker Card Component — Clean Editorial Style
// ============================================================
import React from 'react';
import type { Speaker } from '../../types';
import styles from './SpeakerCard.module.css';

interface SpeakerCardProps {
  speaker: Speaker;
  animationDelay?: string;
}

// Generate initials from name
const getInitials = (name: string): string => {
  const parts = name.replace(/^(DR\.|PROF\.|AMB\.|DR)\s+/i, '').split(' ');
  return parts.slice(0, 2).map((p) => p[0]).join('').toUpperCase();
};

// Simple person silhouette SVG
const PersonSilhouette: React.FC<{ color: string }> = ({ color }) => (
  <svg
    className={styles.avatarSilhouette}
    viewBox="0 0 110 145"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <ellipse cx="55" cy="38" rx="24" ry="28" fill={color} />
    <path d="M5 145 C5 90 105 90 105 145" fill={color} />
  </svg>
);

const silhouetteColorMap: Record<Speaker['cardColor'], string> = {
  yellow: 'rgba(0,0,0,0.12)',
  teal:   'rgba(255,255,255,0.25)',
  pink:   'rgba(255,255,255,0.25)',
  gray:   'rgba(255,255,255,0.20)',
};

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, animationDelay }) => {
  const initials = getInitials(speaker.name);
  const silColor = silhouetteColorMap[speaker.cardColor];

  return (
    <article
      className={styles.card}
      style={animationDelay ? { animationDelay } : undefined}
    >
      {/* Photo / placeholder */}
      <div className={`${styles.photoWrapper} ${styles[`photoWrapper--${speaker.cardColor}`]}`}>
        {speaker.image ? (
          <img
            src={speaker.image}
            alt={speaker.name}
            className={styles.speakerPhoto}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={styles.avatarPlaceholder}>
            <PersonSilhouette color={silColor} />
            <span className={styles.avatarInitials}>{initials}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className={styles.info}>
        <p className={styles.name}>{speaker.name}</p>
        <p className={styles.title}>{speaker.title}</p>
        {speaker.organization && (
          <p className={styles.org}>{speaker.organization}</p>
        )}
      </div>
    </article>
  );
};

export default SpeakerCard;
