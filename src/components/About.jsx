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
          <p className="subtitle">Translator & Front-End Developer</p>
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
              Hi there! 👋 I'm Lejla (pronounced Leyla), a passionate Translator & Junior Front-End Developer based in Madrid 🇪🇸. My love for languages and cultures has led me to become fluent in Bosnian/Croatian/Serbian, English, and Spanish. I originally studied translation, and I’m excited to weave my linguistic expertise into the realm of technology.
              </p>
              <p>
              I have a strong foundation in translation and recently completed a Google AI course focused on generative AI, where I also learned about the fascinating intersection of translation and technology. I'm particularly interested in how AI can enhance the translation process, making it more efficient and accessible.
              </p>
              <p>
              Although I'm still on my journey in web development, I'm dedicated to learning HTML, CSS, and JavaScript, with a keen interest in React for creating interactive user interfaces. My portfolio features personal projects that showcase my growth and enthusiasm for both translation and technology.
              </p>
              <p>When I'm not coding or translating, you'll find me exploring floral patterns 🌸, soaking up vibrant colors, and traveling the world to collect unique handmade souvenirs. I also love to cook and enjoy relaxing to jazz music.</p>
              <p>
              Feel free to check out my Projects section to see what I've been working on. I'm excited to connect with fellow language lovers, collaborators, and potential employers who share my passion for translation and technology. 
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
