// import all relevant pieces of react-router-dom, and all components rendered by routes
import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Home from './containers/Home.js'
import ResultsDisplay from './containers/ResultsDisplay';
import ErrorRoute from './components/ErrorRoute';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/results/:bday" component={ResultsDisplay} />
        <Route component={ErrorRoute} />
      </Switch>
        )
}
};

export default withRouter(Routes);
