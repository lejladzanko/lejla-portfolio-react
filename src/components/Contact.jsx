import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import smileySticker from '../images/smiley.png';  
import '../scss/Contact.scss';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  }); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/myzygwol", {
      method: "POST",
      headers: {
        "Accept": "application/json", 
      },
      body: JSON.stringify(formData), 
    });

    if (response.ok) {
      setIsSubmitted(true); 
      setFormData({ name: '', email: '', message: '' }); 
    }
  };

  return (
    <section id="contact" className="contact container py-5">
      <h2 className="text-center mb-5">Say Hi! 👋</h2>
      <div className="contact-form">
        {isSubmitted ? (
          <p>Thank you for your message! I'll get back to you soon.</p> 
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
      <img src={smileySticker} className="smiley-sticker" alt="Smiley Sticker" />
    </section>
  );
};

export default Contact;
