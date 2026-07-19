// ============================================================
// Hero Section — Split Editorial Layout
// Left: Typographic title stack + logo strip
// Right: Event ticket card with date/venue/CTA
// ============================================================
import React, { useEffect, useRef } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
            el.classList.add(styles.animateIn);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(el);

    // On page load: if hash is #register, scroll hero section into view
    if (window.location.hash === '#register') {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero} id="hero" aria-label="Event Banner" ref={heroRef}>

      {/* Decorative background shapes */}
      <div className={styles.bgShape1} aria-hidden="true" />
      <div className={styles.bgShape2} aria-hidden="true" />
      <div className={styles.bgShape3} aria-hidden="true" />
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
                <img src="/logos/brics_logo.webp" alt="BRICS Culture Media Forum" className={styles.stripLogo} />
              </div>
              <div className={styles.logoItem}>
                <img src="/logos/qt_logo.webp" alt="Quality Thought" className={styles.stripLogoQT} />
              </div>
            </div>
          </div>

          {/* Bottom Sponsor Logos Strip */}
          <div className={`${styles.logosStrip} ${styles.bottomLogos}`} data-animate data-delay="2">
            <div className={styles.logosRow}>
              <div className={styles.logoItem}>
                <img src="/logos/ikon_logo.webp" alt="IKON Foundation" className={styles.stripLogo} />
              </div>
              <div className={styles.logoItem}>
                <img src="/logos/vallas_logo.webp" alt="Vallas Technology" className={styles.stripLogo} />
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Event Ticket Card ── */}
        <div className={styles.heroRight} data-animate data-delay="3">
          <div className={styles.ticketCard} id="register">

            {/* Shimmer effect layer */}
            <div className={styles.cardShimmer} aria-hidden="true" />

            {/* ─ DATE ─ */}
            <div className={styles.ticketRow}>
              <div className={styles.ticketIconWrap}>
                <CalendarMonthIcon sx={{ fontSize: 20, color: 'var(--color-teal)' }} />
              </div>
              <div className={styles.ticketContent}>
                <span className={styles.ticketLabel}>Date</span>
                <span className={styles.ticketDay}>{eventDetails.day}</span>
                <span className={styles.ticketDate}>{eventDetails.date}</span>
              </div>
            </div>

            <div className={styles.ticketPerf} aria-hidden="true" />

            {/* ─ VENUE ─ */}
            <div className={styles.ticketRow}>
              <div className={styles.ticketIconWrap}>
                <LocationOnIcon sx={{ fontSize: 20, color: 'var(--color-teal)' }} />
              </div>
              <div className={styles.ticketContent}>
                <span className={styles.ticketLabel}>Venue</span>
                <span className={styles.ticketVenueName}>{eventDetails.venue}</span>
                <span className={styles.ticketCity}>{eventDetails.city}</span>
              </div>
            </div>

            <div className={styles.ticketPerf} aria-hidden="true" />

            {/* ─ REGISTER / CONTACT ─ */}
            <div className={styles.ticketRow}>
              <div className={styles.ticketIconWrap}>
                <PhoneIcon sx={{ fontSize: 20, color: 'var(--color-teal)' }} />
              </div>
              <div className={styles.ticketContent}>
                <span className={styles.ticketLabel}>Register via Call</span>
                <div className={styles.phonesGrid}>
                  <a href={`tel:${eventDetails.phone1}`} className={styles.ticketPhone}>
                    <span className={styles.phoneNumber}>{eventDetails.phone1}</span>
                  </a>
                  <a href={`tel:${eventDetails.phone2}`} className={styles.ticketPhone}>
                    <span className={styles.phoneNumber}>{eventDetails.phone2}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.ticketPerf} aria-hidden="true" />

            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className={styles.ticketCta}
              aria-label="Register for the Future Skills Summit"
            >
              <span>REGISTER NOW</span>
              <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

