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
import EditGame from './EditGame/EditGame';

import NotFoundPage from './NotFoundPage/NotFoundPage';

class App extends Component {

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      group: groups[0],
      player_scores: player_scores,
      games: games,
      current_game: []
    };
  }

  // adding array of player objects from ScoreSheetPage
  addPlayers = players => {
    this.setState({
      player_scores: [...this.state.player_scores, ...players]
    });
  }

  // adding one player from EditGame page when editing a game
  addPlayer = player => {
    this.setState({
      player_scores: [...this.state.player_scores, player]
    });
  }

  deletePlayer = player_id => {
    console.log('work', player_id);
    const newPlayers = this.state.player_scores.filter(player => 
      player.id !== player_id
    );

    this.setState({
      player_scores: newPlayers
    });
  }

  addGame = game => {

    const newGames = [...this.state.games, game];
    this.setState({
      games: newGames
    });
  }

  addCurrentGame = game => {
    this.setState({
      current_game: [game]
    });
  }

  deleteGame = game_id => {
    const newGames = this.state.games.filter(game => game.id !== game_id);

    this.setState({
      games: newGames
    });
  }

  // expecting array of players from EditGame comp when user clicks Save button
  updatePlayerScores = update_players => {
    let currentScore = this.state.player_scores;

    for (let i = 0; i < currentScore.length; i++) {
      let currentPlayer = update_players[i];
      if (currentPlayer) {
        let indexCurrentScore = currentScore.findIndex(player => player.id === currentPlayer.id);
        console.log(indexCurrentScore);
        currentScore[indexCurrentScore] = currentPlayer;
      }
    }
    console.log(currentScore);
    this.setState({
      player_scores: currentScore
    });
  }

  render() {

    const contextValue = {
      group: this.state.group,
      player_scores: this.state.player_scores,
      games: this.state.games,
      current_game: this.state.current_game,
      addPlayers: this.addPlayers,
      addPlayer: this.addPlayer,
      deletePlayer: this.deletePlayer,
      addGame: this.addGame,
      addCurrentGame: this.addCurrentGame,
      deleteGame: this.deleteGame,
      updatePlayerScores: this.updatePlayerScores
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
                exact path='/scoresheet/:game_id'
                component={ScoreSheetPage}
              />
              <Route 
                exact path='/game/:game_id'
                component={GameStatsPage}
              />
              <Route 
                exact path='/edit-game/:game_id'
                component={EditGame}
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
