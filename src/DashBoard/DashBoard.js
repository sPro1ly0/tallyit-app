import React, { Component } from 'react';
import TallyContext from '../TallyContext';
import { Link } from 'react-router-dom';
import './DashBoard.css';

class DashBoard extends Component {

  static contextType = TallyContext;

  render() {

    const { group, games } = this.context;
    let gameList = '';

    if (games) {
      gameList = games.map(g => <Link to={`/game/${g.id}`} key={g.id}>{`${g.game_name}`}</Link>);
    }

    return (
      <>
        <header>
          <h1>Hi {group.group_name}!</h1>
          <Link to='/create-scoresheet'>Start a New Game</Link>
        </header>

        <div className='games-played'>
          <section className='all-games'>
            <h2>Games Played</h2>
            <div className='game-links'>
              {gameList}
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default DashBoard;