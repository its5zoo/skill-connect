import React from 'react';
import { partners } from '../../data/partnersData';
import styles from './PartnersSection.module.css';

const categoryLabels: Record<string, string> = {
  international: 'International & Industry Organizations',
  skill: 'Skill Ecosystem Partners',
  academic: 'Academic Partner',
  corporate: 'Corporate & Technology Partner',
  medical: 'Medical partner',
};

const PartnersSection: React.FC = () => {
  const [failedLogos, setFailedLogos] = React.useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = React.useState<string>('international');
  const desktopMarqueeRef = React.useRef<HTMLDivElement>(null);
  const mobileMarqueeRef = React.useRef<HTMLDivElement>(null);

  const handleImgError = (id: string) =>
    setFailedLogos(prev => new Set(prev).add(id));

  const marqueePartners = partners.filter(p => p.category !== 'media');
  const mediaPartners   = partners.filter(p => p.category === 'media');

  // Duplicate for seamless marquee loop
  const marqueeLogos = [...marqueePartners, ...marqueePartners];

  React.useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const category = entry.target.getAttribute('data-category');
          if (category) {
            setActiveCategory(category);
          }
        }
      });
    };

    const observerOptions = {
      rootMargin: '0px -49% 0px -49%',
      threshold: 0,
    };

    let desktopObserver: IntersectionObserver | null = null;
    let mobileObserver: IntersectionObserver | null = null;

    if (desktopMarqueeRef.current) {
      desktopObserver = new IntersectionObserver(handleIntersection, {
        ...observerOptions,
        root: desktopMarqueeRef.current,
      });
      const cards = desktopMarqueeRef.current.querySelectorAll(`.${styles.marqueeCard}`);
      cards.forEach(card => desktopObserver?.observe(card));
    }

    if (mobileMarqueeRef.current) {
      mobileObserver = new IntersectionObserver(handleIntersection, {
        ...observerOptions,
        root: mobileMarqueeRef.current,
      });
      const cards = mobileMarqueeRef.current.querySelectorAll(`.${styles.marqueeCard}`);
      cards.forEach(card => mobileObserver?.observe(card));
    }

    return () => {
      desktopObserver?.disconnect();
      mobileObserver?.disconnect();
    };
  }, [failedLogos]);

  return (
    <section className={styles.section} id="partners" aria-label="Our Partners">
      <div className={styles.container}>

        {/* ── Section Header ── */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Our <em>Partners</em>
          </h2>
          <p className={styles.subtitle}>
            Proud ecosystem building the future of skills together
          </p>
        </div>

        {/* ── Ecosystem & Skill Partners — Marquee ── */}
        <div className={styles.categoryBlock}>
          <h3 key={activeCategory} className={styles.categoryLabel}>
            {categoryLabels[activeCategory] || 'Partners'}
          </h3>

          {/* DESKTOP (Single Row) */}
          <div
            ref={desktopMarqueeRef}
            className={`${styles.marqueeWrapper} ${styles.desktopMarquee}`}
            aria-label="Partner logos"
          >
            <div className={styles.marqueeTrack}>
              {marqueeLogos.map((partner, idx) => (
                <div
                  key={`desktop-${partner.id}-${idx}`}
                  className={styles.marqueeCard}
                  data-category={partner.category}
                >
                  {partner.logo && !failedLogos.has(partner.id) ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className={styles.logoImg}
                      onError={() => handleImgError(partner.id)}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className={styles.logoFallback}>{partner.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE/TABLET (Double Row, Opposite Directions) */}
          <div
            ref={mobileMarqueeRef}
            className={`${styles.marqueeWrapper} ${styles.mobileMarquee}`}
            aria-hidden="true"
          >
            {/* Row 1 (Moves Left) */}
            <div className={styles.marqueeTrack}>
              {[...marqueePartners.slice(0, 10), ...marqueePartners.slice(0, 10), ...marqueePartners.slice(0, 10), ...marqueePartners.slice(0, 10)].map((partner, idx) => (
                <div
                  key={`mobile-r1-${partner.id}-${idx}`}
                  className={styles.marqueeCard}
                  data-category={partner.category}
                >
                  {partner.logo && !failedLogos.has(partner.id) ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className={styles.logoImg}
                      onError={() => handleImgError(partner.id)}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className={styles.logoFallback}>{partner.name}</span>
                  )}
                </div>
              ))}
            </div>
            {/* Row 2 (Moves Right) */}
            <div className={`${styles.marqueeTrack} ${styles.marqueeTrackReverse}`}>
              {[...marqueePartners.slice(10), ...marqueePartners.slice(10), ...marqueePartners.slice(10), ...marqueePartners.slice(10)].map((partner, idx) => (
                <div
                  key={`mobile-r2-${partner.id}-${idx}`}
                  className={styles.marqueeCard}
                  data-category={partner.category}
                >
                  {partner.logo && !failedLogos.has(partner.id) ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className={styles.logoImg}
                      onError={() => handleImgError(partner.id)}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className={styles.logoFallback}>{partner.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Media Partners — 3 large cards ── */}
        <div className={styles.categoryBlock}>
          <h3 className={styles.categoryLabel}>Media Partners</h3>

          <div className={styles.mediaGrid}>
            {mediaPartners.map(partner => (
              <div key={partner.id} className={styles.mediaCard}>
                <div className={styles.mediaAccent} />
                {partner.logo && !failedLogos.has(partner.id) ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={styles.mediaLogoImg}
                    onError={() => handleImgError(partner.id)}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className={styles.mediaLogoFallback}>{partner.name}</span>
                )}
                <span className={styles.mediaName}>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
