// ============================================================
// Speaker Card Component — Premium Card Refinement (Mockup Match)
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

// Custom crop configuration per speaker to zoom/position them independently
const speakerCropConfig: Record<string, React.CSSProperties> = {
  'dr. jaan nissar lone': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 18%',
  },
  'dr. sergei dvorianov': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 10%', // Shifted further down (from 22% to 10%)
  },
  'vladimir kedrinsky': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: '40% 50%', // Zoomed in and shifted further left (from 54% to 58%)
  },
  'kevin feng': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 10%', // Zoomed in on face
  },
  'krish chintaluri': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 20%', // Center the headshot
  },
  'ramana bhupathi': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 15%', // Zoom in on face and center it
  },
  'dr. pavani kadiyala': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 5%', // Shift down to show top of head
  },
  'geetha murthy': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 5%', // Shift down to show top of head
  },
  'sashank karri': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 15%', // Zoom in on face and center it
  },
  'vijay kumar ks': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 10%', // Zoom in on face and center it
  },
  'shreya jaiswal': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 55%', // Shift down slightly to center her headshot
  },
  'nithin kumar reddy': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 20%', // Zoom in on face
  },
  'inderjeet aidhi': {
    width: '96%',
    height: '96%',
    objectFit: 'contain',
    objectPosition: 'center center',
  },
  'dr. m satya prasad': {
    width: '95%',
    height: '95%',
    objectFit: 'contain',
    objectPosition: 'center center',
  },
  'viswanadh raju': {
    width: '95%',
    height: '95%',
    objectFit: 'contain',
    objectPosition: 'center center',
  },
  'venkata ramana k': {
    width: '95%',
    height: '95%',
    objectFit: 'contain',
    objectPosition: 'center center',
  },
  'surya prakasa rao': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 30%', // Shift up to show chin/mouth
  },
  'amb. dunston pereira': {
    width: '95%',
    height: '95%',
    objectFit: 'contain',
    objectPosition: 'center center',
  },
};

// Default fallback style (100% cover centered to zoom in on faces)
const defaultCropStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center 10%',
};

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, animationDelay }) => {
  const initials = getInitials(speaker.name);
  const formattedName = formatName(speaker.name);
  
  // Fetch custom styles for this speaker, or fall back to default
  const configKey = speaker.name.toLowerCase().trim();
  const cropStyle = speakerCropConfig[configKey] || defaultCropStyle;

  return (
    <article
      className={styles.card}
      style={animationDelay ? { animationDelay } : undefined}
    >
      {/* Premium Circular Photo Wrapper */}
      <div className={styles.photoWrapper}>
        {speaker.image ? (
          <img
            src={speaker.image}
            alt={speaker.name}
            className={styles.speakerPhoto}
            style={cropStyle}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={styles.avatarPlaceholder}>
            <PersonSilhouette color="rgba(0,0,0,0.12)" />
            <span className={styles.avatarInitials}>{initials}</span>
          </div>
        )}
      </div>

      {/* Gold Divider Dash from Mockup */}
      <div className={styles.goldDivider} aria-hidden="true" />

      {/* Info Details */}
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
