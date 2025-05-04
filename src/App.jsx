import React from 'react';
import './styles/global.css';
import './styles/Footer.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app" style={{
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden'
    }}>
      <Navigation />
      <main style={{
        paddingTop: '60px',
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
        background: 'var(--manga-white)'
      }}>
        <Hero />
        <About />
        <Skills />
        <Gallery />
        <Contact />
      <Footer />
      </main>
    </div>
  );
}

export default App;
