// ============================================================
// ChapterHeadsPage.tsx — Standalone Chapter Heads page
// ============================================================
import React from 'react';
import PageLayout from './PageLayout';
import ChapterHeadsSection from '../components/ChapterHeadsSection/ChapterHeadsSection';
import styles from './ChapterHeadsPage.module.css';

const ChapterHeadsPage: React.FC = () => {
  return (
    <PageLayout>
      {/* ── Dedicated Page Gold-Sepia Full-Width Rectangular Banner ── */}
      <div className={styles.headerBanner}>
        <div className={styles.headerContainer}>
          <h2 className={styles.bannerTitle}>
            Chapter Heads
          </h2>
        </div>
      </div>
      <ChapterHeadsSection />
    </PageLayout>
  );
};

export default ChapterHeadsPage;
