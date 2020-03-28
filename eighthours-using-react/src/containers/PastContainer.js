import React, { Component } from 'react';
import BirthTime from '../components/BirthTime.js';

class PastContainer extends Component {
  render() {
    return (
      <div className="past-container">
        <BirthTime bday={this.props.bday}/>
      </div>
    )
  }
}

export default PastContainer;
