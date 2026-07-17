// ============================================================
// Footer Component
// ============================================================
import React from 'react';
import { eventDetails } from '../../data/eventData';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} id="contact" aria-label="Footer">
      <div className={styles.inner}>

        {/* Register CTA */}
        <div className={styles.registerBlock}>
          <span className={styles.registerLabel}>Register Now</span>
          <div className={styles.registerNumbers}>
            <span>{eventDetails.phone1}</span>
            <span className={styles.registerDivider}>/</span>
            <span>{eventDetails.phone2}</span>
          </div>
          <button
            className={styles.registerBtn}
            aria-label="Register for the Future Skills Summit"
          >
            Register for Free
          </button>
        </div>

        {/* Event Summary */}
        <div className={styles.eventSummary}>
          <div className={styles.summaryItem}>
            <span className={styles.summaryIcon} aria-hidden="true">📅</span>
            <div className={styles.summaryText}>
              <span className={styles.summaryLabel}>{eventDetails.day}</span>
              <span className={styles.summaryValue}>{eventDetails.date}</span>
            </div>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryIcon} aria-hidden="true">📍</span>
            <div className={styles.summaryText}>
              <span className={styles.summaryLabel}>Venue</span>
              <span className={styles.summaryValue}>{eventDetails.venue}</span>
              <span className={styles.summaryValueSub}>{eventDetails.city}</span>
            </div>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryIcon} aria-hidden="true">🏆</span>
            <div className={styles.summaryText}>
              <span className={styles.summaryLabel}>Event</span>
              <span className={styles.summaryValue}>Future Skills</span>
              <span className={styles.summaryValueSub}>Summit &amp; Awards</span>
            </div>
          </div>
        </div>

        <p className={styles.copyright}>
          © 2026 Quality Thought — Future Skills Summit &amp; Awards · All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
