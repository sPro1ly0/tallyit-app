import React, { Component } from 'react';
import TallyContext from '../../TallyContext';
import TallyitApiService from '../../services/tallyit-api-service';
import { Link } from 'react-router-dom';
import './DashBoard.css';
import moment from 'moment';

class DashBoard extends Component {

  static contextType = TallyContext;

  componentDidMount() {
    
    TallyitApiService.getGroupName()
      .then(res => {
        this.context.setGroupName(res);
      })
      .catch(this.context.setError);
    TallyitApiService.getGroupGames()
      .then(res => {
        this.context.setAllGames(res);
      })
      .catch(this.context.setError);
  }

  render() {

    const { group, games, error } = this.context;
    let groupName;
    let gameList = '';
    // console.log(group);

    if (group.length === 0) {
      groupName = 'there';
    } else {
      groupName = group[0].group_name;
    }

    if (games.length > 0) {
      gameList = games.map(g => 
        <Link to={`/game/${g.id}`} key={g.id}>{`${moment(g.date_created).format('lll')} - ${g.game_name}`}</Link>
      );
    } else if (games.length === 0) {
      gameList = 'Game scores you record will appear right here.';
    }

    return (
      <>
        <header>
          <h1>Hi {groupName}!</h1>
          <Link className='start-game-link' to='/create-scoresheet'>Start a New Game</Link>
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