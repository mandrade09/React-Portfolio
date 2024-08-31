// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

import weatherDashboardImg from './assets/images/Weather-Dashboard-Screenshot.jpeg';
import employeePayrollImg from './assets/images/Employee-Payroll-Tracker-Screenshot-1.jpg';
import personalBlogImg from './assets/images/Blog Post Screenshot 1.jpeg';
import taskBoardImg from './assets/images/Task Board Screenshot 3.jpeg';


import './styles.css';

import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <section id="about-me">
          <h2>About Me</h2>
          {/* <img src="/path/to/your/photo.jpg" alt="Developer" /> */}
          <p>My name is Matthew Andrade, a Salvadoran American, Los Angeles-based professional with experience spanning criminal, intellectual property, and appellate law, and with a deep passion for technology, advocacy, and academia.
                Now I am enrolled in the University of California, Berkeley's Coding Boot Camp. Beyond my professional endeavors, I enjoy immersing myself in different cultures, exploring new hobbies, building connections, and staying active through sports and volunteer work.
                <br></br>Hope you enjoy.</p>
        </section>

        <section id="portfolio">
          <h2>Portfolio</h2>
          
          <Project
            title="Weather Dashboard"
            image={weatherDashboardImg}
            deployedLink="https://mandrade09.github.io/Weather-Dashboard/"
            repoLink="https://github.com/mandrade09/Weather-Dashboard"
          />
          {/* Repeat <Project /> for other projects */}

          <Project
            title="Employee Payroll Tracker"
            image={employeePayrollImg}
            deployedLink="https://mandrade09.github.io/Employee-Payroll-Tracker/"
            repoLink="https://github.com/mandrade09/Employee-Payroll-Tracker"
          />

          <Project
            title="Personal Blog Web APIs"
            image={personalBlogImg}
            deployedLink="https://mandrade09.github.io/Personal-Blog-Web-APIs-/"
            repoLink="https://github.com/mandrade09/Personal-Blog-Web-APIs-"
          />

          <Project
            title="Task Board"
            image={taskBoardImg}
            deployedLink="https://mandrade09.github.io/Task-Board/"
            repoLink="https://github.com/mandrade09/Task-Board"
          />

        </section>

        <section id="contact">
        <h2>Contact</h2>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </section>

        <section id="resume">
          <h2>Resume (coming soon) </h2>
          {/* <a href="/path/to/resume.pdf" download>Download Resume</a> */}
          <ul>
            {/* <li>Javascript</li>
            <li>Express</li>
            <li>React</li> */}
            {/* List other proficiencies */}
          </ul>
        </section>
      </main>
      <Footer />
    </Router>
  );
};


export default App;

