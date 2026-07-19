// ============================================================
// PageLayout.tsx — Shared wrapper for sub-pages
// Provides Header + main content area + Footer
// ============================================================
import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './PageLayout.module.css';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  useEffect(() => {
    // Scroll reveal observer for sub-pages
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
      <main className={styles.pageMain}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
