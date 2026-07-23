// ============================================================
// Footer — Dark Editorial Design
// ============================================================
import React from 'react';
import { eventDetails } from '../../data/eventData';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer} id="contact" aria-label="Footer">

    {/* ── Gradient divider at top ── */}
    <div className={styles.topDivider} aria-hidden="true" />

    <div className={styles.inner}>

      {/* ── CTA Block ── */}
      <div className={styles.ctaBlock}>
        <span className={styles.ctaOverline}>Don't miss out</span>
        <h2 className={styles.ctaHeading}>Secure Your Seat</h2>
        <p className={styles.ctaSub}>
          Join 500+ leaders, innovators &amp; policymakers shaping<br />
          the future of skills across industries.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd1oYj_0hxg_1BejlxJWkKjyrAajwh9s5k4zZNtUKRY0-zvQw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBtn}
          aria-label="Register for the Future Skills Summit"
        >
          REGISTER NOW
          <span className={styles.ctaBtnArrow}>→</span>
        </a>
      </div>

      {/* ── Info Columns ── */}
      <div className={styles.infoColumns}>
        <div className={styles.infoCol}>
          <span className={styles.colLabel}>Date</span>
          <span className={styles.colValue}>{eventDetails.day}</span>
          <span className={styles.colSub}>{eventDetails.date}</span>
        </div>

        <div className={styles.colDivider} />

        <div className={styles.infoCol}>
          <span className={styles.colLabel}>Venue</span>
          <span className={styles.colValue}>{eventDetails.venue}</span>
          <span className={styles.colSub}>{eventDetails.city}</span>
        </div>

        <div className={styles.colDivider} />

        <div className={styles.infoCol}>
          <span className={styles.colLabel}>Register</span>
          <a href={`tel:${eventDetails.phone1}`} className={styles.colPhone}>{eventDetails.phone1}</a>
          <a href={`tel:${eventDetails.phone2}`} className={styles.colPhone}>{eventDetails.phone2}</a>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomGradient} aria-hidden="true" />
        <p className={styles.copyright}>
          © 2026 Quality Thought · Future Skills Summit &amp; Awards · All Rights Reserved
        </p>
      </div>

    </div>
  </footer>
);

export default Footer;
