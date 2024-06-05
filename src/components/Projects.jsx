import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Projects.scss';
import AnimeFinder from '../images/anime-finder.png';
import RickAndMorty from '../images/rick-and-morty.png';
import GroguGame from '../images/grogu.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    id: 'anime-finder',
    title: 'Anime Finder',
    description: 'A JavaScript application to search for your favorite anime series.',
    image: AnimeFinder,
    website: 'https://lejladzanko.github.io/AnimeFinder/',
    github: 'https://github.com/lejladzanko/AnimeFinder'
  },
  {
    id: 'rick-and-morty',
    title: 'Rick and Morty Character Finder',
    description: 'A React application to search for your favorite Rick and Morty characters.',
    image: RickAndMorty,
    website: 'https://lejladzanko.github.io/rickandmorty-character-finder/',
    github: 'https://github.com/lejladzanko/rickandmorty-character-finder'
  },
  {
    id: 'grogu-game',
    title: 'Watch Out for Grogu',
    description: 'A game where you have to collect the goods before Grogu does.',
    image: GroguGame,
    website: 'https://biancamesa.github.io/grogu-game/',
    github: 'https://github.com/lejladzanko/grogu-game'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects container py-5">
      <h2 className="text-center mb-5">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Link to={`/project/${project.id}`} className="card project-card">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="project-icons">
                  <FontAwesomeIcon icon={faGlobe} size="2x" className="mx-2" />
                  <FontAwesomeIcon icon={faGithub} size="2x" className="mx-2" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
