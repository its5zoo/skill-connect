// ============================================================
// Header Component — Routing + Active section highlight
// On Home page (/): scroll spy active, clicking navigates to dedicated page
// On sub-pages: shows route-based active state
// ============================================================
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { label: 'Home',          id: 'hero',                       path: '/' },
  { label: 'Speakers',      id: 'speakers-group-1',           path: '/speakers' },
  { label: 'QT Foundation', id: 'foundation',                 path: '/qt-foundation' },
  { label: 'Chapter Heads', id: 'chapter-heads-ch-group-1',   path: '/chapter-heads' },
  { label: 'Partners',      id: 'partners',                   path: '/partners' },
  { label: 'Sponsor',       id: 'sponsorship',                path: '/sponsorship' },
  { label: 'Agenda',        id: 'agenda',                     path: '/agenda' },
];

const Header: React.FC = () => {
  const navigate   = useNavigate();
  const location   = useLocation();
  const isHomePage = location.pathname === '/';

  const [scrollActiveId, setScrollActiveId] = useState('hero');
  const [menuOpen, setMenuOpen]   = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ── Scrolled state (pill vs full-width) ─────────────────
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Scroll spy — only on Home page ───────────────────────
  useEffect(() => {
    if (!isHomePage) return;

    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setScrollActiveId(id); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [isHomePage]);

  // ── Determine which nav item is "active" ─────────────────
  const getActiveId = () => {
    if (isHomePage) return scrollActiveId;
    // Match current route path to nav item
    const matched = NAV_ITEMS.find(item => item.path === location.pathname);
    return matched ? matched.id : '';
  };

  const activeId = getActiveId();

  // ── Navigation handler ────────────────────────────────────
  const handleNav = (path: string, id: string) => {
    (document.activeElement as HTMLElement)?.blur();
    setMenuOpen(false);

    if (path === '/' && isHomePage) {
      // Already on home — smooth scroll to hero top
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // Navigate to the route page
    navigate(path);
  };

  return (
    <header
      className={`${styles.header} ${!isScrolled ? styles.headerAtTop : ''} ${menuOpen ? styles.headerOpen : ''}`}
      id="top"
    >
      <div className={styles.headerInner}>

        {/* Desktop Navigation */}
        <nav className={styles.navMenu}>
          {NAV_ITEMS.map(({ label, id, path }) => (
            <button
              key={id}
              className={`${styles.navLink} ${activeId === id ? styles.navLinkActive : ''}`}
              onClick={() => handleNav(path, id)}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button className={styles.headerCta} onClick={() => navigate('/')} aria-label="Register">
          <span>REGISTER NOW</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
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
        {NAV_ITEMS.map(({ label, id, path }) => (
          <button
            key={id}
            className={`${styles.mobileNavLink} ${activeId === id ? styles.mobileNavLinkActive : ''}`}
            onClick={() => handleNav(path, id)}
          >
            {label}
          </button>
        ))}
        <button className={styles.mobileCta} onClick={() => { navigate('/'); setMenuOpen(false); }}>
          REGISTER NOW →
        </button>
      </div>
    </header>
  );
};

export default Header;
