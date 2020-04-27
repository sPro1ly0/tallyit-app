/* eslint-disable react/prop-types */
import React from 'react';

// Allows users to change the number on the buttons 
// and increase/decrease their scores by what number they want
export default function CounterNumberForm(props) {
  return (
    <section className='change-counter-number'>
      <form>
        <label htmlFor='counter-number'>Change Button Counter Number</label>
        <input 
          id='counter-number' 
          type='number'
          name='counter-number' 
          value={props.counterNumber}
          onChange={props.onNumberChange} 
          required/>
      </form>
    </section>
  );
}