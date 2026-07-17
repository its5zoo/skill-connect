// ============================================================
// main.tsx – Application Entry Point + Lenis Smooth Scroll
// ============================================================
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Lenis from 'lenis';
import App from './App';

// ── Lenis buttery smooth scroll ─────────────────────────────
const lenis = new Lenis({
  duration: 1.4,           // scroll duration (higher = slower/smoother)
  easing: (t: number) =>   // custom easing — ease-out-expo feel
    t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  smoothWheel: true,       // smooth mouse wheel
  touchMultiplier: 1.5,    // mobile touch feel
  infinite: false,
});

// Hook into requestAnimationFrame loop
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
    <App />
  </StrictMode>
);
