// ============================================================
// AgendaPage.tsx — Standalone Agenda page
// ============================================================
import React from 'react';
import PageLayout from './PageLayout';
import AgendaSection from '../components/AgendaSection/AgendaSection';

const AgendaPage: React.FC = () => {
  return (
    <PageLayout>
      <AgendaSection />
    </PageLayout>
  );
};

export default AgendaPage;
