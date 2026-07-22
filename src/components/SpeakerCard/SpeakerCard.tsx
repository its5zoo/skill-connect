// ============================================================
// Speaker Card Component — Premium Circular Style
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

// Format name into premium Title Case
const formatName = (name: string): string => {
  return name
    .toLowerCase()
    .split(' ')
    .map((word) => {
      if (word.startsWith('dr.')) return 'Dr.' + word.slice(3).toUpperCase();
      if (word.startsWith('prof.')) return 'Prof.' + word.slice(5).toUpperCase();
      if (word.startsWith('amb.')) return 'Amb.' + word.slice(4).toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
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
  teal:   'rgba(0,0,0,0.12)',
  pink:   'rgba(0,0,0,0.12)',
  gray:   'rgba(0,0,0,0.12)',
};

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, animationDelay }) => {
  const initials = getInitials(speaker.name);
  const silColor = silhouetteColorMap[speaker.cardColor];
  const formattedName = formatName(speaker.name);

  return (
    <article
      className={styles.card}
      style={animationDelay ? { animationDelay } : undefined}
    >
      {/* Circular Photo Wrapper */}
      <div className={styles.photoWrapper}>
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

      {/* Info details */}
      <div className={styles.info}>
        <h3 className={styles.name}>{formattedName}</h3>
        <p className={styles.title}>{speaker.title}</p>
        {speaker.organization && (
          <p className={styles.org}>{speaker.organization}</p>
        )}
      </div>
    </article>
  );
};

export default SpeakerCard;
