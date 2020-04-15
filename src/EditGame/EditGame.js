/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import AddPlayerInEditForm from '../AddPlayerInEditForm/AddPlayerInEditForm';
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

    // console.log(player_scores);
    const findScores = player_scores.filter(p => p.game_id === game.id);
    this.setState({
      game_players: findScores
    });
  }

  addNewPlayers = player => {
    let { game_players } = this.state;
    if (game_players.length > 20) {
      this.setState({
        error: 'Do not enter more than 20 players'
      });
    } else {
      this.setState({
        game_players: [...game_players, player]
      });
    }
  }

  deletePlayer = player_id => {
    // console.log('Test', player_id);
    const newPlayers = this.state.game_players.filter(player => 
      player.id !== player_id
    );

    this.setState({
      error: null,
      game_players: newPlayers
    });

    this.context.deletePlayer(player_id);
  }

  handleScoreChange = (playerId, number) => {
    console.log('Good', playerId, number);

    const updatePlayerScores = this.state.game_players.map(player => {
      if (player.id === playerId) {
        return {...player, score: player.score + number};
      }

      return player;
    });

    this.setState({
      game_players: updatePlayerScores
    });
  }

  handleSubmit = (e) => {
    const { game_id } = this.props.match.params;
    e.preventDefault();
    // console.log('work!');
    this.context.updatePlayerScores(this.state.game_players);

    this.props.history.push(`/game/${game_id}`);

    this.setState({
      error: null,
      game_name: '',
      game_players: []        
    });
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

    let disable = (this.state.game_players.length === 0) ? true : false;

    return (
      <>
        <header>
          <h1>{this.state.game_name}</h1>
        </header>

        <AddPlayerInEditForm 
          gameId={game.id}
          onAddNewPlayer={this.addNewPlayers}
        />

        <div className='player-error' role="alert">
          {this.state.error && <p className="red-error">{this.state.error}</p>}
        </div>
        <section className='score-sheet'>
          {playerList}      
          <button 
            type='submit'
            disabled={disable}
            onClick={this.handleSubmit}>
              Save
          </button>
        </section>
      
        <button type="button" onClick={this.handleClickCancel}>Cancel</button>
      </>
    );
  }
}

export default EditGame;