import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default props => (
        <header className="App-header" id="app-header">
          <div className="header-kids">
          </div>
          <div className="header-kids header-kids-name" id="squiggle-name">
            <Link to="/">squigglewerkz</Link>
          </div>

          <div className="header-kids header-kids-apps">
            <div className="nav-item">
              <Link to="/eight-hours">Eight Hours</Link>
            </div>
            <div className="nav-item">
              <Link to="/ingredients-checker">Ingredients Checker</Link>
            </div>

          </div>

            <div className="nav-item-button">
              <button  className="icon" onClick={props.hideOrShow}>
                <i className="fa fa-bars"></i>
              </button>
            </div>

        </header>


    )

