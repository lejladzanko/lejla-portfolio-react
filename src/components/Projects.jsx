import React, { useState } from "react";
import "../scss/Projects.scss";
import AnimeFinder from "../images/anime-finder.png";
import RickAndMorty from "../images/rick-and-morty.png";
import GroguGame from "../images/grogu.png";
import Pawsome from "../images/pawsome.png";
import Paintones from "../images/paintones.png";
import GuesstheNumber from "../images/guessthenumber.png";
import Vjeverica from "../images/vjeverica_cover.jpeg";
import Rakun from "../images/rakun_cover.jpeg";
import Lisac from "../images/lisac_cover.jpeg";
import Poljekruški from "../images/PoljeKruski.png";
import Crnileptiri from "../images/crnileptiri_cover.png";
import PiedraPermanece from "../images/piedra_cover.jpeg";
import WashiTape from "../images/washitape2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const webProjects = [
  {
    id: "anime-finder",
    title: "Anime Finder",
    description:
      "A JavaScript application to search for your favorite anime series.",
    image: AnimeFinder,
    website: "https://lejladzanko.github.io/AnimeFinder/",
    github: "https://github.com/lejladzanko/AnimeFinder",
  },
  {
    id: "rick-and-morty",
    title: "Rick and Morty Character Finder",
    description:
      "A React application to search for your favorite Rick and Morty characters.",
    image: RickAndMorty,
    website: "https://lejladzanko.github.io/rickandmorty-character-finder/",
    github: "https://github.com/lejladzanko/rickandmorty-character-finder",
  },
  {
    id: "grogu-game",
    title: "Watch Out for Grogu",
    description:
      "A React game where you have to collect the goods before Grogu does.",
    image: GroguGame,
    website: "https://biancamesa.github.io/grogu-game/",
    github: "https://github.com/lejladzanko/grogu-game",
  },

  {
    id: "pawsome-cards",
    title: "Pawsome Profile Cards",
    description:
      "A JavaScript website with which you can create your own business card and share it on Twitter.",
    image: Pawsome,
    website: "https://victoriagz.github.io/project-promo-w-module-2-team-3/",
    github: "https://github.com/lejladzanko/project-promo-w-module-2-team-3",
  },

  {
    id: "proyectos-paintones",
    title: "Proyectos Paintones",
    description:
      "A React website with which you can create your own project card.",
    image: Paintones,
    website: "https://lejladzanko.github.io/project-promo-W-module-3-team-2/",
    github: "https://github.com/lejladzanko/project-promo-W-module-3-team-2",
  },

  {
    id: "guess-the-number",
    title: "Guess the number",
    description:
      "A JavaScript game in which you have to guess the number with the help of hints.",
    image: GuesstheNumber,
    website: "https://lejladzanko.github.io/AdivinaElNumero/",
    github: "https://github.com/lejladzanko/AdivinaElNumero",
  },
];

const translationProjects = [
  {
    id: "adult-book-3",
    title: "La piedra permanece",
    description: "Original Title: La piedra permanece by Marc Casals",
    image: PiedraPermanece, 
    purchaseLink: "https://www.librosdelko.com/products/la-piedra-permanece", 
    translationInfo: "Currently translating from Spanish to Bosnian",
  },
  {
    id: "adult-book-2",
    title: "Crni leptiri",
    description: "Original Title: Black Butterflies by Priscilla Morris",
    image: Crnileptiri,
    purchaseLink: "https://buybook.ba/proizvod/crni-leptiri-5643",
    translationInfo: "Translated from English to Bosnian, 2023",
  },
  {
    id: "adult-book-1",
    title: "Polje kruški",
    description: "Original Title: The Pear Field by Nana Ekvtimishvili",
    image: Poljekruški,
    purchaseLink: "https://buybook.ba/proizvod/polje-kruski-5301",
    translationInfo: "Translated from English to Bosnian, 2022",
  },
  {
    id: "child-book-1",
    title: "Vjeverica ne zna reći ne",
    description: "Original Title: Ardilla no sabe decir que no by Susanna Isern",
    image: Vjeverica,
    purchaseLink: "https://buybook.ba/proizvod/vjeverica-ne-zna-reci-ne-5644",
    translationInfo: "Translated from English to Bosnian, 2023",
  },
  {
    id: "child-book-2",
    title: "Rakun uvijek želi biti prvi",
    description: "Original Title: Mapache quiere ser el primero by Susanna Isern",
    image: Rakun,
    purchaseLink: "https://buybook.ba/proizvod/rakun-uvijek-zeli-biti-prvi-5645",
    translationInfo: "Translated from Spanish to Bosnian, 2023",
  },
  {
    id: "child-book-3",
    title: "Lisac lažljivac",
    description: "Original Title: Zorro dice mentiras by Susanna Isern",
    image: Lisac,
    purchaseLink: "https://buybook.ba/proizvod/lisac-lazljivac-5646",
    translationInfo: "Translated from Spanish to Bosnian, 2023",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section id="projects" className="projects container py-5">
      <img src={WashiTape} className="washitape2" alt="Washi Tape" />
      <h2 className="text-center mb-5">Projects</h2>
      <div className="text-center mb-4">
        <button
          className={`btn btn-primary mx-2 ${
            activeTab === "web" ? "active" : ""
          }`}
          onClick={() => setActiveTab("web")}
        >
          Web 
        </button>
        <button
          className={`btn btn-primary mx-2 ${
            activeTab === "translation" ? "active" : ""
          }`}
          onClick={() => setActiveTab("translation")}
        >
          Translation 
        </button>
      </div>
      <div className="row">
        {activeTab === "web"
          ? webProjects.map((project, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card project-card">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="project-icons">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faGlobe}
                          size="2x"
                          className="mx-2"
                        />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          size="2x"
                          className="mx-2"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : translationProjects.map((project, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <a
                  href={project.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card project-card"
                >
                  <img
                    src={project.image}
                    className={`card-img-top ${project.id === "adult-book-3" || project.id === "adult-book-2" ? 'adjusted-size' : ''}`} 
                    alt={project.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <small>{project.translationInfo}</small>
                  </div>
                </a>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Projects;
