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
import AuthApiService from '../../services/auth-api-service';
import IdleService from '../../services/idle-service';

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

  componentDidMount() {
    //  set the function (callback) to call when a user goes idle
    //  logout a user when they're idle
    IdleService.setIdleCallback(this.logoutFromIdle);
    /* if a user is logged in */
    if (TokenService.hasAuthToken()) {

      IdleService.registerIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
      
    }
  }

  componentWillUnmount() {
    //  when the app unmounts,
    //  stop the event listeners that auto logout (clear the token from storage)
    //  and remove the refresh endpoint request
    IdleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.forceUpdate();
  }

  setError = error => {
    this.setState({ 
      error: [error] 
    });
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

  setPlayerScores = scores => {
    this.setState({
      player_scores: scores
    });
  }

  clearData = () => {
    this.setGroupName([]);
    this.setAllGames([]);
    this.setPlayerScores([]);
    this.setCurrentGame([]);
    this.clearError();
  }

  render() {
    console.log('games',this.state.games);
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
      addGame: this.addGame,
      setCurrentGame: this.setCurrentGame,
      deleteGame: this.deleteGame,
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
