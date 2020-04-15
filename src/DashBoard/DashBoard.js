import React, { Component } from 'react';
import TallyContext from '../TallyContext';
import { Link } from 'react-router-dom';
import './DashBoard.css';
import moment from 'moment';

class DashBoard extends Component {

  static contextType = TallyContext;

  render() {

    const { group, games, error } = this.context;
    let gameList = '';

    if (games) {
      gameList = games.map(g => 
        <Link to={`/game/${g.id}`} key={g.id}>{`${moment(g.date_played).format('lll')} - ${g.game_name}`}</Link>
      );
    }

    return (
      <>
        <header>
          <h1>Hi {group.group_name}!</h1>
          <Link to='/create-scoresheet'>Start a New Game</Link>
        </header>
        {error 
          ? <div className="red-error">{error}</div>
          : ''}
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