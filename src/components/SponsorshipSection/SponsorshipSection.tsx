// ============================================================
// SponsorshipSection.tsx — Sponsorship Deck with Table + Partner Tiers
// ============================================================
import React, { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import PhoneIcon from '@mui/icons-material/Phone';
import styles from './SponsorshipSection.module.css';

// ─── Data ────────────────────────────────────────────────────
const TIERS = [
  { id: 'platinum', label: 'Platinum', price: 'INR 10 Lakh', colorClass: 'platinum' },
  { id: 'gold',     label: 'Gold',     price: 'INR 7.5 Lakh', colorClass: 'gold' },
  { id: 'silver',   label: 'Silver',   price: 'INR 5 Lakh',   colorClass: 'silver' },
];

type CellValue = boolean | string | number | null;

const FEATURES: { label: string; highlight?: boolean; values: [CellValue, CellValue, CellValue] }[] = [
  { label: 'Stage Branding',                  values: [true,        true,       true] },
  { label: 'VIP Passes (Networking Lunch)',    values: [15,          10,         5] },
  { label: 'Presenter Status',                values: [true,        true,       true] },
  { label: 'Panel Discussion',                values: [true,        true,       true] },
  { label: 'Speaking Slot',                   highlight: true, values: ['15 Min', '10 Min', '05 Min'] },
  { label: 'Logo on Trophies',               values: [true,        true,       true] },
  { label: 'Database of Attendees',           values: [true,        true,       null] },
  { label: 'Awards',                          values: [5,           3,          1] },
  { label: 'FM Radio Announcements',          values: [true,        true,       true] },
  { label: 'Stall Space',                     values: [true,        true,       true] },
  { label: 'Logo on Promotional Brochures',   values: [true,        true,       true] },
  { label: 'Logo on Website',                 values: [true,        true,       true] },
  { label: 'Social Media Promotions',         values: [true,        true,       true] },
];

const PARTNERS = [
  { label: 'Knowledge Partner',   price: 'INR 3 Lakhs',  side: 'left' },
  { label: 'Awards Partner',      price: 'INR 3 Lakhs',  side: 'right' },
  { label: 'Gifting Partner',     price: 'INR 2 Lakhs',  side: 'left' },
  { label: 'Hospitality Partner', price: 'INR 2 Lakhs',  side: 'right' },
  { label: 'Technology Partner',  price: 'INR 2 Lakhs',  side: 'left' },
  { label: 'Food Partner',        price: 'INR 2 Lakhs',  side: 'right' },
];

// ─── Cell renderer ─────────────────────────────────────────
const Cell: React.FC<{ value: CellValue; highlight?: boolean; tier: string }> = ({ value, highlight, tier }) => {
  if (value === null || value === false) {
    return <span className={styles.cellDash}>—</span>;
  }
  if (value === true) {
    return (
      <svg className={`${styles.checkIcon} ${styles[tier]}`} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.15"/>
        <path d="M7 12.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  return <span className={`${styles.cellText} ${highlight ? styles.highlightCell : ''} ${highlight ? styles[`highlight_${tier}`] : ''}`}>{value}</span>;
};

// ─── Component ───────────────────────────────────────────────
const SponsorshipSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section className={styles.section} id="sponsorship" aria-label="Sponsorship Packages">
      <div className={styles.container} ref={sectionRef}>

        {/* ── Header ── */}
        <div className={styles.header} data-reveal>
          <p className={styles.eyebrow}>Become a Sponsor</p>
          <h2 className={styles.title}>
            Sponsorship <span className={styles.accent}>Packages</span>
          </h2>
          <p className={styles.subtitle}>
            Partner with the Future Skills Summit &amp; Awards — India's premier platform<br />
            for skills, innovation &amp; leadership.
          </p>
        </div>



        {/* ── Comparison Table ── */}
        <div className={styles.scrollHintMobile} aria-hidden="true">
          <span>Swipe to compare packages</span>
          <span className={styles.scrollArrow}>→</span>
        </div>
        <div className={styles.tableWrap} data-reveal>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.featureHeader}>Features</th>
                {TIERS.map(t => (
                  <th key={t.id} className={`${styles.tierHeader} ${styles[t.colorClass]}`}>
                    <span className={styles.tierHeaderLabel}>{t.label}</span>
                    <span className={styles.tierHeaderPrice}>{t.price}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((row, i) => (
                <tr key={i} className={`${styles.tableRow} ${row.highlight ? styles.highlightRow : ''} ${i % 2 === 0 ? styles.rowEven : ''}`}>
                  <td className={styles.featureCell}>{row.label}</td>
                  {TIERS.map((t, ti) => (
                    <td key={t.id} className={`${styles.valueCell} ${row.highlight ? styles[`highlight_${t.colorClass}`] : ''}`}>
                      <Cell value={row.values[ti]} highlight={row.highlight} tier={t.colorClass} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Partner Tiers ── */}
        <div className={styles.partnersSection} data-reveal>
          <h3 className={styles.partnersTitle}>Additional Partnership Opportunities</h3>
          <div className={styles.partnersGrid}>
            {PARTNERS.map((p, i) => (
              <div key={i} className={styles.partnerCard}>
                <span className={styles.partnerLabel}>{p.label}</span>
                <span className={styles.partnerPrice}>{p.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={styles.cta} data-reveal>
          <p className={styles.ctaText}>Interested in sponsoring?</p>
          <div className={styles.ctaButtons}>
            <a href="tel:7981532054" className={styles.ctaBtn}>
              <PhoneIcon sx={{ fontSize: 20 }} />
              <span>7981532054</span>
            </a>
            <a href="tel:8297167157" className={styles.ctaBtn}>
              <PhoneIcon sx={{ fontSize: 20 }} />
              <span>8297167157</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SponsorshipSection;
