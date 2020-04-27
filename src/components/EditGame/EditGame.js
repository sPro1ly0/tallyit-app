/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import '../ScoreSheetPage/ScoreSheetPage.css';
import AddPlayerForm from '../AddPlayerForm/AddPlayerForm';
import CounterNumberForm from '../CounterNumberForm/CounterNumberForm';
import Player from '../Player/Player';
import TallyContext from '../../TallyContext';
import TallyitApiService from '../../services/tallyit-api-service';

class EditGame extends Component {

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      game_name: '',
      new_players: [],
      counter_number: 1
    };
  }

  componentDidMount() {
    const { games, player_scores } = this.context;
    const { game_id } = this.props.match.params;

    const game = games.find(g =>
      g.id === Number(game_id)    
    );

    this.setState({
      game_name: game.game_name
    });

    // console.log(player_scores);
    const findScores = player_scores.filter(p => p.game_id === game.id);
    this.setState({
      new_players: findScores
    });
  }

  addNewPlayers = player => {
    let { new_players } = this.state;
    if (new_players.length >= 20) {
      this.setState({
        error: 'Do not enter more than 20 players'
      });
    } else {
      this.setState({
        new_players: [...new_players, player]
      });
    }
  }

  deletePlayer = player_id => {
    // console.log('Test', player_id);
    const newPlayers = this.state.new_players.filter(player => 
      player.id !== player_id
    );

    TallyitApiService.deletePlayerScore(player_id)
      .then(() => {
        this.setState({
          error: null,
          new_players: newPlayers
        });
      })
      .catch(this.context.setError);
    
  }

  handleScoreChange = (playerId, number) => {

    const updateScores = this.state.new_players.map(player => {
      if (player.id === playerId) {
        return {...player, score: player.score + number};
      }

      return player;
    });

    this.setState({
      new_players: updateScores
    });
  }

  handleNumberChange = (e) => {
    this.setState({
      counter_number: Number(e.target.value)
    });
  }

  handleSubmit = (e) => {
    const { game_id } = this.props.match.params;
    e.preventDefault();
    let playerScores = this.state.new_players;
    TallyitApiService.updatePlayersScores(playerScores)
      .then(() => {
        this.props.history.push(`/game/${game_id}`);  
      })
      .catch(this.context.setError);
  }

  handleClickCancel = () => {
    this.props.history.goBack();
  };

  render() {
    const { games } = this.context;
    const { game_id } = this.props.match.params;

    const game = games.find(g =>
      g.id === Number(game_id)    
    );

    const playerList = this.state.new_players.map((player) => 
      <Player 
        key={player.id}
        id={player.id}
        name={player.player_name}
        score={player.score}
        counterNumber={this.state.counter_number}
        onDeletePlayer={this.deletePlayer}
        onScoreChange={this.handleScoreChange}
      />
    );

    let disable = (this.state.new_players.length === 0) ? true : false;

    return (
      <>
        <header className='game-header'>
          <h1>{this.state.game_name}</h1>
        </header>
        <div className='player-error' role='alert'>
          {this.state.error && <p className='red-error'>{this.state.error}</p>}
        </div>
        <AddPlayerForm 
          gameId={game.id}
          onAddPlayer={this.addNewPlayers}
        />
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
      
        <button type='button' 
          className='delete-cancel-button' 
          onClick={this.handleClickCancel}>
            Cancel
        </button>
      </>
    );
  }
}

export default EditGame;