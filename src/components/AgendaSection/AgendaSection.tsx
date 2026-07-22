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

const MouIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m11 17 2 2 5-5" />
    <path d="m14 14 2.5 2.5" />
    <path d="M8 14h.01" />
    <path d="M16 8h.01" />
    <path d="M20.8 13.5a1.8 1.8 0 0 0-2.3-2.3l-2.5 2.5-3.5-3.5a1.8 1.8 0 0 0-2.5 2.5l3.5 3.5-2.5 2.5a1.8 1.8 0 0 0 2.5 2.5l2.5-2.5 3.5 3.5a1.8 1.8 0 0 0 2.5-2.5l-3.5-3.5Z" />
  </svg>
);

const BookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const OathIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

const LunchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
    <path d="M6 2v4M10 2v4M14 2v4" />
  </svg>
);

const PresentationIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const AwardsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
    <path d="M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z" />
  </svg>
);

const CulturalIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const ClosingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
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
    case 'a3': // Intro Speech (Krish Chintaluri) - use icon
      return { type: 'icon', component: <SpeakerIcon /> };
    case 'a4': // Keynote Speech (Chief Guest) - use icon
      return { type: 'icon', component: <SpeakerIcon /> };
    case 'a5': // Panel (International Perspective) - group panel photo
      return { type: 'image', path: '/speakers/group_panel.png' };
    case 'a6': // Presentation (Vladimir Kedrinsky)
      return { type: 'image', path: '/speakers/vladimir.webp' };
    case 'a7': // MoUs
      return { type: 'icon', component: <MouIcon /> };
    case 'a8': // Book Launch
      return { type: 'icon', component: <BookIcon /> };
    case 'a9': // Oath Ceremony
      return { type: 'icon', component: <OathIcon /> };
    case 'a10': // Networking Lunch
      return { type: 'icon', component: <LunchIcon /> };
    case 'a11': // Panel (Is India Ready?) - custom uploaded panel photo
      return { type: 'image', path: '/speakers/group_panel_2.jpg' };
    case 'a12': // Presentation (Partners)
      return { type: 'icon', component: <PresentationIcon /> };
    case 'a13': // Indo Japan Connect (Shreya Jaiswal)
      return { type: 'image', path: '/speakers/shreya.webp' };
    case 'a14': // Panel (Disruptions in AI) - group panel photo
      return { type: 'image', path: '/speakers/group_panel.png' };
    case 'a15': // Awards BRICS
      return { type: 'icon', component: <AwardsIcon /> };
    case 'a16': // Cultural Performances
      return { type: 'icon', component: <CulturalIcon /> };
    case 'a17': // Awards QT
      return { type: 'icon', component: <AwardsIcon /> };
    case 'a18': // Vote of Thanks
      return { type: 'icon', component: <ClosingIcon /> };
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
                      <img src={media.path} alt={item.title} className={styles.agendaImg} />
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
