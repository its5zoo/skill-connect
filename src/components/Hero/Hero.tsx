// ============================================================
// Hero Section — Centered Editorial Layout
// Top: Title & Tagline & Divider
// Center: Sponsor Logos Row
// Bottom: Event Ticket Pill (Date, Venue, and CTA)
// ============================================================
import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { eventDetails } from '../../data/eventData';

// Premium Outlined Minimalist SVG Icons
const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
  </svg>
);

const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(styles.animateIn);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(el);

    if (window.location.hash === '#register') {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero} id="hero" aria-label="Event Banner" ref={heroRef}>
      <div className={styles.bgShape1} aria-hidden="true" />
      <div className={styles.bgShape2} aria-hidden="true" />
      <div className={styles.bgShape3} aria-hidden="true" />
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.titleStack} data-animate data-delay="0">
            <div className={styles.mainTitleWrapper}>
              <span className={styles.theTag}>THE</span>
              <h1 className={styles.mainTitle}>FUTURE SKILLS</h1>
            </div>
            <h2 className={styles.mainTitleTeal}>SUMMIT &amp; AWARDS</h2>
          </div>

          <div className={styles.taglineRow} data-animate data-delay="1">
            <p className={styles.tagline}>
              Empowering Tomorrow's Leaders<br />with the Skills of the Future
            </p>
          </div>
        </div>

        <div className={styles.sponsorsBar} data-animate data-delay="2">
          <div className={styles.sponsorBlock}>

            <div className={styles.logoItem}>
              <img src="/logos/brics_logo.webp" alt="BRICS Culture Media Forum" className={styles.sponsorLogo} />
            </div>
          </div>

          <div className={styles.sponsorBlockQT}>
            <div className={styles.logoItem}>
              <img src="/logos/qt_logo.webp" alt="Quality Thought" className={styles.sponsorLogoQT} />
            </div>
          </div>

          <div className={styles.sponsorBlock}>
            <div className={styles.logoItem}>
              <img src="/logos/ikon_logo.webp" alt="IKON" className={styles.sponsorLogo} />
            </div>
          </div>

          <div className={styles.sponsorBlock}>
            <div className={styles.logoItem}>
              <img src="/logos/vallas_logo.webp" alt="Vallas Technology" className={styles.sponsorLogo} />
            </div>
          </div>
        </div>

        <div className={styles.bottomPillContainer} data-animate data-delay="3">
          <div className={styles.bottomPill}>
            <div className={styles.pillSection}>
              <div className={styles.pillIconWrapBlue}>
                <CalendarIcon />
              </div>
              <div className={styles.pillTextGroup}>
                <span className={styles.pillLabel}>{eventDetails.day}</span>
                <span className={styles.pillValue}>{eventDetails.date}</span>
              </div>
            </div>

            <span className={styles.pillDivider} />

            <div className={styles.pillSection}>
              <div className={styles.pillIconWrapPink}>
                <LocationIcon />
              </div>
              <div className={styles.pillTextGroup}>
                <span className={styles.pillValue}>{eventDetails.venue}</span>
                <span className={styles.pillLabel}>{eventDetails.city}</span>
              </div>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1oYj_0hxg_1BejlxJWkKjyrAajwh9s5k4zZNtUKRY0-zvQw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pillCta}
              aria-label="Register for the Future Skills Summit"
            >
              <span>REGISTER NOW</span>
              <span className={styles.ctaArrowCircle}>
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
