/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './AddPlayerForm.css';
import TallyContext from '../TallyContext';

class AddPlayerForm extends Component {

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { player_name } = e.target;
    
    let notUniqueName = this.context.players.filter(p =>
      p.player_name === player_name.value
    );

    console.log(notUniqueName);

    if (notUniqueName.length) {
      return alert('That name already exists!');
    }

    const player = {
      id: Math.random() * 5,
      player_name: player_name.value,
      group_id: 1
    };

    console.log(player);
    this.context.addPlayer(player);

    alert(`${player.player_name} was added!`);
  }

  handleGoBack = () => {
    this.props.history.goBack();
  };


  render() {
    return (
      <>
        <header>
          <h1>Add a New Player</h1>
        </header>
        <section className='add-edit-player'>
          <form
            onSubmit={this.handleSubmit}
          >
            <label htmlFor='player_name'>Add a New Player</label>
            <input 
              id='player_name' 
              type='text'
              name='player_name' 
              placeholder="Mila" 
              required/>
            <button>Add Player</button>
          </form>
        </section>
        <button>Go Back</button>
      </>
    );
  }
}

export default AddPlayerForm;