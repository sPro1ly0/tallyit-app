/* eslint-disable react/prop-types */
import React from 'react';
import PlayerCounter from '../PlayerCounter/PlayerCounter';

function Player(props) {
  return (
    <div className='player'>
      <div className='player-name'>
        <button className='delete-player'>Delete</button>
        {props.name}
      </div>
      <div className='player-score'>
        <PlayerCounter score={props.score} onChange={(number) => props.onScoreChange(props.id, number)}/>
      </div>
    </div>
  );
}

export default Player;