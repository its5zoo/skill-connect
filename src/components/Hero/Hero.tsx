// ============================================================
// Hero Section — Split Editorial Layout
// Left: Typographic title stack + logo strip
// Right: Event ticket card with date/venue/CTA
// ============================================================
import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { eventDetails } from '../../data/eventData';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animateIn to the section so .hero.animateIn [data-animate] triggers
            el.classList.add(styles.animateIn);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero} id="hero" aria-label="Event Banner" ref={heroRef}>

      {/* Decorative background shapes */}
      <div className={styles.bgShape1} aria-hidden="true" />
      <div className={styles.bgShape2} aria-hidden="true" />
      {/* Animated floating orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={styles.heroGrid}>

        {/* ── LEFT: Typographic Title Block ── */}
        <div className={styles.heroLeft}>

          <div className={styles.titleStack} data-animate data-delay="0">
            <div className={styles.mainTitleWrapper}>
              <span className={styles.theTag}>THE</span>
              <h1 className={styles.mainTitle}>FUTURE SKILLS</h1>
            </div>
            <h2 className={styles.mainTitleTeal}>SUMMIT &amp; AWARDS</h2>
          </div>

          {/* Tagline */}
          <div className={styles.taglineRow} data-animate data-delay="1">
            <span className={styles.taglineDash} />
            <p className={styles.tagline}>
              Empowering Tomorrow's Leaders with the Skills of the Future
            </p>
          </div>

          {/* Top Sponsor Logos Strip (Moves up on desktop) */}
          <div className={`${styles.logosStrip} ${styles.topLogos}`} data-animate data-delay="2">
            <div className={styles.logosRow}>
              <div className={styles.logoItem}>
                <img src="/logos/brics_logo.png" alt="BRICS Culture Media Forum" className={styles.stripLogo} />
              </div>
              <div className={styles.logoItem}>
                <img src="/logos/qt_logo.png" alt="Quality Thought" className={styles.stripLogoQT} />
              </div>
            </div>
          </div>

          {/* Bottom Sponsor Logos Strip */}
          <div className={`${styles.logosStrip} ${styles.bottomLogos}`} data-animate data-delay="2">
            <div className={styles.logosRow}>
              <div className={styles.logoItem}>
                <img src="/logos/ikon_logo.png" alt="IKON Foundation" className={styles.stripLogo} />
              </div>
              <div className={styles.logoItem}>
                <img src="/logos/vallas_logo.png" alt="Vallas Technology" className={styles.stripLogo} />
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Event Ticket Card ── */}
        <div className={styles.heroRight} data-animate data-delay="3">
          <div className={styles.ticketCard} id="register">

            {/* Shimmer effect layer */}
            <div className={styles.cardShimmer} aria-hidden="true" />

            <div className={styles.ticketRow}>
              <div className={styles.ticketIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className={styles.ticketContent}>
                <span className={styles.ticketLabel}>DATE</span>
                <span className={styles.ticketDay}>{eventDetails.day}</span>
                <span className={styles.ticketDate}>{eventDetails.date}</span>
              </div>
            </div>

            <div className={styles.ticketPerf} aria-hidden="true" />

            <div className={styles.ticketRow}>
              <div className={styles.ticketIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className={styles.ticketContent}>
                <span className={styles.ticketLabel}>VENUE</span>
                <span className={styles.ticketVenueName}>{eventDetails.venue}</span>
                <span className={styles.ticketCity}>{eventDetails.city}</span>
              </div>
            </div>

            <div className={styles.ticketPerf} aria-hidden="true" />

            <div className={styles.ticketRow}>
              <div className={styles.ticketIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className={styles.ticketContent}>
                <span className={styles.ticketLabel}>REGISTER</span>
                <a href={`tel:${eventDetails.phone1}`} className={styles.ticketPhone}>{eventDetails.phone1}</a>
                <a href={`tel:${eventDetails.phone2}`} className={styles.ticketPhone}>{eventDetails.phone2}</a>
              </div>
            </div>

            <button
              className={styles.ticketCta}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Register for the Future Skills Summit"
            >
              <span>REGISTER NOW</span>
              <span className={styles.ctaArrow}>→</span>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
