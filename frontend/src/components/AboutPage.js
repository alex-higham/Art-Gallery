import React from 'react';
import '../about.css';

const AboutPage = () => {
  return (
    <div className="about">
      <h1 className="about-header">About Me</h1>
      <p>My name is Neuartify, and I developing my skills in stable diffusion to create future web comics.
         I've uploaded most of my artwork to my Instagram account, but wanted to host my own website so anyone
         could use the artwork I created if they want for their own projects.          
      </p>
      <div className="social-links">
      <a href="https://www.instagram.com/neuartify" target="_blank" rel="noopener noreferrer">
          <button className="instagram-button">
            <img src="/instagram.jpg" alt="Instagram" />
            Follow on Instagram
          </button>
        </a>
      </div>
    </div>
  );
};

export default AboutPage;