// ============================================================
// HomePage.tsx — Full scrollable home page (all sections)
// ============================================================
import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import GuestsSection from '../components/GuestsSection/GuestsSection';
import SpeakersSection from '../components/SpeakersSection/SpeakersSection';


import ChapterHeadsSection from '../components/ChapterHeadsSection/ChapterHeadsSection';
import PartnersSection from '../components/PartnersSection/PartnersSection';
import SponsorshipSection from '../components/SponsorshipSection/SponsorshipSection';
import AgendaSection from '../components/AgendaSection/AgendaSection';
import Footer from '../components/Footer/Footer';
import { speakerGroups } from '../data/eventData';

const HomePage: React.FC = () => {
  useEffect(() => {
    // General section reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    // Card scroll-reveal with stagger
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const idx = parseInt(el.dataset.cardIndex ?? '0', 10);
            const delay = Math.min(idx * 70, 560);
            setTimeout(() => { el.classList.add('card-visible'); }, delay);
            cardObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      });

      document.querySelectorAll('[data-card-reveal]').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          (el as HTMLElement).classList.add('card-visible');
        } else {
          cardObserver.observe(el);
        }
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* 1. Home / Hero */}
        <Hero />

        {/* 2. Speakers (1 Row of 5 Cards) */}
        <SpeakersSection
          key={speakerGroups[0].id}
          group={speakerGroups[0]}
          groupIndex={0}
          limitCount={5}
          showViewAll={true}
        />

        {/* 3. Honored Guests (1 Row of 5 Cards) */}
        <GuestsSection isHomePage={true} initialCount={5} />

        {/* 4. Chapter Heads (1 Row of 5 Cards) */}
        <ChapterHeadsSection isHomePage={true} />

        {/* 4. Agenda */}
        <AgendaSection isHomePage />

        {/* 5. Partners */}
        <PartnersSection />

        {/* 6. Sponsor */}
        <SponsorshipSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
