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
    </div>
  );
};

export default Navigation;