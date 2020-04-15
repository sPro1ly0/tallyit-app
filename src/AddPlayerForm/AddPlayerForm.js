/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './AddPlayerForm.css';
import TallyContext from '../TallyContext';

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
      id: Math.random() * 5,
      player_name: this.state.name,
      game_id: this.context.games[this.context.games.length - 1].id, 
      score: 0
    };

    console.log(player);
    this.props.onAddCurrentPlayer(player);
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