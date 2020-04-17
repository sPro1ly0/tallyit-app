/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './ScoreSheetPage.css';
import AddPlayerForm from '../AddPlayerForm/AddPlayerForm';
import CounterNumberForm from '../CounterNumberForm/CounterNumberForm';
import TallyContext from '../TallyContext';
import Player from '../Player/Player';

class ScoreSheetPage extends Component {

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      current_players: [],
      counter_number: 1
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

  handleDeletePlayer = player_id => {
    // console.log('Test', player_id);
    const newPlayers = this.state.current_players.filter(player => 
      player.id !== player_id
    );

    this.context.deletePlayer(player_id);

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

  handleNumberChange = (e) => {
    e.preventDefault();
    this.setState({
      counter_number: Number(e.target.value)
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('working');
    this.context.updatePlayerScores(this.state.current_players);
    this.setState({
      error: null,
      current_players: [],
      counter_number: 1
    });

    this.props.history.push('/dashboard');  
  }

  handleDelete = () => {
    const { game_id } = this.props.match.params;
    this.context.deleteGame(Number(game_id));

    this.setState({
      error: null,
      current_players: [],
      counter_number: 1
    });

    this.props.history.push('/dashboard');
  }

  render() {

    const { games, error } = this.context;
    const { game_id } = this.props.match.params;

    const game = games.find(g =>
      g.id === Number(game_id)    
    );

    const playerList = this.state.current_players.map((player) => 
      <Player 
        key={player.id}
        id={player.id}
        name={player.player_name}
        score={player.score}
        counterNumber={this.state.counter_number}
        onDeletePlayer={this.handleDeletePlayer}
        onScoreChange={this.handleScoreChange}
      />
    );

    let disable = (this.state.current_players.length === 0) ? true : false;
    
    return (
      <>
        <header>
          <h1>{game.game_name}</h1>
        </header>
        {error 
          ? <p className='red-error'>{this.state.error}</p>
          : ''}
        <AddPlayerForm 
          gameId={game.id}
          onAddPlayer={this.addCurrentPlayers}
        />
        <div className='player-error' role="alert">
          {this.state.error && <p className="red-error">{this.state.error}</p>}
        </div>
        <CounterNumberForm 
          counterNumber={this.state.counter_number}
          onNumberChange={this.handleNumberChange}
        />
        <section className='score-sheet'>
          {playerList}      
          <button 
            type='submit'
            disabled={disable}
            onClick={this.handleSubmit}>
              Save
          </button>
        </section>
      
        <button 
          onClick={this.handleDelete}>
            Delete
        </button>
      </>
    );
  }
}

export default ScoreSheetPage;