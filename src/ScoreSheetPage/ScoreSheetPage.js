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
      // add player object with id, name, and score
    };
  }

  addCurrentPlayers = player => {
    this.setState({
      current_players: [...this.state.current_players, player]
    });
  }

  
  handleScoreChange = (playerId, number) => {
    console.log('Good', playerId, number); // 'Good', undefined, undefined

    const updatePlayerScores = this.state.current_players.map(player => {
      if (player.id === playerId) {
        return {...player, score: player.score + number};
      }

      return player;
    });

    this.setState({
      current_players: updatePlayerScores
    });
  }

  render() {

    const playerList = this.state.current_players.map((player) => 
      <Player 
        key={player.id}
        id={player.id}
        name={player.player_name}
        score={player.score}
        onScoreChange={() => this.handleScoreChange()}
      />
    );
    
    return (
      <>
        <header>
          <h1>{this.context.current_game}</h1>
        </header>
        <AddPlayerForm onAddCurrentPlayer={this.addCurrentPlayers}/>
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