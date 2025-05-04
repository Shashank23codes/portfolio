import React, { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: '1rem',
    background: 'rgba(250, 250, 250, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '3px solid var(--manga-black)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    transition: 'all 0.3s ease'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const logoStyle = {
    fontSize: '2rem',
    fontWeight: '900',
    color: 'var(--manga-black)',
    textTransform: 'uppercase',
    letterSpacing: '-0.02em',
    textShadow: '2px 2px 0 var(--manga-accent)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      display: isMenuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: 'rgba(250, 250, 250, 0.95)',
      backdropFilter: 'blur(10px)',
      padding: '1rem',
      borderBottom: '3px solid var(--manga-black)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      animation: 'slideDown 0.3s ease'
    }
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: 'var(--manga-black)',
    fontWeight: '700',
    padding: '0.5rem 1rem',
    borderRadius: 'var(--panel-radius)',
    border: '2px solid transparent',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    ':hover': {
      color: 'var(--manga-accent)',
      border: '2px solid var(--manga-accent)',
      transform: 'translateY(-2px)'
    }
  };

  const menuButtonStyle = {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
      background: 'none',
      border: '2px solid var(--manga-black)',
      borderRadius: 'var(--panel-radius)',
      padding: '0.5rem',
      fontSize: '1.5rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      ':hover': {
        background: 'var(--manga-accent)',
        color: 'var(--manga-white)',
        transform: 'scale(1.1)'
      }
    }
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>
          SHASHANK
        </div>

        <div style={navLinksStyle}>
          <a href="#About" style={navLinkStyle}>About</a>
          <a href="#Projects" style={navLinkStyle}>Projects</a>
          <a href="#Skills" style={navLinkStyle}>Skills</a>
          <a href="#Contact" style={navLinkStyle}>Contact</a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={menuButtonStyle}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '×' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;