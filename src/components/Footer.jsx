import React from 'react';

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Projects', 'Contact'];
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Shashank23codes',
      
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shashank-gupta-238a96209/',
      
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shashan_gupta/',
    }
  ];

  return (
    <footer className="manga-footer" style={{
      padding: '4rem 2rem',
      background: 'var(--manga-black)',
      color: 'var(--manga-white)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="footer-content" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem',
        position: 'relative',
        zIndex: 1
      }}>
        <QuickLinks links={quickLinks} />
        <SocialConnect socials={socialLinks} />
        <Newsletter />
      </div>

      <Copyright />
    </footer>
  );
};

const QuickLinks = ({ links }) => (
  <div>
    <h3 className="footer-heading">Quick Links</h3>
    <ul className="footer-links">
      {links.map((link) => (
        <li key={link}>
          <a href={`#${link.toLowerCase()}`}>→ {link}</a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialConnect = ({ socials }) => (
  <div>
    <h3 className="footer-heading">Connect</h3>
    <div className="social-links">
      {socials.map((social) => (
        <a 
          key={social.name} 
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          {social.icon} {social.name}
        </a>
      ))}
    </div>
  </div>
);

const Newsletter = () => (
  <div>
    <h3 className="footer-heading">Newsletter</h3>
    <div className="newsletter-form">
      <input
        type="email"
        placeholder="Enter your email"
        className="newsletter-input"
      />
      <button className="newsletter-button">Subscribe</button>
    </div>
  </div>
);

const Copyright = () => (
  <div className="copyright">
    <p>© 2025 Shashank's Portfolio. All rights reserved.</p>
  </div>
);

export default Footer;