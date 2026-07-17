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

          <div className={styles.marqueeWrapper} aria-label="Partner logos">
            <div className={styles.marqueeTrack}>
              {marqueeLogos.map((partner, idx) => (
                <div key={`${partner.id}-${idx}`} className={styles.marqueeCard}>
                  {partner.logo && !failedLogos.has(partner.id) ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className={styles.logoImg}
                      onError={() => handleImgError(partner.id)}
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
