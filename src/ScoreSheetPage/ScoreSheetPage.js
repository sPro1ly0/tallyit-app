import React, { Component } from 'react';
import './ScoreSheetPage.css';
import AddPlayerForm from '../AddPlayerForm/AddPlayerForm';
import TallyContext from '../TallyContext';
import Player from '../Player/Player';

class ScoreSheetPage extends Component {

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      current_players: []
    };
  }

  render() {

    const playerList = this.state.current_players.map((player, index) => 
      <Player 
        key={player.id}
        name={player.player_name}
        score={player.score}
        onScoreChange={this.context.handleScoreChange(index)}
      />
    );
    
    return (
      <>
        <header>
          <h1>{this.context.current_game}</h1>
        </header>
        <AddPlayerForm />
        <section className='score-sheet'>
          {playerList}      
          <button type='submit'>Save</button>
        </section>
      
        <button>Delete</button>
      </>
    );
  }
}

export default ScoreSheetPage;