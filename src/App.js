import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarTop from './NavBarTop/NavBarTop';
import LandingPage from './LandingPage/LandingPage';

import NotFoundPage from './NotFoundPage/NotFoundPage';

class App extends Component {

  render() {
    return (
      <>
        <NavBarTop />
        <main className='App'>
          <Switch>
            <Route 
              exact path='/'
              component ={LandingPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </>
    );
  }

}

export default App;
