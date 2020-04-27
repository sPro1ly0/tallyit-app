/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './AddPlayerForm.css';
import TallyContext from '../../TallyContext';
import TallyitApiService from '../../services/tallyit-api-service';
import ValidationError from '../../ValidationError';

class AddPlayerForm extends Component {

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      player_name: {
        value: '',
        touched: false
      }
    };
  }

  updatePlayerName = (e) => {
    const playerName = e.target.value;
    this.setState({
      player_name: { value: playerName, touched: true }
    });
  }

  validatePlayerName()  {
    let playerName = this.state.player_name.value;
    if (playerName.length === 0) {
      return 'Player name is required.';
    } else if (playerName.length > 25) {
      return 'Player name cannot be more than 25 characters long.';
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const player = {
      player_name: this.state.player_name.value,
      game_id: this.props.gameId,
      score: 0
    };

    TallyitApiService.postPlayerScore(player)
      .then(res => {
        this.props.onAddPlayer(res);
        this.setState({ 
          player_name: { value: '', touched: false } 
        });
      })
      .catch(this.context.setError);
  }

  render() {
    return (
      <>
        <section className='add-player-section'>
          <form className='add-player-form' onSubmit={this.handleSubmit}>
            <label htmlFor='player_name'>Add a New Player</label>
            <input 
              id='player_name' 
              type='text'
              name='player_name'
              aria-label="Enter a player name"
              aria-required="true"
              onChange={this.updatePlayerName} 
              required/>
            {this.state.player_name.touched && (<ValidationError message={this.validatePlayerName()}/>)}
            <button 
              type='submit'
              className='add-player-button'>
                Add Player
            </button>
          </form>
        </section>
      </>
    );
  }
}

export default AddPlayerForm;