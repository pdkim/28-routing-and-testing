import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Nav from './nav/nav.js';
import Landing from './landing/landing.js';
import Dashboard from './dashboard/dashboard.js';

export default class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
        <React.Fragment>
          <Nav />
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}