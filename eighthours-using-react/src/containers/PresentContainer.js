import React, { Component } from 'react';
import TodayTime from '../components/TodayTime';

class PresentContainer extends Component {
  render() {
    // let nowish = moment().format('hh:mm:ss a')
    return (
      <div className="present-container">
        <TodayTime />
      </div>
    )
  }
}

export default PresentContainer;
