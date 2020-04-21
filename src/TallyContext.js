import React from 'react';

const TallyContext = React.createContext({
  error: null,
  group: [],
  player_scores: [],
  games: [],
  current_players: [],
  addPlayer: () => {},
  deletePlayer: () => {},
  addGame: () => {},
  addCurrentGame: () => {},
  deleteGame: () => {},
  updatePlayerScores: () => {},
  setLoginStatus: () => {}
});

export default TallyContext;