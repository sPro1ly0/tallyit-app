/* eslint-disable react/prop-types */
import React from 'react';
import PlayerCounter from '../PlayerCounter/PlayerCounter';
import './Player.css';

function Player(props) {
  return (
    <div className='player'>
      <div className='player-name'>
        <button className='delete-player' onClick={() => props.onDeletePlayer(props.id)}>Delete</button>
        {props.name}
      </div>
      <div className='player-score'>
        <PlayerCounter 
          id={props.id} 
          score={props.score} 
          counterNumber={props.counterNumber} 
          onChange={props.onScoreChange}/>
      </div>
    </div>
  );
}

export default Player;