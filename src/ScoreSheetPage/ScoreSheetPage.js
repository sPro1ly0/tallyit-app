import React, { Component } from 'react';
import './ScoreSheetPage.css';

class ScoreSheetPage extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Uno</h1>
        </header>

        <section className='score-sheet'>
          <form className='score-sheet-form'>
            <div className='player-score-input'>          
              <label htmlFor='player1'>Sara </label>
              <input id='player1' type='number' placeholder='0'/>
            </div>
            <div className='player-score-input'>
              <label htmlFor='player2'>Mom</label>
              <input id='player2' type='number' placeholder='0'/>
            </div>
          
            <button type='submit'>Save</button>
          </form>
        </section>
      
        <button>Delete</button>
      </>
    );
  }
}

export default ScoreSheetPage;