// ============================================================
// SpeakersPage.tsx — Standalone Speakers page
// ============================================================
import React from 'react';
import PageLayout from './PageLayout';
import SpeakersSection from '../components/SpeakersSection/SpeakersSection';
import { speakerGroups } from '../data/eventData';

const SpeakersPage: React.FC = () => {
  return (
    <PageLayout>
      {speakerGroups.map((group, index) => (
        <SpeakersSection key={group.id} group={group} groupIndex={index} />
      ))}
    </PageLayout>
  );
};

export default SpeakersPage;
