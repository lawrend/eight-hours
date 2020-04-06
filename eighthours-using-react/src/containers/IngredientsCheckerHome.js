import React, {Component} from 'react';
import CheckerInputForm from '../components/CheckerInputForm.js';
import CheckerResultsContainer from '../containers/CheckerResultsContainer.js'
import CheckerIngredientResult from '../components/CheckerIngredientResult.js';

class IngredientsCheckerHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingToCheck: "",
    }
  }
  handleChange = (e) => {
    this.setState({ingToCheck: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }


  render() {
    return (
      <div className="ingredients-checker-container">
        <CheckerInputForm ingToCheck={this.state.ingToCheck} onSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <CheckerResultsContainer results={this.state.ingToCheck.toLowerCase().split(', ')}/>
      </div>
      )
  }
}

export default IngredientsCheckerHome;

