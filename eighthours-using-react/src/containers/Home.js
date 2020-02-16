import React, { Component } from 'react';
import BdayInput from '../components/BdayInput.js'
import TodayTime from '../components/TodayTime.js'
import TodayDate from '../components/TodayDate.js'
import { Link } from 'react-router-dom';

class Home extends Component {
constructor(props) {
    super(props)
    this.state = {
      bday: 'MM/DD/YYYY',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.value);
  }
  render() {
    return (
      <div className='home'>
      <BdayInput bday={this.state.bday} onsubmit={this.handleSubmit}/>
      <Link to="/results">
        RESULTS
      </Link>
    </div>

      )
  }
}
export default Home;
