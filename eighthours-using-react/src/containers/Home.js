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

  handleChange = (e) => {
    this.setState({bday: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div className='home'>
      <BdayInput bday={this.state.bday} onSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      <Link to={`results/${this.state.bday}`}>
        RESULTS
      </Link>
    </div>

      )
  }
}
export default Home;
