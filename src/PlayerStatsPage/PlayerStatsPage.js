/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PlayerStatsPage.css';
import TallyContext from '../TallyContext';

class PlayerStatsPage extends Component {

  static contextType = TallyContext;

  render() {

    const { players, games, scores } = this.context;

    const { player_id } = this.props.match.params;

    const player = players.find(p =>
      p.id === Number(player_id)    
    );

    const findScores = scores.filter(s => s.player_id === player.id);
    const findGames = games.map(g => {
      let result = findScores.filter(s => s.game_id === g.game_id);
    });

    console.log(findScores);
    console.log(findGames);

    return (
      <>
        <button className="go-back-player-button">Go Back</button>
        <header>
          <h1>{player.player_name}&apos;s Stats</h1>
          <Link to={`/edit-player/${player.id}`}>Edit Player</Link>
        </header>

        <section className='win-loss'>
          <h2>Win 3 - Loss 0</h2>
        </section>

        <section className='games-played'>
          <h3>Games Played</h3>
          <div className='games'>
            <table id='game-results'>
              <tbody>
                <tr>
                  <th>Date</th>
                  <th>Game</th>
                  <th>Score</th>
                  <th>W/L</th>
                </tr>
                <tr><td>4/01</td><td>Pictionary</td><td>25</td><td>W</td></tr>
                <tr><td>3/20</td><td>Rummy</td><td>250</td><td>W</td></tr>
                <tr><td>3/28</td><td>Monopoly</td><td>3020</td><td>W</td></tr>
              </tbody>
                
            </table>
          </div>
        </section>

      </>
    );

  }
}

export default PlayerStatsPage;