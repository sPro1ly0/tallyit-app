/* eslint-disable react/prop-types */
import React from 'react';

function PlayerCounter(props) {
  return (
    <div className='score-counter'>
      <button 
        className='decrease-button'
        onClick={() => props.onChange(-1)}>-</button>
      <div className='score'>{props.score}</div>
      <button 
        className='increase-button'
        onClick={() => props.onChange(1)}>+</button>
    </div>
  );
}

export default PlayerCounter;