import React, { Component } from 'react';
import TallyContext from '../TallyContext';
import { Link } from 'react-router-dom';
import './DashBoard.css';

class DashBoard extends Component {

  static contextType = TallyContext;

  render() {

    const { group, players, games } = this.context;
    let playerList = '';
    let gameList = '';
    if (players) {
      playerList = players.map(p => <li key={p.id}><Link to={`/player-stats/${p.id}`}>{`${p.player_name}`}</Link></li>);
    }

    if (games) {
      gameList = games.map(g => <li key={g.id}>{`${g.game_name}`}</li>);
    }

    return (
      <>
        <header>
          <h1>Hi {group.group_name}!</h1>
          <button>Start a New Game</button>
        </header>

        <div>
          <section className='all-players'>
            <h2>Players</h2>
            <Link to='/add-player'>Add a New Player</Link>
            <ul>
              {playerList}
            </ul>
          </section>

          <section className='all-games'>
            <h2>Games Played</h2>
            <ul>
              {gameList}
            </ul>
          </section>
        </div>
      </>
    );
  }
}

export default DashBoard;