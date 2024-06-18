import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Homepage() {
  return (
    <div className='image'>
      <div className="container">
        <h1 className="heading">Welcome to Food Redistribution App</h1>
        <p className="description">Reduce food waste by connecting restaurants with NGOs!</p>
        <div className="button-container">
          <Link to="/restaurant/login">
            <button className="button">Restaurant</button>
          </Link>
          <Link to="/ngo/login">
            <button className="button">NGO</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
