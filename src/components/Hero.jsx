import React, { useState, useEffect } from 'react';
import heroImage from '../assets/hero-image.png';
import '../styles/Hero.css';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero fade-in" style={{
      minHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '4rem 1rem',
      background: 'var(--manga-white)',
      position: 'relative',
      textAlign: 'center',
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden',
      backgroundImage: 'radial-gradient(var(--manga-gray) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      backgroundPosition: '-10px -10px'
    }}>
      <div className="manga-speed-lines" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'repeating-linear-gradient(45deg, var(--manga-gray) 0, var(--manga-gray) 1px, transparent 1px, transparent 50%)',
        backgroundSize: '10px 10px',
        opacity: 0.1,
        animation: 'moveSpeedLines 20s linear infinite',
        pointerEvents: 'none'
      }} />
      <div className="hero-content manga-panel" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        flexDirection: isMobile ? 'column' : 'row',
        maxWidth: '75vw',
        width: '100%',
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.9)',
        border: '3px solid var(--manga-black)',
        boxShadow: '8px 8px 0 var(--manga-black)',
        transform: 'rotate(-1deg)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ flex: 1 }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '900',
            marginBottom: '1.5rem',
            color: 'var(--manga-black)',
            lineHeight: '1.2',
            textTransform: 'uppercase',
            textShadow: '3px 3px 0 var(--manga-accent)',
            transform: 'skew(-3deg)',
            letterSpacing: '-0.02em'
          }}>
            Creative UI/UX Designer & Web Developer
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: 'var(--manga-gray)',
            marginBottom: '2rem',
            lineHeight: '1.6',
            fontStyle: 'italic',
            borderLeft: '4px solid var(--manga-accent)',
            paddingLeft: '1rem',
            position: 'relative'
          }}>
            Crafting beautiful, intuitive digital experiences through thoughtful design and clean code.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}>
            <button className="manga-button" style={{
              fontSize: '1.1rem',
              padding: '1rem 2rem',
              transform: 'skew(-10deg)',
              border: '2px solid var(--manga-black)',
              boxShadow: '4px 4px 0 var(--manga-black)'
            }}>
              View Projects
            </button>
            <button className="manga-button" style={{
              fontSize: '1.1rem',
              padding: '1rem 2rem',
              background: 'transparent',
              border: '2px solid var(--manga-accent)',
              color: 'var(--manga-accent)',
              transform: 'skew(-10deg)',
              boxShadow: '4px 4px 0 var(--manga-accent)'
            }}>
              Contact Me
            </button>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem'
          }}>
            <div className="skill-tag" style={{
              padding: '0.5rem 1.5rem',
              background: 'var(--manga-accent)',
              color: 'white',
              clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              transform: 'rotate(-2deg)',
              border: '2px solid var(--manga-black)',
              textTransform: 'uppercase'
            }}>UI Design</div>
            <div className="skill-tag" style={{
              padding: '0.5rem 1.5rem',
              background: 'var(--manga-accent)',
              color: 'white',
              clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              transform: 'rotate(-2deg)',
              border: '2px solid var(--manga-black)',
              textTransform: 'uppercase'
            }}>UX Research</div>
            <div className="skill-tag" style={{
              padding: '0.5rem 1.5rem',
              background: 'var(--manga-accent)',
              color: 'white',
              clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              transform: 'rotate(-2deg)',
              border: '2px solid var(--manga-black)',
              textTransform: 'uppercase'
            }}>Web Development</div>
          </div>
        </div>
        <div style={{ flex: 1, position: 'relative' }}>
          <img
            src={heroImage}
            alt="UI/UX Designer"
            style={{
              maxWidth: '100%',
              height: 'auto',
              border: '3px solid var(--manga-black)',
              borderRadius: '10px',
              transform: 'rotate(2deg)',
              boxShadow: '8px 8px 0 var(--manga-accent)',
              animation: 'floatImage 3s ease-in-out infinite, slideIn 1s ease-out',
              transition: 'transform 0.3s ease'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;