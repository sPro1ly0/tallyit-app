import React from 'react';

const TallyContext = React.createContext({
  groups: [],
  players: [],
  games: [],
  scores: []
});

export default TallyContext;