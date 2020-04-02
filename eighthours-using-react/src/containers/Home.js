import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default props => (

  <div className='home'>
    <Link to="/eight-hours">Eight Hours</Link><br />
    <Link to="/ingredients-checker">Ingredients Checker</Link>
  </div>
  )

