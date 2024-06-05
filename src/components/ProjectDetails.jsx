import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import AnimeFinder from '../images/anime-finder.png';
import RickAndMorty from '../images/rick-and-morty.png';
import GroguGame from '../images/grogu.png';
import '../scss/ProjectDetails.scss';

const projects = [
  {
    id: 'anime-finder',
    title: 'Anime Finder',
    description: 'A JavaScript application to search for your favorite anime series.',
    image: AnimeFinder,
    website: 'https://lejladzanko.github.io/AnimeFinder/',
    github: 'https://github.com/lejladzanko/AnimeFinder',
    details: 'Anime Finder is a web application built with JavaScript and the Jikan API. It allows users to search for anime series and view detailed information about each series.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Jikan API'],
    features: ['Search for anime series', 'View detailed information', 'Responsive design'],
    challenges: 'Implementing the search functionality and managing API responses were challenging aspects of this project.',
    learnings: 'Improved skills in API integration and asynchronous JavaScript.'
  },
  {
    id: 'rick-and-morty',
    title: 'Rick and Morty Character Finder',
    description: 'A React application to search for your favorite Rick and Morty characters.',
    image: RickAndMorty,
    website: 'https://lejladzanko.github.io/rickandmorty-character-finder/',
    github: 'https://github.com/lejladzanko/rickandmorty-character-finder',
    details: 'Rick and Morty Character Finder is a React application that allows users to search for characters from the Rick and Morty TV series. It uses the Rick and Morty API to fetch character data.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Rick and Morty API'],
    features: ['Search for characters', 'View character details', 'Responsive design'],
    challenges: 'Managing state and handling API data efficiently were some of the challenges faced.',
    learnings: 'Gained experience in using React hooks and state management.'
  },
  {
    id: 'grogu-game',
    title: 'Watch Out for Grogu',
    description: 'A game where you have to collect the goods before Grogu does.',
    image: GroguGame,
    website: 'https://biancamesa.github.io/grogu-game/',
    github: 'https://github.com/lejladzanko/grogu-game',
    details: 'Watch Out for Grogu is a fun game where the player has to collect items before Grogu does. The game is built with HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: ['Interactive gameplay', 'Responsive design', 'Fun and engaging'],
    challenges: 'Ensuring smooth gameplay and handling user inputs were challenging aspects.',
    learnings: 'Improved skills in JavaScript and game development.'
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section id="project-details" className="project-details container py-5">
      <div className="button-container">
        <button className="btn-back" onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Main Page
        </button>
      </div>
      <h2 className="text-center mb-5">{project.title}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={project.image} className="img-fluid" alt={project.title} />
        </div>
        <div className="col-md-6">
          <p><strong>Description:</strong> {project.details}</p>
          <p><strong>Technologies Used:</strong> {project.technologies.join(', ')}</p>
          <p><strong>Features:</strong></p>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p><strong>Challenges:</strong> {project.challenges}</p>
          <p><strong>Learnings:</strong> {project.learnings}</p>
          <div className="project-icons">
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGlobe} size="2x" className="mx-2" />
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" className="mx-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
