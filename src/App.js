import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBarTop from './NavBarTop/NavBarTop';
import LandingPage from './LandingPage/LandingPage';
import DashBoard from './DashBoard/DashBoard';

import CreateScoreSheet from './CreateScoreSheet/CreateScoreSheet';
import ScoreSheetPage from './ScoreSheetPage/ScoreSheetPage';

import AddPlayerForm from './AddPlayerForm/AddPlayerForm';
import EditPlayerForm from './EditPlayerForm/EditPlayerForm';

import PlayerStatsPage from './PlayerStatsPage/PlayerStatsPage';

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
              component={LandingPage}
            />
            <Route 
              exact path='/dashboard'
              component={DashBoard}
            />
            <Route 
              exact path='/create-scoresheet'
              component={CreateScoreSheet}
            />
            <Route 
              exact path='/scoresheet'
              component={ScoreSheetPage}
            />
            <Route 
              exact path='/add-player'
              component={AddPlayerForm}
            />
            <Route 
              exact path='/edit-player'
              component={EditPlayerForm}
            />
            <Route 
              exact path='/player-stats'
              component={PlayerStatsPage}
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
