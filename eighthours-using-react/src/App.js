import React, {Component} from 'react';
import Routes from './routes';
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
        <header className="App-header" id="app-header">

          <div className="header-kids">
            <Link to="/">Squigglewerkz</Link>
          </div>

          <div className="header-kids">
            <div className="nav-item">
              <Link to="/eight-hours">Eight Hours</Link>
            </div>
            <div className="nav-item">
              <Link to="/ingredients-checker">Ingredients Checker</Link>
            </div>

          </div>

            <div className="nav-item-button">
              <button  className="icon" onClick={this.hideOrShow}>
                <i className="fa fa-bars"></i>
              </button>
            </div>

        </header>

        <Routes />
        <div className="footer">foots</div>
      </div>
      );
  }
}
export default App;

