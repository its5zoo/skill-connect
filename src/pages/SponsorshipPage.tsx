// ============================================================
// SponsorshipPage.tsx — Standalone Sponsorship page
// ============================================================
import React from 'react';
import PageLayout from './PageLayout';
import SponsorshipSection from '../components/SponsorshipSection/SponsorshipSection';

const SponsorshipPage: React.FC = () => {
  return (
    <PageLayout>
      <SponsorshipSection />
    </PageLayout>
  );
};

export default SponsorshipPage;
