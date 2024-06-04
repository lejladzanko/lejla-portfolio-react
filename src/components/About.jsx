import React, { useState } from 'react';
import '../scss/About.scss';
import profilePic from '../images/Lejla-photo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLanguage, faLaptopCode, faPalette, faSeedling, faPlaneDeparture, faUtensils, faMusic, faGifts, faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="profile">
      <div className="profile-header">
        <div className="section__pic-container">
          <img className="profile-picture" src={profilePic} alt="profile-picture" />
        </div>
        <div className="section__text">
          <h1 className="title">Lejla Dzanko</h1>
          <p className="subtitle">Front-end Developer</p>
        </div>
      </div>
      <div className="profile-content">
        <div className="tabs">
          <button className={activeTab === 'bio' ? 'btn-primary' : 'btn-outline-primary'} onClick={() => handleTabClick('bio')}>
            Bio
          </button>
          <button className={activeTab === 'skills' ? 'btn-primary' : 'btn-outline-primary'} onClick={() => handleTabClick('skills')}>
            Skills
          </button>
          <button className={activeTab === 'interests' ? 'btn-primary' : 'btn-outline-primary'} onClick={() => handleTabClick('interests')}>
            Interests
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'bio' && (
            <div className="content">
              <p>Hola! I'm Lejla (pronounced as Leyla), a dedicated Front-end Developer based in Madrid 🇪🇸. With a strong background in languages, I'm fluent in Bosnian/Croatian/Serbian, English, and Spanish 🌍. I transitioned from a career in translation and English studies to web programming, where I discovered my passion for design and user experience 💻.</p>
              <p>My expertise includes building responsive and user-friendly web applications. I'm proficient in HTML, CSS, and JavaScript, with extensive experience in React. My projects reflect my commitment to creating seamless and engaging user experiences.</p>
              <p>I'm excited about new opportunities where I can contribute my skills and creativity to innovative projects. Let's connect and see how we can collaborate to achieve your goals!</p>
            </div>
          )}
          {activeTab === 'skills' && (
            <div className="skills-content">
              <div className="skill">
                <FontAwesomeIcon icon={faCode} size="2x" />
                <p>HTML & CSS</p>
              </div>
              <div className="skill">
                <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                <p>JavaScript</p>
              </div>
              <div className="skill">
                <FontAwesomeIcon icon={faLanguage} size="2x" />
                <p>Translation</p>
              </div>
              <div className="skill">
                <FontAwesomeIcon icon={faPalette} size="2x" />
                <p>Design & UX</p>
              </div>
            </div>
          )}
          {activeTab === 'interests' && (
            <div className="interests-content">
              <div className="interest">
                <FontAwesomeIcon icon={faSeedling} size="2x" />
                <p>Flowers</p>
              </div>
              <div className="interest">
                <FontAwesomeIcon icon={faPalette} size="2x" />
                <p>Colors</p>
              </div>
              <div className="interest">
                <FontAwesomeIcon icon={faPlaneDeparture} size="2x" />
                <p>Travel</p>
              </div>
              <div className="interest">
                <FontAwesomeIcon icon={faGifts} size="2x" />
                <p>Handmade Souvenirs</p>
              </div>
              <div className="interest">
                <FontAwesomeIcon icon={faUtensils} size="2x" />
                <p>Cooking</p>
              </div>
              <div className="interest">
                <FontAwesomeIcon icon={faMusic} size="2x" />
                <p>Jazz</p>
              </div>
              <div className="interest">
                <FontAwesomeIcon icon={faMicrophoneAlt} size="2x" />
                <p>Harry Styles</p>
              </div>
            </div>
          )}
        </div>
        <div className="btn-container">
          <button className="btn btn-primary" onClick={() => window.open('./assets/DzankoLejla-CV.pdf')}>
            Download CV
          </button>
          <button className="btn btn-outline-primary" onClick={() => window.location.href = '#contact'}>
            Contact Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
