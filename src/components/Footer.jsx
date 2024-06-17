import React from 'react';
import '../scss/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="container text-center">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/lejla-dzanko/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" className="mx-3" />
          </a>
          <a href="https://github.com/lejladzanko" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="3x" className="mx-3" />
          </a>
        </div>
        <p className="mt-3">&copy; 2024 Lejla Dzanko. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
