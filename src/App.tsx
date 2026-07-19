// ============================================================
// App.tsx – Root Application with React Router Routes
// ============================================================
import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './styles/globals.css';

import HomePage from './pages/HomePage';
import SpeakersPage from './pages/SpeakersPage';
import FoundationPage from './pages/FoundationPage';
import ChapterHeadsPage from './pages/ChapterHeadsPage';
import PartnersPage from './pages/PartnersPage';
import AgendaPage from './pages/AgendaPage';
import SponsorshipPage from './pages/SponsorshipPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset standard window scroll
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Reset Lenis scroll (if available)
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/"               element={<HomePage />} />
        <Route path="/speakers"       element={<SpeakersPage />} />
        <Route path="/qt-foundation"  element={<FoundationPage />} />
        <Route path="/chapter-heads"  element={<ChapterHeadsPage />} />
        <Route path="/partners"       element={<PartnersPage />} />
        <Route path="/agenda"         element={<AgendaPage />} />
        <Route path="/sponsorship"    element={<SponsorshipPage />} />
        {/* Fallback to home */}
        <Route path="*"               element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;

