import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

export default props => (
  <div className="home-container">
    <div className="home-kid"><Link to="/eight-hours">8 Hours</Link></div>
    <div className="home-kid"><Link to="/ingredients-checker">Ingredients Checker</Link></div>
</div>

  )

