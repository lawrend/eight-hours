import React, { Component } from 'react';
import BdayInput from '../components/BdayInput.js'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bday: '',
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
      </div>

      )
  }
}
export default Home;

