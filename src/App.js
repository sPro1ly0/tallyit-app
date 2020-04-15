import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import TallyContext from './TallyContext';
import { groups, player_scores, games } from './ExampleData';

import NavBarTop from './NavBarTop/NavBarTop';
import LandingPage from './LandingPage/LandingPage';
import DashBoard from './DashBoard/DashBoard';
import GameStatsPage from './GameStatsPage/GameStatsPage';

import CreateScoreSheet from './CreateScoreSheet/CreateScoreSheet';
import ScoreSheetPage from './ScoreSheetPage/ScoreSheetPage';

import NotFoundPage from './NotFoundPage/NotFoundPage';

class App extends Component {

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      group: groups[0],
      player_scores: player_scores,
      games: games,
      current_game: '',
    };
  }

  addPlayers = players => {
    this.setState({
      player_scores: [...this.state.player_scores, ...players]
    });
  }

  // deletePlayer = player_id => {
  //   const newPlayers = this.state.players.filter(player => 
  //     player.id !== player_id
  //   );

  //   this.setState({
  //     players: newPlayers
  //   });
  // }

  addGame = game => {

    const newGames = [...this.state.games, game];
    this.setState({
      games: newGames
    });
  }

  addCurrentGame = game => {
    this.setState({
      current_game: game.game_name
    });
  }

  render() {

    const contextValue = {
      group: this.state.group,
      player_scores: this.state.player_scores,
      games: this.state.games,
      current_game: this.state.current_game,
      addPlayers: this.addPlayers,
      // deletePlayer: this.deletePlayer,
      addGame: this.addGame,
      addCurrentGame: this.addCurrentGame
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
                exact path='/game/:game_id'
                component={GameStatsPage}
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
