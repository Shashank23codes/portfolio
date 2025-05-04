import React from 'react';

const About = () => {
  return (
    <section className="about" id='About' style={{
      padding: '6rem 1rem',
      background: 'var(--manga-white)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div className="about-content" style={{
          background: 'white',
          padding: '2rem',
          border: '3px solid var(--manga-black)',
          boxShadow: '8px 8px 0 var(--manga-accent)',
          transform: 'rotate(-1deg)'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '900',
            marginBottom: '1.5rem',
            color: 'var(--manga-black)',
            textTransform: 'uppercase',
            textShadow: '3px 3px 0 var(--manga-accent)'
          }}>
            About Me
          </h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            marginBottom: '1.5rem',
            color: 'var(--manga-gray)'
          }}>
            I'm a passionate digital artist and web developer with a unique approach to creating engaging user experiences. My work combines the dynamic storytelling of manga with modern web technologies.
          </p>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            marginBottom: '1.5rem',
            color: 'var(--manga-gray)'
          }}>
            With over 5 years of experience in digital art and web development, I specialize in creating immersive digital experiences that tell compelling stories through design.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '2rem'
          }}>
            <button className="manga-button" style={{
              padding: '1rem 2rem',
              background: 'var(--manga-accent)',
              color: 'white',
              border: '2px solid var(--manga-black)',
              boxShadow: '4px 4px 0 var(--manga-black)',
              transform: 'skew(-5deg)'
            }}>
              Download CV
            </button>
          </div>
        </div>

        <div className="about-stats" style={{
          display: 'grid',
          gap: '2rem'
        }}>
          {[
            { number: '1', text: 'Years Experience' },
            { number: '3', text: 'Projects Completed' },
            { number: '4', text: 'Happy Clients' }
          ].map((stat, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '1.5rem',
              border: '3px solid var(--manga-black)',
              boxShadow: '6px 6px 0 var(--manga-accent)',
              transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})`,
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '3rem',
                fontWeight: '900',
                color: 'var(--manga-accent)',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--manga-black)',
                fontWeight: '700'
              }}>
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;