import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import smileySticker from '../images/smiley.png';  
import '../scss/Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact container py-5">
      <h2 className="text-center mb-5">Say Hi! 👋</h2>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <img src={smileySticker} className="smiley-sticker" alt="Smiley Sticker" />
    </section>
  );
};

export default Contact;
