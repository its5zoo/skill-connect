// ============================================================
// Partners Section – Displaying the full partners grid image
// ============================================================
import React from 'react';
import styles from './PartnersSection.module.css';

const PartnersSection: React.FC = () => {
  return (
    <section className={styles.section} id="partners" aria-label="Our Partners">
      <div className={styles.container}>
        <h2 className={styles.title}>SKILLING PARTNERS</h2>
        <img
          src="/partners/partners_grid.png"
          alt="Ecosystem, Skilling, and Media Partners"
          className={styles.partnersImg}
        />
      </div>
    </section>
  );
};

export default PartnersSection;
