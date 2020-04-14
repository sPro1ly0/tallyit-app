import React from 'react';

const TallyContext = React.createContext({
  groups: [],
  player_scores: [],
  games: [],
  current_game: '',
  current_players: [],
  addPlayer: () => {},
  updatePlayerName: () => {},
  deletePlayer: () => {},
  addGame:() => {},
  addCurrentGame:() => {},
  addCurrentPlayers:() => {},
  handleScoreChange:() => {}
});

export default TallyContext;