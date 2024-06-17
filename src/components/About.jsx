import React, { useState } from "react";
import "../scss/About.scss";
import profilePic from "../images/Lejla-photo.png";
import washiTape from "../images/washi_tape.webp"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLanguage,
  faLaptopCode,
  faPalette,
  faSeedling,
  faPlaneDeparture,
  faUtensils,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [activeTab, setActiveTab] = useState("bio");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="profile">
      <div className="profile-header">
        <div className="section__pic-container">
          <img
            className="profile-picture"
            src={profilePic}
            alt="profile-picture"
          />
          <img
            className="washi-tape"
            src={washiTape}
            alt="washi-tape"
          />
        </div>
        <div className="section__text">
          <h1 className="title">Lejla Dzanko</h1>
          <p className="subtitle">Front-end Developer & Translator</p>
        </div>
      </div>
      <div className="profile-content">
        <div className="tabs">
          <button
            className={
              activeTab === "bio" ? "btn-bio-active" : "btn-bio"
            }
            onClick={() => handleTabClick("bio")}
          >
            Bio
          </button>
          <button
            className={
              activeTab === "skills" ? "btn-skills-active" : "btn-skills"
            }
            onClick={() => handleTabClick("skills")}
          >
            Skills
          </button>
          <button
            className={
              activeTab === "interests" ? "btn-interests-active" : "btn-interests"
            }
            onClick={() => handleTabClick("interests")}
          >
            Interests
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "bio" && (
            <div className="content">
              <p>
                Hi there! 👋 I'm Lejla (pronounced Leyla), a junior front-end
                developer based in Madrid 🇪🇸. My love for languages has led me
                to become fluent in Bosnian/Croatian/Serbian, English, and
                Spanish. While I originally studied translation and English, I
                recently discovered a new passion for web development.
              </p>
              <p>
                Although I'm new to the field, I've been dedicatedly learning
                HTML, CSS, and JavaScript, and have been particularly drawn to
                React for building interactive user interfaces. I'm enthusiastic
                about creating visually appealing and user-friendly websites,
                and I'm eager to bring my skills into a professional setting. I
                may not have formal work experience in web development yet, but
                I'm confident in my abilities and committed to continuous
                learning and growth. My portfolio includes personal projects
                that showcase my progress and passion for front-end development.
              </p>
              <p>
                Outside of coding, I enjoy everything floral 🌸, love vibrant
                colors, and am an avid traveler and collector of handmade
                souvenirs. I also enjoy cooking, and jazz music. 
              </p>
              <p>
                Please take a look at my Projects section to see what I've been
                working on. I'm excited to connect with potential collaborators
                or employers who can help me kickstart my career in web
                development. Let's connect and create something wonderful
                together!
              </p>
            </div>
          )}
          {activeTab === "skills" && (
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
                <FontAwesomeIcon icon={faPalette} size="2x" />
                <p>Design & UX</p>
              </div>
              <div className="skill">
                <FontAwesomeIcon icon={faLanguage} size="2x" />
                <p>Translation</p>
              </div>
            </div>
          )}
          {activeTab === "interests" && (
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
                <FontAwesomeIcon icon={faUtensils} size="2x" />
                <p>Cooking</p>
              </div>
              <div className="interest">
                <FontAwesomeIcon icon={faMusic} size="2x" />
                <p>Jazz</p>
              </div>
            </div>
          )}
        </div>
        <div className="btn-container">
          <button
            className="btn-download-cv"
            onClick={() => window.open("./public/DzankoLejla-CV.pdf")}
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
