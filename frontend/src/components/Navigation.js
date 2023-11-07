import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/" className="nav-button">
        Home
      </Link>
      <Link to="/about" className="nav-button">
        About Me
      </Link>
      <Link to="/login" className="nav-button">
        Login
      </Link>
      <p className="nav-text"> Click on the navigation buttons to go to a different page</p>
    </div>
  );
};

export default Navigation;