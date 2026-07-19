// ============================================================
// FoundationPage.tsx — Standalone QT Foundation page
// ============================================================
import React from 'react';
import PageLayout from './PageLayout';
import FoundationSection from '../components/FoundationSection/FoundationSection';

const FoundationPage: React.FC = () => {
  return (
    <PageLayout>
      <FoundationSection />
    </PageLayout>
  );
};

export default FoundationPage;
