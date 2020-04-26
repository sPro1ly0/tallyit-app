/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './CreateScoreSheet.css';
import TallyContext from '../../TallyContext';
import TallyitApiService from '../../services/tallyit-api-service';

class CreateScoreSheet extends Component {

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      game_name: ''
    };
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
      game_name: this.state.game_name
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
              required
            />
            <button type='submit'>Submit</button>
          </form>
        </section>
        <button className="go-back-button" onClick={this.handleGoBack}>Go Back</button>
      </div>
    );
  }
}

export default CreateScoreSheet;