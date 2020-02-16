import React, { Component } from 'react';
import PastContainer from './PastContainer';
import FutureContainer from './FutureContainer';
import PresentContainer from './PresentContainer';

export default class ResultsDisplay extends Component {

  //auto binds the this
  // handleItemClick = (e) => this.props.resetMap()

  render() {
    console.log("results display")
    // const { activeItem } = this.state

    return (
      <div className="results-display">
        <PastContainer />
        <PresentContainer />
        <FutureContainer />
      </div>
      )
  }
}

