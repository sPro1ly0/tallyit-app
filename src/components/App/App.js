import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import TallyContext from '../../TallyContext';
import PrivateRoute from '../../Utils/PrivateRoute';
import PublicOnlyRoute from '../../Utils/PublicOnlyRoute';

import NavBarTop from '../NavBarTop/NavBarTop';
import LandingPage from '../LandingPage/LandingPage';
import DashBoard from '../DashBoard/DashBoard';
import GameStatsPage from '../GameStatsPage/GameStatsPage';

import CreateScoreSheet from '../CreateScoreSheet/CreateScoreSheet';
import ScoreSheetPage from '../ScoreSheetPage/ScoreSheetPage';
import EditGame from '../EditGame/EditGame';

import TallyError from '../../TallyError';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import TokenService from '../../services/token-service';

class App extends Component {

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loggedIn: TokenService.hasAuthToken() ? true : false,
      group: [],
      player_scores: [],
      games: [],
      current_game: []
    };
  }

  setError = error => {
    this.setState({ error });
  }

  clearError = () => {
    this.setState({ error: null });
  }

  setLoginStatus = status => {
    this.setState({
      loggedIn: status
    });
  }

  setGroupName = group_name => {
    const name = group_name;
    this.setState({
      group: [name]
    });
  }

  setAllGames = games => {
    const allGames = games.reverse();
    this.setState({
      games: allGames
    });
  }

  setPlayerScores = scores => {
    this.setState({
      player_scores: scores
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

  setCurrentGame = game => {
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
    let currentScores = this.state.player_scores;

    for (let i = 0; i < currentScores.length; i++) {
      let currentPlayer = update_players[i];
      if (currentPlayer) {
        let indexCurrentScore = currentScores.findIndex(player => player.id === currentPlayer.id);
        console.log(indexCurrentScore);
        currentScores[indexCurrentScore] = currentPlayer;
      }
    }
    console.log(currentScores);
    this.setState({
      player_scores: currentScores
    });
  }

  clearData = () => {
    this.setGroupName([]);
    this.setAllGames([]);
    this.clearError();
  }

  render() {

    const contextValue = {
      error: this.state.error,
      group: this.state.group,
      player_scores: this.state.player_scores,
      games: this.state.games,
      current_game: this.state.current_game,
      setError: this.setError,
      clearError: this.clearError,
      setLoginStatus: this.setLoginStatus,
      setGroupName: this.setGroupName,
      setAllGames: this.setAllGames,
      setPlayerScores: this.setPlayerScores,
      addPlayer: this.addPlayer,
      deletePlayer: this.deletePlayer,
      addGame: this.addGame,
      setCurrentGame: this.setCurrentGame,
      deleteGame: this.deleteGame,
      updatePlayerScores: this.updatePlayerScores,
      clearData: this.clearData
    };

    return (
      <>
        <TallyContext.Provider value={contextValue}>
          <NavBarTop />
          <main className='App'>
            <TallyError>
              <Switch>
                <PublicOnlyRoute 
                  exact path='/'
                  component={LandingPage}
                />
                <PrivateRoute 
                  exact path='/dashboard'
                  component={DashBoard}
                />
                <PrivateRoute 
                  exact path='/create-scoresheet'
                  component={CreateScoreSheet}
                />
                <PrivateRoute 
                  exact path='/scoresheet'
                  component={ScoreSheetPage}
                />
                <PrivateRoute 
                  exact path='/game/:game_id'
                  component={GameStatsPage}
                />
                <PrivateRoute 
                  exact path='/edit-game/:game_id'
                  component={EditGame}
                />
                <Route
                  component={NotFoundPage}
                />
              </Switch>     
            </TallyError>
          </main>
        </TallyContext.Provider>
      </>
    );
  }

}

export default App;
