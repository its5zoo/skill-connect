// ============================================================
// SpeakersPage.tsx — Standalone Speakers page
// ============================================================
import React from 'react';
import PageLayout from './PageLayout';
import SpeakersSection from '../components/SpeakersSection/SpeakersSection';
import { speakerGroups, foundationTeam } from '../data/eventData';

const SpeakersPage: React.FC = () => {
  // Wrap the foundationTeam array in a SpeakerGroup-like object
  const foundationGroup = {
    id: 'foundation-group',
    speakers: foundationTeam,
  };

  return (
    <PageLayout>
      {/* 1. Distinguished / Industry / Innovation Speakers */}
      {speakerGroups.map((group, index) => (
        <SpeakersSection key={group.id} group={group} groupIndex={index} />
      ))}

      {/* 2. Quality Thought Foundation Team */}
      <SpeakersSection key={foundationGroup.id} group={foundationGroup} groupIndex={3} />
    </PageLayout>
  );
};

export default SpeakersPage;
