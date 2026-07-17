// ============================================================
// Header Component — Active section highlight with blue dash
// ============================================================
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { label: 'Home',          id: 'hero' },
  { label: 'Speakers',      id: 'speakers-group-1' },
  { label: 'QT Foundation', id: 'foundation' },
  { label: 'Chapter Heads', id: 'chapter-heads-ch-group-1' },
  { label: 'Partners',      id: 'partners' },
  { label: 'Agenda',        id: 'agenda' },
];

const Header: React.FC = () => {
  const [activeId, setActiveId]   = useState('hero');
  const [menuOpen, setMenuOpen]   = useState(false);

  // ── Scroll spy via IntersectionObserver ──────────────────
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map(n => n.id);

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${menuOpen ? styles.headerOpen : ''}`} id="top">
      <div className={styles.headerInner}>
        {/* Brand wordmark */}
        <span className={styles.brandMark}>Future <span>Skills</span> Summit</span>

        {/* Desktop Navigation */}
        <nav className={styles.navMenu}>
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              className={`${styles.navLink} ${activeId === id ? styles.navLinkActive : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button className={styles.headerCta} onClick={() => scrollTo('register')} aria-label="Register">
          <span>REGISTER NOW</span>
          <div className={styles.ctaIconBox}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </button>

        {/* Hamburger (mobile only) */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {NAV_ITEMS.map(({ label, id }) => (
          <button
            key={id}
            className={`${styles.mobileNavLink} ${activeId === id ? styles.mobileNavLinkActive : ''}`}
            onClick={() => scrollTo(id)}
          >
            {label}
          </button>
        ))}
        <button className={styles.mobileCta} onClick={() => scrollTo('register')}>
          REGISTER NOW →
        </button>
      </div>
    </header>
  );
};

export default Header;
