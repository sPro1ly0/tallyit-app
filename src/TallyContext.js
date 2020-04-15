import React from 'react';

const TallyContext = React.createContext({
  error: null,
  groups: [],
  player_scores: [],
  games: [],
  current_players: [],
  addPlayers: () => {},
  addPlayer:() => {},
  deletePlayer: () => {},
  addGame:() => {},
  addCurrentGame:() => {},
  deleteGame:() => {},
  updatePlayerScores:() => {}
});

export default TallyContext;