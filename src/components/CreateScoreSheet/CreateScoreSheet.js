/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import TallyContext from '../../TallyContext';
import TallyitApiService from '../../services/tallyit-api-service';
import './CreateScoreSheet.css';
import ValidationError from '../../ValidationError';

class CreateScoreSheet extends Component {

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      game_name: {
        value: '',
        touched: false
      }
    };
  }

  updateGameName = (e) => {
    const gameName = e.target.value;
    this.setState({
      game_name: { value: gameName, touched: true }
    });
  }

  validateGameName()  {
    let gameName = this.state.game_name.value;
    if (gameName.length > 30) {
      return 'Game name cannot be more than 30 characters long.';
    }
  }

  componentDidMount() {
    this.context.setCurrentGame([]);
  }

  handleGameName = (e) => {
    this.setState({
      game_name: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const game = {
      game_name: this.state.game_name.value
    };

    TallyitApiService.postGame(game)
      .then(res => {
        this.context.setCurrentGame(res);
        this.context.addGame(res);
        this.props.history.push('/scoresheet');
      })
      .catch(this.context.setError);
  }

  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { error } = this.context;

    return (
      <div className='create-scoresheet'>
        <header className='create-scoresheet-header'>
          <h1>Create Score Sheet</h1>
        </header>
        {error 
          ? <div className="error">{this.state.error}</div>
          : ''}
        <section className="create-scoresheet-section">
          <form className='create-score-sheet-form' onSubmit={this.handleSubmit}>
            <label htmlFor='game_name'>Add Game Name</label>
            <input 
              id='game_name' 
              type='text' 
              placeholder='Uno'
              value={this.state.game_name}
              onChange={this.handleGameName}
              required />
            {this.state.game_name.touched && (<ValidationError message={this.validateGameName()}/>)}
            <button type='submit'>Submit</button>
          </form>
        </section>
        <button className="go-back-button" onClick={this.handleGoBack}>Go Back</button>
      </div>
    );
  }
}

export default CreateScoreSheet;