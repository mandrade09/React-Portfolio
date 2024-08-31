// src/components/Project.jsx
import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => {
    return (
      <div className="project">
        <h3>{title}</h3>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="project-img" />
        </a>
        <br></br>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
      </div>
    );
  };

export default Project;
