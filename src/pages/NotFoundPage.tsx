import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '8rem', margin: '0', fontWeight: 'bold', color: 'var(--primary, #00f0ff)' }}>404</h1>
        <h2 style={{ fontSize: '2.5rem', marginTop: '0', marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-muted, #a3a3a3)', marginBottom: '2.5rem', maxWidth: '500px', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          style={{
            padding: '14px 36px',
            backgroundColor: 'var(--primary, #00f0ff)',
            color: '#000',
            textDecoration: 'none',
            borderRadius: '30px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'transform 0.2s, opacity 0.2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        >
          Return to Home
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;
