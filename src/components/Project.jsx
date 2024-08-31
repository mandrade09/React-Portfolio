import React from 'react';

function Project({ title, image, deployedUrl, githubUrl }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={`${title} screenshot`} />
      </a>
      <p>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          View Code on GitHub
        </a>
      </p>
    </div>
  );
}

export default Project;

