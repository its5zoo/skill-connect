import React from 'react';
import { partners } from '../../data/partnersData';
import styles from './PartnersSection.module.css';

const PartnersSection: React.FC = () => {
  const [failedLogos, setFailedLogos] = React.useState<Set<string>>(new Set());
  const handleImgError = (id: string) =>
    setFailedLogos(prev => new Set(prev).add(id));

  const ecosystemPartners = partners.filter(p => p.category === 'ecosystem');
  const mediaPartners     = partners.filter(p => p.category === 'media');

  // Duplicate for seamless marquee loop
  const marqueeLogos = [...ecosystemPartners, ...ecosystemPartners];

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
          <h3 className={styles.categoryLabel}>Ecosystem &amp; Skill Partners</h3>

          {/* DESKTOP (Single Row) */}
          <div className={`${styles.marqueeWrapper} ${styles.desktopMarquee}`} aria-label="Partner logos">
            <div className={styles.marqueeTrack}>
              {marqueeLogos.map((partner, idx) => (
                <div key={`desktop-${partner.id}-${idx}`} className={styles.marqueeCard}>
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
          <div className={`${styles.marqueeWrapper} ${styles.mobileMarquee}`} aria-hidden="true">
            {/* Row 1 (Moves Left) */}
            <div className={styles.marqueeTrack}>
              {[...ecosystemPartners.slice(0, 7), ...ecosystemPartners.slice(0, 7), ...ecosystemPartners.slice(0, 7), ...ecosystemPartners.slice(0, 7)].map((partner, idx) => (
                <div key={`mobile-r1-${partner.id}-${idx}`} className={styles.marqueeCard}>
                  {partner.logo && !failedLogos.has(partner.id) ? (
                    <img src={partner.logo} alt={partner.name} className={styles.logoImg} onError={() => handleImgError(partner.id)} loading="lazy" decoding="async" />
                  ) : (
                    <span className={styles.logoFallback}>{partner.name}</span>
                  )}
                </div>
              ))}
            </div>
            {/* Row 2 (Moves Right) */}
            <div className={`${styles.marqueeTrack} ${styles.marqueeTrackReverse}`}>
              {[...ecosystemPartners.slice(7), ...ecosystemPartners.slice(7), ...ecosystemPartners.slice(7), ...ecosystemPartners.slice(7)].map((partner, idx) => (
                <div key={`mobile-r2-${partner.id}-${idx}`} className={styles.marqueeCard}>
                  {partner.logo && !failedLogos.has(partner.id) ? (
                    <img src={partner.logo} alt={partner.name} className={styles.logoImg} onError={() => handleImgError(partner.id)} loading="lazy" decoding="async" />
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
