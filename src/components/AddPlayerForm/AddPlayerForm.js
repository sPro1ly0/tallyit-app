/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './AddPlayerForm.css';
import TallyContext from '../../TallyContext';
import TallyitApiService from '../../services/tallyit-api-service';

class AddPlayerForm extends Component {

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      name: ''
    };
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const player = {
      player_name: this.state.name,
      game_id: this.props.gameId,
      score: 0
    };

    TallyitApiService.postPlayerScore(player)
      .then(res => {
        this.props.onAddPlayer(res);
      })
      .catch(this.context.setError);
    
    this.setState({
      name: ''
    });
  }

  render() {
    return (
      <>
        <section className='add-edit-player'>
          <form
            onSubmit={this.handleSubmit}
          >
            <label htmlFor='player_name'>Add a New Player</label>
            <input 
              id='player_name' 
              type='text'
              name='player_name' 
              value={this.state.name}
              onChange={this.handleNameChange} 
              required/>
            <button type='submit'>Add Player</button>
          </form>
        </section>
      </>
    );
  }
}

export default AddPlayerForm;