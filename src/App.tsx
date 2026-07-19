// ============================================================
// App.tsx – Root Application with React Router Routes
// ============================================================
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/globals.css';

import HomePage from './pages/HomePage';
import SpeakersPage from './pages/SpeakersPage';
import FoundationPage from './pages/FoundationPage';
import ChapterHeadsPage from './pages/ChapterHeadsPage';
import PartnersPage from './pages/PartnersPage';
import AgendaPage from './pages/AgendaPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/"               element={<HomePage />} />
      <Route path="/speakers"       element={<SpeakersPage />} />
      <Route path="/qt-foundation"  element={<FoundationPage />} />
      <Route path="/chapter-heads"  element={<ChapterHeadsPage />} />
      <Route path="/partners"       element={<PartnersPage />} />
      <Route path="/agenda"         element={<AgendaPage />} />
      {/* Fallback to home */}
      <Route path="*"               element={<HomePage />} />
    </Routes>
  );
};

export default App;
