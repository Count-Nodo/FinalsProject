

import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
  let navigate=useNavigate();
    return (
        <div className="about-container">
            <h2 className="about-title">About Us</h2>
            <p className="about-content">
                This Website was created as a Finals Project for React and as a person who loves history decided to create this for other histroy lovers like me.
            </p>
            <p className="about-content">
                To send a random and fun histroy fact click down this button
            </p>
            <button onClick={()=>{navigate('../Register')}}>Join us and send a fun history fact</button>
            
        </div>
    );
};

export default About;
