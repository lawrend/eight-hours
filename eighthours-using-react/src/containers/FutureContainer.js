import React, { Component } from 'react';
import DeathTime from '../components/DeathTime.js';


class FutureContainer extends Component {
  render() {
    return (
      <div className="future-container">
        <DeathTime bday={this.props.bday} />
      </div>
    )
  }
}

export default FutureContainer;
