import React from 'react';
import Project from '../components/Project';

import blogImage from '../assets/images/Blog Post Screenshot 1.jpeg';
import payrollImage from '../assets/images/Employee-Payroll-Tracker-Screenshot-1.jpg';
import taskImage from '../assets/images/Task Board Screenshot 3.jpeg';
import weatherImage from '../assets/images/Weather-Dashboard-Screenshot.jpeg';

function Portfolio() {
  const projects = [
    {
      title: 'Employee Payroll Tracker',
      image: payrollImage,
      deployedLink: 'https://mandrade09.github.io/Employee-Payroll-Tracker/',
      repoLink: 'https://github.com/mandrade09/Employee-Payroll-Tracker'
    },
    {
      title: 'Personal Blog Web APIs',
      image: blogImage,
      deployedLink: 'https://mandrade09.github.io/Personal-Blog-Web-APIs-/',
      repoLink: 'https://github.com/mandrade09/Personal-Blog-Web-APIs-'
    },
    {
      title: 'Task Board',
      image: taskImage,
      deployedLink: 'https://mandrade09.github.io/Task-Board/',
      repoLink: 'https://github.com/mandrade09/Task-Board'
    },
    {
      title: 'Weather Dashboard',
      image: weatherImage,
      deployedLink: 'https://mandrade09.github.io/Weather-Dashboard/',
      repoLink: 'https://github.com/mandrade09/Weather-Dashboard'
    }
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;


