import React, { Component } from 'react';
import moment from 'moment';
import BirthTime from '../components/BirthTime.js';

class PastContainer extends Component {

  calculateBirth = (bday) => {
    const bdayMoment = moment(bday, "MM/DD/YYYY");
    const daysAgo = bdayMoment.diff(moment(), 'days')
    console.log("days ago: " + daysAgo)

    const birthtime = moment().add(daysAgo, 'seconds').format('h:mm:ss a')
    return birthtime;
  }


  render() {
    return (
      <div className="past-container">
        <BirthTime birthtime={this.calculateBirth(this.props.bday)}/>
      </div>
      )
  }
}

export default PastContainer;
