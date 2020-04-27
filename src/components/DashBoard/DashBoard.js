import React, { Component } from 'react';
import TallyContext from '../../TallyContext';
import TallyitApiService from '../../services/tallyit-api-service';
import './DashBoard.css';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

class DashBoard extends Component {

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      currentPage: 1,
      resultsPerPage: 10
    };
  }

  setLoadingStatus = status => {
    this.setState({
      isLoading: status
    });
  }

  componentDidMount() {
    this.setLoadingStatus(true);
    this.context.clearError();
    this.context.setCurrentGame([]);
    this.context.setPlayerScores([]);
    
    TallyitApiService.getGroupName()
      .then(res => {
        this.context.setGroupName(res);
      })
      .catch((res) => {
        this.context.setError(res);
        this.setLoadingStatus(false);
      });

    TallyitApiService.getGroupGames()
      .then(res => {
        this.context.setAllGames(res);
        this.setLoadingStatus(false);
      })
      .catch((res) => {
        this.context.setError(res);
        this.setLoadingStatus(false);
      });
  }

  // using pagination for games listed
  handlePagination = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {

    const { group, games, error } = this.context;
    const { currentPage, resultsPerPage } = this.state;
    let groupName;
    let gameList = '';
    const lastIndexOfResults = currentPage * resultsPerPage;
    const firstIndexOfResults = lastIndexOfResults - resultsPerPage;
    const currentGameResults = games.slice(firstIndexOfResults, lastIndexOfResults);
    const pageNumbers = [];

    if (group.length === 0) {
      groupName = 'there'; // Hello there!
    } else {
      groupName = group[0].group_name; // Hello Demo!
    }

    // pagination for results
    if (currentGameResults.length > 0) {
      gameList = currentGameResults.map(g => 
        <Link to={`/game/${g.id}`} key={g.id}><span className='game-name'>{`${g.game_name}`}</span> <span className='game-date'>{`${moment(g.date_created).format('lll')}`}</span></Link>
      );
    } else if (currentGameResults.length === 0) {
      gameList = 'Game scores you record will appear right here.';
    }

    for (let i = 1; i <= Math.ceil(games.length / resultsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button
          key={number}
          id={number}
          onClick={this.handlePagination}
          className='page-number'
        >
          {number}
        </button>
      );
    });

    return (
      <>
        {
          this.state.isLoading
            ? <Spinner />
            : false
        }
        <header className='dashboard-header'>
          <h1>Hi {groupName}!</h1>
          <Link className='start-game-link' to='/create-scoresheet'>Start a New Game</Link>
        </header>
        {error 
          ? <div className='red-error'>{error}</div>
          : ''}
        <div className='games-played'>
          <section className='all-games'>
            <h2><FontAwesomeIcon className='two-dice' icon='dice' size='1x'/> Games Played <FontAwesomeIcon className='two-dice' icon='dice' size='1x'/></h2>
            <div className='game-links'>
              {gameList}
            </div>
            <div className='pagination'>
              {renderPageNumbers}
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default DashBoard;