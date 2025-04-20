import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Snowfall from 'react-snowfall';

function Home() {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <div className="about-container">
      <Snowfall snowflakeCount={100} className="snowfall-fixed" />
      <div className="about-content">
        <h1>Welcome to My Portfolio</h1>
        <p>This is my personal website where I showcase my projects and skills as a frontend developer.</p>
        <p>Feel free to explore and learn more about me!</p>
        <Button variant="contained" color="primary" onClick={handleAboutClick} className="contact-button">
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default Home;
