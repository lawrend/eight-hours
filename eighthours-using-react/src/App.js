import React, {Component} from 'react';
import Routes from './routes';
import HeaderContainer from './containers/HeaderContainer.js';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  hideOrShow = () => {
    let x = document.getElementById("app-header")
    if (x.className === "App-header") {
      x.className += " responsive";
    } else {
      x.className = "App-header"
    }
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer hideOrShow={this.hideOrShow}/>
        <Routes />
      </div>
      );
  }
}
export default App;

