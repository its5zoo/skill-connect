// ============================================================
// App.tsx – Root Application Component
// Single-page layout assembling all sections
// ============================================================
import React from 'react';
import './styles/globals.css';

// Components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SpeakersSection from './components/SpeakersSection/SpeakersSection';
import FoundationSection from './components/FoundationSection/FoundationSection';
import ChapterHeadsSection from './components/ChapterHeadsSection/ChapterHeadsSection';
import PartnersSection from './components/PartnersSection/PartnersSection';
import Footer from './components/Footer/Footer';

// Data
import { speakerGroups } from './data/eventData';

const App: React.FC = () => {
  return (
    <>
      {/* ── Sticky Navigation Header ── */}
      <Header />

      <main>
        {/* ── Section 1: Hero / Event Banner (image 1 top) ── */}
        <Hero />

        {/* ── Section 2–4: Speaker Groups (images 1, 2, 3) ── */}
        {speakerGroups.map((group, index) => (
          <SpeakersSection
            key={group.id}
            group={group}
            groupIndex={index}
          />
        ))}

        {/* ── Section 5: QT Foundation Launch (image 4) ── */}
        <FoundationSection />

        {/* ── Section 6: Chapter Heads (image 5) ── */}
        <ChapterHeadsSection />

        {/* ── Section 7: Partners & Sponsors (image 1 bottom) ── */}
        <PartnersSection />
      </main>

      {/* ── Footer with Register CTA ── */}
      <Footer />
    </>
  );
};

export default App;
