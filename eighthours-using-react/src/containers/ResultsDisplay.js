import React, { Component } from 'react';
import PastContainer from './PastContainer';
import FutureContainer from './FutureContainer';
import PresentContainer from './PresentContainer';
import { Link } from 'react-router-dom';
import '../css/result.css';

export default class ResultsDisplay extends Component {

  render() {
    const bday = this.props.match.params.month + "/" + this.props.match.params.day + "/" + this.props.match.params.year;

    return (
      <div className="results-display">
        <div className='flex-container'>
          <PresentContainer bday={bday} />
        </div>

        <div className='flex-container'>
          <PastContainer bday={bday} />
        </div>

        <div className='flex-container'>
          <FutureContainer bday={bday} />
        </div>

        <div className='flex-container'>
          <Link to={"/"}>Home</Link>
        </div>

      </div>
      )
  }
}

