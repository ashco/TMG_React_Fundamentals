// const React = require('react');
// const ReactRouter = require('react-router-dom');
// const Router = ReactRouter.BrowserRouter;
// const Route = ReactRouter.Route;
// const Switch = ReactRouter.Switch;
// const Nav = require('./Nav');
// const Home = require('./Home');
// const Battle = require('./Battle');
// const Results = require('./Results');
// const Popular = require('./Popular');

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';
import Popular from './Popular';


class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="container">
          <Nav></Nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/popular' component={Popular} />
            {/* Switch Statement to cover non-routes */}
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

// module.exports = App;
export default App;