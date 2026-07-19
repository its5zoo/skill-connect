// ============================================================
// main.tsx – Application Entry Point + Lenis Smooth Scroll
// ============================================================
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Lenis from 'lenis';
import App from './App';

// If the user hard refreshes the page, always send them back to the Home page
if (window.performance) {
  const navEntries = window.performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
  if (navEntries.length > 0 && navEntries[0].type === 'reload') {
    if (window.location.pathname !== '/') {
      window.location.replace('/');
    }
  }
}

// ── Lenis buttery smooth scroll ─────────────────────────────
const lenis = new Lenis({
  duration: 1.4,
  easing: (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  smoothWheel: true,
  touchMultiplier: 1.5,
  infinite: false,
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Expose globally so Header scrollTo still works smoothly
(window as any).__lenis = lenis;

// ── React root ──────────────────────────────────────────────
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found. Make sure index.html has <div id="root">');
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
