/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import TallyContext from '../TallyContext';
import { Link } from 'react-router-dom';
import GameResult from '../GameResult/GameResult';
import './GameStatsPage.css';

class GameStatsPage extends Component {

  static contextType = TallyContext;

  
  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {

    const { games, player_scores } = this.context;
    const { game_id } = this.props.match.params;

    const game = games.find(g =>
      g.id === Number(game_id)    
    );
    console.log(player_scores);
    const findScores = player_scores.filter(p => p.game_id === game.id);
    const results = findScores.map(p => 
      <GameResult key={p.id} name={p.player_name} score={p.score} />
    );

    return (
      <>
        <button className='go-back-button' onClick={this.handleGoBack}>Go Back</button>
        <header>
          <h1>{game.game_name} Stats</h1>
          <Link to={`/edit-game/${game.id}`}>Edit Game</Link>
        </header>

        <section className='date-played'>
          <h2>Date Played: {game.date_played}</h2>
        </section>

        <section className='games-played'>
          <h3>Games Played</h3>
          <div className='player-list'>
            <table id='game-results'>
              <tbody>
                <tr>
                  <th>Players</th>
                  <th>Scores</th>
                </tr>
                {results}
              </tbody>

            </table>
          </div>
        </section>

      </>
    );
  }
}

export default GameStatsPage;