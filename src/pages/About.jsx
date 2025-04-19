import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Snowfall from 'react-snowfall';

function About() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="about-container">
      <Snowfall snowflakeCount={100} className="snowfall-fixed" />
      <div className="about-content">
        <h1>About Me</h1>
        <p>Hello! I'm Ali Deyhimi. I'm a passionate web developer, specializing in frontend development.
          I love building web applications using the latest technologies such as React, 
          JavaScript, HTML, CSS, and more. I am constantly improving my 
          skills and learning new tools to stay updated in the tech industry.</p>
        <p><strong>My Journey:</strong> I started my career in technology with computer science studies and continued to explore web development.
         My goal is to create seamless and user-friendly applications that make a difference in people's lives.</p>
        <p>Click the button below to contact me:</p>
        <Button variant="contained" color="primary" onClick={handleContactClick} className="contact-button">
          Contact me
        </Button>
      </div>
    </div>
  );
}

export default About;
