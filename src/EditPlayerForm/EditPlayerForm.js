/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import '../AddPlayerForm/AddPlayerForm.css';
import TallyContext from '../TallyContext';

class EditPlayerForm extends Component {

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      id: '',
      player_name: '',
      original_name: ''
    };
  }

  componentDidMount() {
    const { player_id } = this.props.match.params;

    const player = this.context.players.find(p =>
      p.id === Number(player_id)
    );

    this.setState({
      id: player.id,
      player_name: player.player_name,
      original_name: player.player_name
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { id, player_name } = this.state;

    const updatedName = {
      id,
      player_name,
      group_id: 1
    };
    console.log(updatedName);

    this.setState({
      error: null
    });

    this.context.updatePlayerName(updatedName);
    this.props.history.push('/dashboard');
  }

  handleNameChange = (e) => {
    const player_name = e.target.value;
    this.setState({
      player_name
    });
  }

  handleDelete = () => {
    const { player_id } = this.props.match.params;
    this.context.deletePlayer(Number(player_id));
    this.props.history.push('/dashboard');
  }

  handleCancel = () => {
    this.props.history.goBack();
  };

  render() {

    return (
      <>
        <header>
          <h1>Edit {this.state.original_name}&apos;s Name</h1>
        </header>
        <section className='add-edit-player'>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='player_name'>Edit Player&apos;s Name</label>
            <input 
              id='player_name' 
              type='text' 
              placeholder='Mom'
              value={this.state.player_name} 
              onChange={this.handleNameChange}
              required/>
            <button type='submit'>Save New Name</button>
            <button type='button' onClick={this.handleDelete}>Delete Player</button>
          </form>
        </section>
        <button type='button' onClick={this.handleCancel}>Go Back</button>
      </>
    );
  }
}

export default EditPlayerForm;