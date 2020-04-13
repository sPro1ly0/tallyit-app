import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import TallyContext from './TallyContext';
import { groups, players, games, scores } from './ExampleData';

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

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      group: groups[0].group_name,
      players: players,
      games: games,
      scores: scores
    };
  }

  render() {

    const contextValue = {
      group: this.state.group,
      players: this.state.players,
      games: this.state.games,
      scores: this.state.scores
    };

    return (
      <>
        <TallyContext.Provider value={contextValue}>
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
                exact path='/edit-player/:player_id'
                component={EditPlayerForm}
              />
              <Route 
                exact path='/player-stats/:player_id'
                component={PlayerStatsPage}
              />
              <Route
                component={NotFoundPage}
              />
            </Switch>
          </main>
        </TallyContext.Provider>
      </>
    );
  }

}

export default App;
