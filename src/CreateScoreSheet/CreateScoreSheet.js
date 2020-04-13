import React, { Component } from 'react';
import './CreateScoreSheet.css';

class CreateScoreSheet extends Component {
  render() {
    return (
      <>
        <button className="go-back-player-button">Go Back</button>
        <header>
          <h1>Create Score Sheet</h1>
        </header>
        <section className="create-score-sheet">
          <form className='create-score-sheet-form'>
            <label htmlFor='game-name'>Game Name: </label>
            <input id='game-name' type='text' placeholder='Uno'/>
            <label htmlFor='number-of-players'>How many players?</label>
            <input id='number-of-players' type='number' min='2' placeholder='2' max='20'/>
            <div className='enter-player-names'>
              <label htmlFor='enter-player'>Enter Players: </label>
              <input type='text' id='enter-player' />
              <input type='text' id='enter-player' />
            </div>
            <button type='submit'>Submit</button>
          </form>
        </section>
      </>
    );
  }
}

export default CreateScoreSheet;