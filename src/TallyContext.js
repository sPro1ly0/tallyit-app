import React from 'react';

const TallyContext = React.createContext({
  error: null,
  group: [],
  player_scores: [],
  games: [],
  current_game: [],
  setError: () => {},
  clearError: () => {},
  setLoginStatus: () => {},
  setGroupName: () => {},
  setAllGames: () => {},
  setPlayerScores: () => {},
  deletePlayer: () => {},
  addGame: () => {},
  setCurrentGame: () => {},
  deleteGame: () => {},
  clearData: () => {}
});

export default TallyContext;