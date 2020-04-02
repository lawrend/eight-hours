import React, { Component } from 'react';
import BdayInput from '../components/BdayInput.js'
import { Link } from 'react-router-dom';

class EightHoursContainer extends Component {
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

      <div className='eight-hours-header'>
        <header className="App-header">
          <p>
            Each Second is a Day
          </p>
        </header>

        <BdayInput bday={this.state.bday} onSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <div className="footer">
          <Link to="/ingredients-checker">Ingredients Checker</Link>
          <br /><Link to="/">Home</Link>
        </div>
      </div>

      )
  }
}
export default EightHoursContainer;

