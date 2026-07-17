// ============================================================
// App.tsx – Root Application Component
// ============================================================
import React, { useEffect } from 'react';
import './styles/globals.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SpeakersSection from './components/SpeakersSection/SpeakersSection';
import FoundationSection from './components/FoundationSection/FoundationSection';
import ChapterHeadsSection from './components/ChapterHeadsSection/ChapterHeadsSection';
import PartnersSection from './components/PartnersSection/PartnersSection';
import AgendaSection from './components/AgendaSection/AgendaSection';
import Footer from './components/Footer/Footer';

import { speakerGroups } from './data/eventData';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,          // trigger as soon as 5% is visible
        rootMargin: '0px 0px -20px 0px'  // generous margin
      }
    );

    // Small delay so DOM is fully painted before observing
    const timer = setTimeout(() => {
      // ── General section reveals ──
      const targets = document.querySelectorAll('[data-reveal]');
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      });

      // ── Card scroll-reveal with stagger ──
      const cardObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const idx = parseInt(el.dataset.cardIndex ?? '0', 10);
              // Stagger: each card delays by 70ms per index, max 560ms
              const delay = Math.min(idx * 70, 560);
              setTimeout(() => {
                el.classList.add('card-visible');
              }, delay);
              cardObserver.unobserve(el);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );

      document.querySelectorAll('[data-card-reveal]').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          // Already in view: show immediately
          (el as HTMLElement).classList.add('card-visible');
        } else {
          cardObserver.observe(el);
        }
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        {speakerGroups.map((group, index) => (
          <SpeakersSection key={group.id} group={group} groupIndex={index} />
        ))}
        <FoundationSection />
        <ChapterHeadsSection />
        <PartnersSection />
        <AgendaSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
