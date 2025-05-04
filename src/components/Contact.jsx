import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'service_ggk4xbb', // Replace with your EmailJS service ID
      'template_78me4tj', // Replace with your EmailJS template ID
      form.current,
      'Z_J5n3HL0aueHiZLL' // Replace with your EmailJS public key
    )
      .then((result) => {
        setStatus('Message sent successfully!');
        form.current.reset();
        setTimeout(() => setStatus(''), 3000);
      }, (error) => {
        setStatus('Failed to send message. Please try again.');
        setTimeout(() => setStatus(''), 3000);
      });
  };

  return (
    <section className="contact" id='Contact' style={{
      padding: '6rem 1rem',
      background: 'var(--manga-white)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'white',
        padding: '3rem',
        border: '3px solid var(--manga-black)',
        boxShadow: '8px 8px 0 var(--manga-accent)',
        position: 'relative'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '900',
          textAlign: 'center',
          marginBottom: '2rem',
          color: 'var(--manga-black)',
          textTransform: 'uppercase',
          textShadow: '3px 3px 0 var(--manga-accent)'
        }}>
          Let's Connect!
        </h2>

        <form ref={form} onSubmit={sendEmail} style={{ display: 'grid', gap: '1.5rem' }}>
          <div>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              style={{
                width: '100%',
                padding: '1rem',
                border: '2px solid var(--manga-black)',
                background: 'white',
                fontSize: '1rem',
                transform: 'skew(-2deg)',
                boxShadow: '4px 4px 0 var(--manga-accent)',
                color:'var(--manga-black)'
              }}
            />
          </div>
          <div>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              style={{
                width: '100%',
                padding: '1rem',
                border: '2px solid var(--manga-black)',
                background: 'white',
                fontSize: '1rem',
                transform: 'skew(-2deg)',
                boxShadow: '4px 4px 0 var(--manga-accent)',
                color:'var(--manga-black)'
              }}
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              style={{
                width: '100%',
                padding: '1rem',
                border: '2px solid var(--manga-black)',
                background: 'white',
                fontSize: '1rem',
                transform: 'skew(-2deg)',
                boxShadow: '4px 4px 0 var(--manga-accent)',
                color:'var(--manga-black)',
                resize: 'vertical'
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              padding: '1rem 2rem',
              background: 'var(--manga-accent)',
              color: 'white',
              border: '2px solid var(--manga-black)',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              transform: 'skew(-5deg)',
              boxShadow: '4px 4px 0 var(--manga-black)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              ':hover': {
                transform: 'skew(-5deg) translate(-2px, -2px)',
                boxShadow: '6px 6px 0 var(--manga-black)'
              }
            }}
          >
            Send Message
          </button>
          {status && (
            <div style={{
              textAlign: 'center',
              color: status.includes('success') ? '#4CAF50' : '#f44336',
              fontWeight: 'bold',
              transform: 'skew(-2deg)',
              padding: '0.5rem'
            }}>
              {status}
            </div>
          )}
        </form>

        <div style={{
          marginTop: '3rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem'
        }}>
          <a href="mailto:your.email@example.com" style={{
            color: 'var(--manga-black)',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            📧 shashankgupt4068@gmail.com
          </a>
          <a href="tel:+1234567890" style={{
            color: 'var(--manga-black)',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            📞 8956730349
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;