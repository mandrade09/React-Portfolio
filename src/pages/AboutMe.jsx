import React from 'react';
import profilePicture from '../assets/images/your-profile-picture.jpg';

function AboutMe() {
    return (
        <section>
            <h2>About Me</h2>
            <img src={profilePicture} alt="Your Name" />
            <p>My name is Matthew Andrade, a Salvadoran American, Los Angeles-based attorney with experience spanning criminal, intellectual property, and appellate law, and with a deep passion for technology, advocacy, and academia.
                I am licensed to practice law in California, and I received my Juris Doctor from the Pepperdine University Caruso School of Law, where I served on the Pepperdine Law Review and Trial Team.  Now I am enrolled in the University of California, Berkeley's Coding Boot Camp. Beyond my professional endeavors, I enjoy immersing myself in different cultures, exploring new hobbies, building connections, and staying active through sports and volunteer work.
                Hope you enjoy.</p>
        </section>
    );
}

export default AboutMe;



