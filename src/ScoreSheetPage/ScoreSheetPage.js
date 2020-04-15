/* eslint-disable react/prop-types */
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
    let { current_players } = this.state;
    if (current_players.length > 20) {
      this.setState({
        error: 'Do not enter more than 20 players'
      });
    } else {
      this.setState({
        current_players: [...current_players, player]
      });
    }
  }

  deletePlayer = player_id => {
    // console.log('Test', player_id);
    const newPlayers = this.state.current_players.filter(player => 
      player.id !== player_id
    );

    this.setState({
      error: null,
      current_players: newPlayers
    });
  }

  
  handleScoreChange = (playerId, number) => {
    console.log('Good', playerId, number);

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

  handleSubmit = () => {

  }

  handleDelete = () => {
    this.setState({
      error: null,
      current_players: []
    });

    this.props.history.push('/dashboard');
  }

  render() {

    const playerList = this.state.current_players.map((player) => 
      <Player 
        key={player.id}
        id={player.id}
        name={player.player_name}
        score={player.score}
        onDeletePlayer={this.deletePlayer}
        onScoreChange={this.handleScoreChange}
      />
    );
    
    return (
      <>
        <header>
          <h1>{this.context.current_game}</h1>
        </header>

        <AddPlayerForm onAddCurrentPlayer={this.addCurrentPlayers}/>
        <div className='player-error' role="alert">
          {this.state.error && <p className="red-error">{this.state.error}</p>}
        </div>
        <section className='score-sheet'>
          {playerList}      
          <button 
            type='submit'
            onSubmit={this.handleSubmit}>
              Save
          </button>
        </section>
      
        <button onClick={this.handleDelete}>Delete</button>
      </>
    );
  }
}

export default ScoreSheetPage;