import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import TallyContext from './TallyContext';
import { groups, player_scores, games } from './ExampleData';

import NavBarTop from './NavBarTop/NavBarTop';
import LandingPage from './LandingPage/LandingPage';
import DashBoard from './DashBoard/DashBoard';

import CreateScoreSheet from './CreateScoreSheet/CreateScoreSheet';
import ScoreSheetPage from './ScoreSheetPage/ScoreSheetPage';

import EditPlayerForm from './EditPlayerForm/EditPlayerForm';

import PlayerStatsPage from './PlayerStatsPage/PlayerStatsPage';

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
      current_players: []
    };
  }

  addPlayer = player => {
    this.setState({
      player_scores: [...this.state.player_scores, player]
    });
  }

  updatePlayerName = playerName => {
    const newPlayers = this.state.players.map(player =>
      (player.id === playerName.id)
        ? playerName
        : player
    );

    this.setState({
      players: newPlayers
    });
  }

  deletePlayer = player_id => {
    const newPlayers = this.state.players.filter(player => 
      player.id !== player_id
    );

    this.setState({
      players: newPlayers
    });
  }

  addGame = game => {
    this.setState({
      games: [...this.state.games, game]
    });
  }

  addCurrentGame = game => {
    this.setState({
      current_game: game.game_name
    });
  }

  addCurrentPlayers = player => {
    this.setState({
      current_players: [...this.state.current_players, player]
    });
  }

  handleScoreChange(index, number) {
    if (number === 1) {
      this.setState(this.state.current_players[index].score + 1);
    } else {
      this.setState(this.state.current_players[index].score - 1);
    }
  }

  render() {

    const contextValue = {
      group: this.state.group,
      players: this.state.players,
      games: this.state.games,
      scores: this.state.scores,
      current_game: this.state.current_game,
      addPlayer: this.addPlayer,
      updatePlayerName: this.updatePlayerName,
      deletePlayer: this.deletePlayer,
      addGame: this.addGame,
      addCurrentGame: this.addCurrentGame,
      handleScoreChange: this.handleScoreChange,
      addCurrentPlayers: this.addCurrentPlayers
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
