import React, { Component } from 'react';
import moment from 'moment';
import DeathTime from '../components/DeathTime.js';

class FutureContainer extends Component {

  calculateDeath = (bday) => {
  const bdayMoment = moment(bday, "MM/DD/YYYY");
  const daysAgo = bdayMoment.diff(moment(), 'days')
  const remainingTime = 28800 + daysAgo;
  const diedtime = moment().add(remainingTime, 'seconds').format("h:mm:ss a")
    return diedtime;
  }

  render() {
    return (
      <div className="future-container">
        <DeathTime diedtime={this.calculateDeath(this.props.bday)} />
      </div>
    )
  }
}

export default FutureContainer;
