import React from 'react';
import ReactDOM from 'react-dom';
import PlayerCounter from './PlayerCounter';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const score = 0;
  const counterNumber = 1;
  const onScoreChange = (playerId, number) => {
    const updateScores = this.state.new_players.map(player => {
      if (player.id === playerId) {
        return {...player, score: player.score + number};
      }
      return player;
    });

    this.setState({
      new_players: updateScores
    });
  };

  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <PlayerCounter
        score={score} 
        counterNumber={counterNumber} 
        onChange={onScoreChange}/>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});