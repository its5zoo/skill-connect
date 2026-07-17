import React from 'react';
import { agendaData, type AgendaType } from '../../data/agendaData';
import styles from './AgendaSection.module.css';

const typeMeta: Record<AgendaType, { label: string; className: string }> = {
  ceremony:     { label: 'Ceremony',     className: styles.typeCeremony },
  keynote:      { label: 'Keynote',      className: styles.typeKeynote },
  panel:        { label: 'Panel',        className: styles.typePanel },
  presentation: { label: 'Presentation', className: styles.typePresentation },
  social:       { label: 'Break',        className: styles.typeSocial },
  awards:       { label: 'Awards',       className: styles.typeAwards },
  closing:      { label: 'Closing',      className: styles.typeClosing },
};

const AgendaSection: React.FC = () => (
  <section className={styles.section} id="agenda" aria-label="Event Agenda">
    <div className={styles.container}>

      {/* ── Header ── */}
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

      {/* ── Timeline ── */}
      <div className={styles.timeline}>
        {agendaData.map((item, index) => {
          const meta = typeMeta[item.type];
          const isLast = index === agendaData.length - 1;
          return (
            <div
              key={item.id}
              className={`${styles.timelineItem} ${item.type === 'closing' ? styles.closingItem : ''}`}
            >
              {/* Time */}
              <div className={styles.timeCol}>
                <span className={styles.time}>{item.time}</span>
              </div>

              {/* Connector */}
              <div className={styles.connector}>
                <div className={`${styles.dot} ${meta.className}`} />
                {!isLast && <div className={styles.line} />}
              </div>

              {/* Content Card */}
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

    </div>
  </section>
);

export default AgendaSection;
