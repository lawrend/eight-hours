import React, {Component} from 'react';
import Routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            What you wanna do?
          </p>
        </header>
        <Routes />
      </div>
      );
  }
}
export default App;

