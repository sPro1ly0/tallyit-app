/* eslint-disable react/prop-types */
import React from 'react';
import './PlayerCounter.css';

function PlayerCounter(props) {
//   console.log(props);
  return (
    <div className='score-counter'>
      <button 
        className='decrease-button'
        onClick={() => props.onChange(props.id, -(props.counterNumber))}>-{props.counterNumber}</button>
      <div className='score'>{props.score}</div>
      <button 
        className='increase-button'
        onClick={() => props.onChange(props.id, props.counterNumber)}>+{props.counterNumber}</button>
    </div>
  );
}

export default PlayerCounter;