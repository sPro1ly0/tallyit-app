const groups = [
  {
    id: 1,
    group_name: 'Demo'
  },
  {
    id: 2,
    group_name: 'bestfam123'
  }
];

const games = [
  {
    id: 1,
    game_name: 'Jenga',
    group_id: 1,
    date_played: '4/13',
  },
  {
    id: 2,
    game_name: 'Euchre',
    group_id: 1,
    date_played: '4/10',
  },
  {
    id: 3,
    game_name: 'Monopoly',
    group_id: 1,
    date_played: '4/10'
  },
  {
    id: 4,
    game_name: 'Uno',
    group_id: 1,
    date_played: '4/01',
  },
  {
    id: 5,
    game_name: 'Pictionary',
    group_id: 1,
    date_played: '3/29'
  }
];

const player_scores = [
  {
    id: 1,
    player_name: 'Mom',
    game_id: 1,
    score: 1
  },
  {
    id: 2,
    player_name: 'Dad',
    game_id: 1,
    score: 0
  },
  {
    id: 3,
    player_name: 'Grandma',
    game_id: 3,
    score: 300
  },
  {
    id: 4,
    player_name: 'Luke',
    game_id: 3,
    score: 1000
  },
  {
    id: 5,
    player_name: 'Leia',
    game_id: 3,
    score: 500
  }
];




export { groups, games, player_scores };