import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TodayDate from '../components/TodayDate.js';

class IngredientsCheckerHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingToCheck: "",
    }
  }


  render() {
    console.log("da fook")
    return (
      <div className="ingredients-checker-home">
        <h1>HEY</h1>
       <TodayDate />
        <div className="footer">What</div>
      </div>
    )
  }
}

export default IngredientsCheckerHome;
