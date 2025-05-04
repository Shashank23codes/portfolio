import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: 'Design',
      items: ['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Figma', 'Adobe XD']
    },
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Animation']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'VS Code', 'Webpack', 'Node.js', 'REST APIs', 'Agile']
    }
  ];

  return (
    <section className="skills" id='Skills' style={{
      padding: '6rem 1rem',
      background: 'var(--manga-white)',
      position: 'relative'
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
        Skills & Expertise
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {skills.map((skillGroup, index) => (
          <div key={index} style={{
            background: 'white',
            border: '3px solid var(--manga-black)',
            boxShadow: '8px 8px 0 var(--manga-accent)',
            padding: '2rem',
            transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '800',
              marginBottom: '1.5rem',
              color: 'var(--manga-black)',
              textAlign: 'center',
              borderBottom: '3px solid var(--manga-accent)',
              paddingBottom: '0.5rem'
            }}>
              {skillGroup.category}
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              {skillGroup.items.map((skill, skillIndex) => (
                <span key={skillIndex} style={{
                  padding: '0.5rem 1rem',
                  background: 'var(--manga-accent)',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  transform: `rotate(${Math.random() * 3 - 1.5}deg)`,
                  border: '2px solid var(--manga-black)',
                  boxShadow: '3px 3px 0 var(--manga-black)',
                  display: 'inline-block'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;