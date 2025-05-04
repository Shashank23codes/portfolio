import React from 'react';
// Import your images from assets folder
import MOVIEAPP_JPG from '../assets/MovieApp.jpeg';
import ANIMBLOG_PNG from '../assets/animblog.png';
import PORTFOLIO_PNG from '../assets/portfolio.png';

const Gallery = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.projects');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  const projects = [
    {
      id: 1,
      title: 'Movie Search App',
      description: 'A user-friendly movie search app with advanced filters and recommendations',
      tags: ['UI/UX', 'React', 'API Integration'],
      image: MOVIEAPP_JPG
    },
    {
      id: 2,
      title: 'AnimBlog - A Blog Website',
      description: 'It is a blog website with a modern and responsive design',
      tags: ['Mobile Design', 'User Research', 'Prototyping'],
      image: ANIMBLOG_PNG
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website built with modern web technologies',
      tags: ['Web Development', 'React', 'CSS3'],
      image: PORTFOLIO_PNG
    }
  ];
  return (
    <section className="projects" id='Projects' style={{
      opacity: isVisible ? 1 : 0,
      transform: `translateY(${isVisible ? '0' : '20px'})`,
      transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      padding: '6rem 0',
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden'
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '3rem',
        color: 'var(--manga-black)',
        textTransform: 'uppercase',
        textShadow: '3px 3px 0 var(--manga-accent)'
      }}>
        Featured Projects
      </h2>
      <p style={{
        textAlign: 'center',
        color: 'var(--manga-gray)',
        fontSize: '1.2rem',
        marginBottom: '4rem'
      }}>
        A selection of my recent work in UI/UX design and web development
      </p>

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        padding: '2rem 1rem',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        ':before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'repeating-linear-gradient(45deg, var(--manga-accent) 0, var(--manga-accent) 2px, transparent 0, transparent 8px)',
          opacity: 0.1,
          zIndex: -1
        }
      }}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              background: 'white',
              borderRadius: '0',
              overflow: 'hidden',
              border: '3px solid var(--manga-black)',
              boxShadow: '8px 8px 0 var(--manga-accent)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              position: 'relative',
              ':before': {
                content: '""',
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '20px',
                height: '20px',
                background: 'var(--manga-accent)',
                clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                zIndex: 1
              },
              animation: isVisible ? 'cardEntrance 0.8s ease-out forwards' : 'none',
              animationDelay: `${project.id * 0.1}s`,
              ':hover': {
                transform: 'translate(-4px, -4px)',
                boxShadow: '12px 12px 0 var(--manga-accent)'
              }
            }}
          >
            <div style={{
              height: '200px',
              background: 'var(--manga-gray)',
              position: 'relative',
              borderBottom: '3px solid var(--manga-black)',
              overflow: 'hidden',
              ':before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'repeating-linear-gradient(-45deg, transparent 0, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
                zIndex: 1
              }
            }}>
              <img 
                src={project.image} 
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '800',
                marginBottom: '0.5rem',
                color: 'var(--manga-black)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textShadow: '2px 2px 0 var(--manga-accent)'
              }}>
                {project.title}
              </h3>
              <p style={{
                color: 'var(--manga-gray)',
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}>
                {project.description}
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      padding: '0.25rem 0.75rem',
                      background: 'var(--manga-black)',
                      color: 'white',
                      border: '2px solid var(--manga-accent)',
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                      transform: 'rotate(-2deg)',
                      display: 'inline-block'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = document.createElement('style');
styles.textContent = `
  @keyframes cardEntrance {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;
document.head.appendChild(styles);

export default Gallery;
