import React from 'react';

const TallyContext = React.createContext({
  groups: [],
  player_scores: [],
  games: [],
  current_game: '',
  current_players: [],
  addPlayers: () => {},
  addGame:() => {},
  addCurrentGame:() => {},
  deleteGame:() => {}
});

export default TallyContext;