import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => (
  <div className="project">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
    <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
  </div>
);

export default Project;


