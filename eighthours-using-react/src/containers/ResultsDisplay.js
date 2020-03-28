import React, { Component } from 'react';
import PastContainer from './PastContainer';
import FutureContainer from './FutureContainer';
import PresentContainer from './PresentContainer';
import TodayDate from '../components/TodayDate';

import '../css/result.css';

export default class ResultsDisplay extends Component {

  render() {
    const bday = this.props.match.params.bday;

    return (
      <div className="results-display">

        <div class='flex-container'>
          <TodayDate />
        </div>

        <div class='flex-container'>
          <PastContainer bday={bday} />
        </div>

        <div class='flex-container'>
          <PresentContainer bday={bday} />
        </div>

        <div class='flex-container'>
          <FutureContainer bday={bday} />
        </div>
      </div>
      )
  }
}

