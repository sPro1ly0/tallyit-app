import React from 'react';

const TallyContext = React.createContext({
  groups: [],
  players: [],
  games: [],
  scores: [],
  addPlayer: () => {},
  updatePlayerName: () => {},
  deletePlayer: () => {}
});

export default TallyContext;