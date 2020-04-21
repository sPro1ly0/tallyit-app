import React from 'react';

const TallyContext = React.createContext({
  error: null,
  group: [],
  player_scores: [],
  games: [],
  current_game: [],
  setError: () => {},
  clearError: () => {},
  setGroupName: () => {},
  setAllGames: () => {},
  setPlayerScores: () => {},
  addPlayer: () => {},
  deletePlayer: () => {},
  addGame: () => {},
  setCurrentGame: () => {},
  deleteGame: () => {},
  updatePlayerScores: () => {},
  setLoginStatus: () => {},
  clearData: () => {}
});

export default TallyContext;