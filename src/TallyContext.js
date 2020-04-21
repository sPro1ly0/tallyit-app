import React from 'react';

const TallyContext = React.createContext({
  error: null,
  group: [],
  player_scores: [],
  games: [],
  current_players: [],
  setError: () => {},
  clearError: () => {},
  setGroupName: () => {},
  addPlayer: () => {},
  deletePlayer: () => {},
  addGame: () => {},
  addCurrentGame: () => {},
  deleteGame: () => {},
  updatePlayerScores: () => {},
  setLoginStatus: () => {},
  clearData: () => {}
});

export default TallyContext;