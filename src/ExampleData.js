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

const players = [
  {
    id: 1,
    player_name: 'Mom',
    group_id: 1
  },
  {
    id: 2,
    player_name: 'Dad',
    group_id: 1
  },
  {
    id: 3,
    player_name: 'Grandma',
    group_id: 1
  },
  {
    id: 4,
    player_name: 'Luke',
    group_id: 1
  },
  {
    id: 5,
    player_name: 'Leia',
    group_id: 1
  }
];

const games = [
  {
    id: 1,
    game_name: 'Jenga',
    group_id: 1,
    date_played: '4/13'
  },
  {
    id: 2,
    game_name: 'Euchre',
    group_id: 1,
    date_played: '4/10'
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
    date_played: '4/01'
  },
  {
    id: 5,
    game_name: 'Pictionary',
    group_id: 1,
    date_played: '3/29'
  }
];

const scores = [
  {
    id: 1,
    game_id: 1,
    player_id: 1,
    score: 1,
    date_played:'4/13',
    win_loss: 'W'
  },
  {
    id: 2,
    game_id: 1,
    player_id: 2,
    score: 0,
    date_played:'4/13',
    win_loss: 'L'
  }
];

export { groups, players, games, scores };