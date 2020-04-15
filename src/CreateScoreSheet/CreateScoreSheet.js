/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './CreateScoreSheet.css';
import TallyContext from '../TallyContext';

class CreateScoreSheet extends Component {

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      game_name: ''
    };
  }

  handleGameName = (e) => {
    this.setState({
      game_name: e.target.value
    });
  }

  handleSubmit = () => {
    const game = {
      id: 5 + Math.round(Math.random() * 100),
      game_name: this.state.game_name,
      group_id: 1,
      date_played: new Date()
    };

    console.log(game);
    this.context.addGame(game);
    this.context.addCurrentGame(game);
    
    this.props.history.push(`/scoresheet/${game.id}`);
    
  }

  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { error } = this.context;

    return (
      <>
        <button className="go-back-player-button" onClick={this.handleGoBack}>Go Back</button>
        <header>
          <h1>Create Score Sheet</h1>
        </header>
        {error 
          ? <div className="error">{this.state.error}</div>
          : ''}
        <section className="create-score-sheet">
          <form className='create-score-sheet-form' onSubmit={this.handleSubmit}>
            <label htmlFor='game_name'>Add Game Name: </label>
            <input 
              id='game_name' 
              type='text' 
              placeholder='Uno'
              value={this.state.game_name}
              onChange={this.handleGameName}
              required
            />
            <button type='submit'>Submit</button>
          </form>
        </section>

      </>
    );
  }
}

export default CreateScoreSheet;