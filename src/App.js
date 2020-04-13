import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from './NotFoundPage/NotFoundPage';

class App extends Component {

  render() {
    return (
      <main className='App'>
        <Switch>
          <Route
            component={NotFoundPage}
          />
        </Switch>
      </main>
    );
  }

}

export default App;
