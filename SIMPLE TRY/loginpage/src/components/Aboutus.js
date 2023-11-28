import React from 'react';
import './Aboutus.css'; 
import { CheckCircle, Group, Assignment, EmojiEvents, Star } from '@mui/icons-material'; 
import Navbar from './Navbar';
import { useTheme } from './ThemeContext';
import { Button } from '@mui/material';
const Aboutus = () => {

  const theme=useTheme();
  return (
      <div className="about-us-container" style={{backgroundColor: theme.isDarkMode ? 'black' : 'white',
      color: theme.isDarkMode ? 'white' : 'black',}}>
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <div className="about-us-content">
      <Button
        variant="outlined"
        onClick={theme.toggleTheme}
        style={{
          height: '4em',
          border: '2px solid black',
          borderRadius: '5px',
          backgroundColor: theme.isDarkMode ? 'black' : 'white',
          color: theme.isDarkMode ? 'white' : 'black',
          marginLeft: '10px',
        }}
      >
        Toggle Theme
      </Button>
        <h2>About HireSmart</h2>
        <p>
          Welcome to HireSmart, where we make hiring the right talent easy and efficient for your organization.
        </p>

        <div className="features-section">
          <div id='small'>
          <h3 id='key'>Key Features</h3>
          </div>
         
          <div className="feature-grid">
            <div className="feature">
              <CheckCircle className="icon" />
              <p>Streamlined Process</p>
            </div>
            <div className="feature">
              <Group className="icon" />
              <p>Collaborative Hiring</p>
            </div>
            <div className="feature">
              <Assignment className="icon" />
              <p>Comprehensive Tracking</p>
            </div>
          </div>
          <p>
            Our HireSmart is designed to provide a seamless and collaborative hiring experience. With features like a streamlined process, collaborative hiring, and comprehensive tracking, we ensure that you find and hire the best candidates for your team.
          </p>
        </div>

        <div className="achievements-section">
          <h3>Our Achievements</h3>
          <hr></hr>
          <div className="achievement-item">
            <EmojiEvents className="achievement-icon" />
            <div>
              <p id='para'>Winner of the Best HR Software Award</p>
              <p id='para'>Our HireSmart was recognized as the top-performing HR software, showcasing our commitment to excellence in the industry.</p>
            </div>
          </div>
          <div className="achievement-item">
            <Star className="achievement-icon" />
            <div>
              <p id='para'>Recognized for Innovation in Recruitment Technology</p>
              <p id='para'>We received the Innovation Trophy for our groundbreaking advancements in recruitment technology, setting new standards for the industry.</p>
            </div>
          </div>
          <div className="achievement-item">
            <Star className="achievement-icon" />
            <div>
              <p id='para'>Global Impact Award</p>
              <p id='para'>Our HireSmart made a global impact, earning us the prestigious Global Impact Award for our contribution to the HR and recruitment landscape.</p>
            </div>
          </div>
          
          
        </div>

        <p>
          Thank you for choosing HireSmart. We are committed to delivering a modern and effective ATS to meet your recruitment needs.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;