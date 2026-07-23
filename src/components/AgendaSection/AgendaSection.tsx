import React from 'react';
import { Link } from 'react-router-dom';
import { agendaData, type AgendaType } from '../../data/agendaData';
import styles from './AgendaSection.module.css';

// SVG Icons for different session types


const SpeakerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v4M8 23h8" />
  </svg>
);

const MouIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mouGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <filter id="mouShadow" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="100" height="100" fill="url(#mouGrad)" />

    {/* Decorative background grid/waves */}
    <path d="M-10 80 C 20 60, 40 90, 110 70 L 110 110 L -10 110 Z" fill="rgba(255,255,255,0.06)" />
    <path d="M-10 90 C 30 75, 60 95, 110 85 L 110 110 L -10 110 Z" fill="rgba(255,255,255,0.04)" />

    {/* Document Group */}
    <g filter="url(#mouShadow)">
      {/* Behind sheet (angled slightly) */}
      <rect x="33" y="22" width="34" height="46" rx="2.5" fill="#E2E8F0" transform="rotate(-3 50 45)" />
      {/* Front sheet */}
      <rect x="32" y="24" width="34" height="46" rx="2.5" fill="#FFFFFF" />
    </g>

    {/* Document details (lines of text) */}
    <line x1="38" y1="33" x2="60" y2="33" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="38" y1="40" x2="60" y2="40" stroke="#CBD5E1" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="38" y1="46" x2="52" y2="46" stroke="#CBD5E1" strokeWidth="1.8" strokeLinecap="round" />
    
    {/* Stamp/Badge on document */}
    <circle cx="56" cy="56" r="3.5" fill="url(#goldGrad)" />
    <path d="M54 59 L56 62 L58 59 Z" fill="#D97706" />

    {/* Swiggle Signature */}
    <path d="M38 58 Q 42 56, 44 58 T 48 56" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* Fountain Pen */}
    <path d="M72 18 L51 45 L47 47 L49 43 L70 16 Z" fill="url(#goldGrad)" />
    <path d="M47 47 L44 51 L49 49 Z" fill="#1E293B" />
    <line x1="68" y1="21" x2="71" y2="24" stroke="#FFFFFF" strokeWidth="1" />
  </svg>
);















const DefaultIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const typeMeta: Record<AgendaType, { label: string; className: string }> = {
  ceremony:     { label: 'Ceremony',     className: styles.typeCeremony },
  keynote:      { label: 'Keynote',      className: styles.typeKeynote },
  panel:        { label: 'Panel',        className: styles.typePanel },
  presentation: { label: 'Presentation', className: styles.typePresentation },
  social:       { label: 'Break',        className: styles.typeSocial },
  awards:       { label: 'Awards',       className: styles.typeAwards },
  closing:      { label: 'Closing',      className: styles.typeClosing },
};

const getAgendaMedia = (id: string) => {
  switch (id) {
    case 'a1': // Inauguration
      return { type: 'image', path: '/speakers/inauguration.jpg' };
    case 'a2': // Welcome Speech (Ramana Bupathi)
      return { type: 'image', path: '/speakers/ramana.webp' };
    case 'a3': // Intro Speech (Krish Chintaluri)
      return { type: 'image', path: '/chapter-heads/krish.webp' };
    case 'a4': // Keynote Speech (Chief Guest) - use icon
      return { type: 'icon', component: <SpeakerIcon /> };
    case 'a5': // Panel (International Perspective) - group panel photo
      return { type: 'image', path: '/speakers/group_panel.png' };
    case 'a6': // Presentation (Vladimir Kedrinsky)
      return { type: 'image', path: '/speakers/vladimir.webp' };
    case 'a7': // MoUs
      return { type: 'component', component: <MouIllustration /> };
    case 'a8': // Book Launch
      return { type: 'image', path: '/chapter-heads/pavani.webp' };
    case 'a9': // Oath Ceremony
      return { type: 'image', path: '/speakers/oath_ceremony.png' };
    case 'a10': // Networking Lunch
      return { type: 'image', path: '/speakers/coffee_break.png' };
    case 'a11': // Panel (Is India Ready?) - custom uploaded panel photo
      return { type: 'image', path: '/speakers/group_panel_2.jpg' };
    case 'a12': // Presentation (Partners)
      return { type: 'image', path: '/speakers/partner_presentation.png' };
    case 'a13': // Indo Japan Connect (Shreya Jaiswal)
      return { type: 'image', path: '/speakers/shreya.webp' };
    case 'a14': // Panel (Disruptions in AI) - group panel photo
      return { type: 'image', path: '/speakers/group_panel.png' };
    case 'a15': // Awards BRICS
      return { type: 'image', path: '/speakers/awards_stage.png' };
    case 'a16': // Cultural Performances
      return { type: 'image', path: '/speakers/cultural_performances.png' };
    case 'a17': // Awards QT
      return { type: 'image', path: '/speakers/awards_stage_blue.png' };
    case 'a18': // Vote of Thanks
      return { type: 'image', path: '/speakers/vote_of_thanks.png' };
    default:
      return { type: 'icon', component: <DefaultIcon /> };
  }
};

interface AgendaSectionProps {
  isHomePage?: boolean;
}

const AgendaSection: React.FC<AgendaSectionProps> = ({ isHomePage }) => {
  const displayData = isHomePage ? agendaData.slice(0, 5) : agendaData;

  return (
    <section className={`${styles.section} ${isHomePage ? styles.sectionHome : ''}`} id="agenda" aria-label="Event Agenda">
      {isHomePage ? (
        /* ── Home Page Clean Centered Header ── */
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <h2 className={styles.title}>
                <em>Event</em> Agenda
              </h2>
              <p className={styles.subtitle}>
                A day of insightful discussions, cross-border exchanges &amp; the future of skills
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* ── Dedicated Page Gold-Sepia Full-Width Rectangular Banner ── */
        <div className={styles.headerBanner}>
          <div className={styles.headerContainer}>
            <h2 className={styles.bannerTitle}>
              Agenda
            </h2>
          </div>
        </div>
      )}

      <div className={styles.container}>

        {/* ── Timeline ── */}
        <div className={styles.timeline}>
          {displayData.map((item) => {
            const meta = typeMeta[item.type];
            const media = getAgendaMedia(item.id);
            
            return (
              <div
                key={item.id}
                className={`${styles.timelineItem} ${item.type === 'closing' ? styles.closingItem : ''}`}
              >
                {/* 1. Time Column */}
                <div className={styles.timeCol}>
                  <span className={styles.time}>{item.time}</span>
                </div>

                {/* 2. Media (Image/Icon) Column */}
                <div className={styles.imgCol}>
                  {media.type === 'image' ? (
                    <div className={styles.roundImgContainer}>
                      <img
                        src={media.path}
                        alt={item.title}
                        className={styles.agendaImg}
                        style={
                          item.id === 'a2' || item.id === 'a3' || item.id === 'a8'
                            ? { objectPosition: 'center 15%' }
                            : undefined
                        }
                      />
                    </div>
                  ) : media.type === 'component' ? (
                    <div className={styles.roundImgContainer}>
                      {media.component}
                    </div>
                  ) : (
                    <div className={`${styles.agendaIconCircle} ${meta.className}`}>
                      {media.component}
                    </div>
                  )}
                </div>

                {/* 3. Content Card Column */}
                <div className={`${styles.card} ${meta.className}`}>
                  <span className={`${styles.badge} ${meta.className}`}>{meta.label}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  {item.subtitle && <p className={styles.itemSubtitle}>{item.subtitle}</p>}
                  {item.details && item.details.length > 0 && (
                    <ul className={styles.detailsList}>
                      {item.details.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Agenda Button for Home Page */}
        {isHomePage && (
          <div className={styles.viewMoreContainer}>
            <Link to="/agenda" className={styles.viewMoreBtn}>
              <span>View Full Agenda</span>
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

export default AgendaSection;
