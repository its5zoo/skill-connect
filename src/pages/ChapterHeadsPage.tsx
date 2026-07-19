// ============================================================
// ChapterHeadsPage.tsx — Standalone Chapter Heads page
// ============================================================
import React from 'react';
import PageLayout from './PageLayout';
import ChapterHeadsSection from '../components/ChapterHeadsSection/ChapterHeadsSection';

const ChapterHeadsPage: React.FC = () => {
  return (
    <PageLayout>
      <ChapterHeadsSection />
    </PageLayout>
  );
};

export default ChapterHeadsPage;
