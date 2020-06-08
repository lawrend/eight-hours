// page holding links to other pages like eight hours and ingredients checker
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

export default props => (
  <div>
  <div className="home-border-top">
  </div>
  <div className="home-container home-eight-hours">
    <div className="home-kid"><Link to="/eight-hours">EIGHT HOURS</Link></div>
  </div>
  <div className="home-container home-ingredients-checker">
    <div className="home-kid"><Link to="/ingredients-checker">INGREDIENTS CHECKER</Link></div>
</div>
  </div>

  )

