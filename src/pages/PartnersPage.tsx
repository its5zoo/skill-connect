// ============================================================
// PartnersPage.tsx — Standalone Partners page
// ============================================================
import React from 'react';
import PageLayout from './PageLayout';
import PartnersSection from '../components/PartnersSection/PartnersSection';

const PartnersPage: React.FC = () => {
  return (
    <PageLayout>
      <PartnersSection />
    </PageLayout>
  );
};

export default PartnersPage;
