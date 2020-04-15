/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Player from '../Player/Player';
import TallyContext from '../TallyContext';

class EditGame extends Component {

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      game_name: '',
      game_players: []
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

    console.log(player_scores);
    const findScores = player_scores.filter(p => p.game_id === game.id);
    this.setState({
      game_players: findScores
    });
  }

  handleDelete = () => {
    const { game_id } = this.props.match.params;
    this.context.deleteGame(Number(game_id)); 
    this.props.history.push('/dashboard');
  }

  render() {

    const playerList = this.state.game_players.map((player) => 
      <Player 
        key={player.id}
        id={player.id}
        name={player.player_name}
        score={player.score}
        onDeletePlayer={this.deletePlayer}
        onScoreChange={this.handleScoreChange}
      />
    );

    return (
      <>
        <header>
          <h1>{this.state.game_name}</h1>
        </header>
        <div className='player-error' role="alert">
          {this.state.error && <p className="red-error">{this.state.error}</p>}
        </div>
        <section className='score-sheet'>
          {playerList}      
          <button 
            type='submit'
            onClick={this.handleSubmit}>
              Save
          </button>
        </section>
      
        <button onClick={this.handleDelete}>Delete</button>
      </>
    );
  }
}

export default EditGame;