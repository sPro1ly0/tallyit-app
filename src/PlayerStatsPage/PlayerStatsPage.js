import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PlayerStatsPage.css';

class PlayerStatsPage extends Component {
  render() {
    return (
      <>
        <button className="go-back-player-button">Go Back</button>
        <header>
          <h1>Mom&apos;s Stats</h1>
          <Link to='/edit-player'>Edit Player</Link>
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