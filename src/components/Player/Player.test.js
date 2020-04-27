/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const name = 'Maggie';

  const handleDeletePlayer = player_id => {
    const newPlayers = this.state.current_players.filter(player => 
      player.id !== player_id
    );
  };

  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Player name={name} onDeletePlayer={handleDeletePlayer}/>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});