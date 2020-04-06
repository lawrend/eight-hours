// import all relevant pieces of react-router-dom, and all components rendered by routes
import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Home from './containers/Home.js';
import EightHoursContainer from './containers/EightHoursContainer.js';
import ResultsDisplay from './containers/ResultsDisplay';
import IngredientsCheckerHome from './containers/IngredientsCheckerHome.js';
import ErrorRoute from './components/ErrorRoute';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/eight-hours" component={EightHoursContainer} />
        <Route path="/results/:month/:day/:year" component={ResultsDisplay} />
        <Route path="/ingredients-checker" component={IngredientsCheckerHome} />
        <Route component={ErrorRoute} />
      </Switch>
        )
}
};

export default withRouter(Routes);
