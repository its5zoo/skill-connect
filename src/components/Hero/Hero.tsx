// ============================================================
// Hero Section — All logos top on desktop, title first on mobile
// ============================================================
import React from 'react';
import styles from './Hero.module.css';
import { eventDetails } from '../../data/eventData';

const Hero: React.FC = () => (
  <section className={styles.hero} id="hero" aria-label="Event Banner">

    {/* ── LOGOS ROW (order=1 desktop, order=2 mobile) ── */}
    <div className={styles.sponsorBar}>

      {/* LEFT – BRICS */}
      <div className={styles.sponsorSide}>
        <img src="/logos/brics_logo.png" alt="BRICS Culture Media Forum" className={styles.sponsorImg} />
      </div>

      {/* CENTER-LEFT – Quality Thought */}
      <div className={styles.sponsorCenter}>
        <img src="/logos/qt_logo.png" alt="Quality Thought" className={styles.qtLogoImg} />
      </div>

      {/* CENTER-RIGHT – IKON */}
      <div className={styles.sponsorCenter}>
        <img src="/logos/ikon_logo.png" alt="IKON Foundation" className={styles.ikonBarImg} />
      </div>

      {/* RIGHT – Vallas */}
      <div className={styles.sponsorSide} style={{ alignItems: 'flex-end' }}>
        <img src="/logos/vallas_logo.png" alt="Vallas Technology Solutions" className={styles.vallasBarImg} />
      </div>
    </div>

    {/* ── TITLE (order=2 desktop, order=1 mobile) ── */}
    <div className={styles.titleBlock}>
      <div className={styles.mainTitleWrapper}>
        <span className={styles.theTag}>THE</span>
        <h1 className={styles.mainTitle}>FUTURE SKILLS</h1>
      </div>
      <h2 className={styles.mainTitleTeal}>SUMMIT &amp; AWARDS</h2>
      <p className={styles.subtitle}>
        Empowering Tomorrow's Leaders<br />
        with the Skills of the Future
      </p>
      <div className={styles.subtitleDivider}>
        <span className={styles.divLinePink}></span>
        <span className={styles.divDot}></span>
        <span className={styles.divLineTeal}></span>
      </div>
    </div>

    {/* ── Date / Venue / Register row ── */}
    <div className={styles.infoRow} id="register">
      <div className={styles.infoCell}>
        <div className={`${styles.iconBox} ${styles.iconBoxBlue}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
            <line x1="8" y1="14" x2="8.01" y2="14"></line>
            <line x1="12" y1="14" x2="12.01" y2="14"></line>
            <line x1="16" y1="14" x2="16.01" y2="14"></line>
            <line x1="8" y1="18" x2="8.01" y2="18"></line>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
            <line x1="16" y1="18" x2="16.01" y2="18"></line>
          </svg>
        </div>
        <div>
          <div className={styles.infoDay}>{eventDetails.day}</div>
          <div className={styles.infoDate}>{eventDetails.date}</div>
        </div>
      </div>

      <div className={styles.infoSep} />

      <div className={styles.infoCell}>
        <div className={`${styles.iconBox} ${styles.iconBoxPink}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <div>
          <div className={styles.infoVenue}>{eventDetails.venue}</div>
          <div className={styles.infoCity}>{eventDetails.city}</div>
        </div>
      </div>

      <div className={styles.infoSep} />

      <div className={styles.infoCell}>
        <button
          className={styles.infoRowCta}
          onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Register for the summit"
        >
          <span>REGISTER NOW</span>
          <div className={styles.ctaIconBox}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </button>
      </div>
    </div>

  </section>
);

export default Hero;
