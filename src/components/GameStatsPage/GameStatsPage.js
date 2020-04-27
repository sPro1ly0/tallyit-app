/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import TallyContext from '../../TallyContext';
import TallyitApiService from '../../services/tallyit-api-service';
import GameResult from '../GameResult/GameResult';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './GameStatsPage.css';
import moment from 'moment';
import PieChart from 'react-minimal-pie-chart';
import colors from '../Colors'; // colors for pie chart

class GameStatsPage extends Component {

  static defaultProps = {
    match: { params: {} },
  }

  static contextType = TallyContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false
    };
  }

  setLoadingStatus = status => {
    this.setState({
      isLoading: status
    });
  }
  
  handleGoBack = () => {
    this.props.history.push('/dashboard');
  };

  
  handleDelete = () => {
    const { game_id } = this.props.match.params;
    this.setState({ error: null });

    TallyitApiService.deleteGame(game_id)
      .then(() => { 
        this.context.deleteGame(game_id);
        this.props.history.push('/dashboard');
        this.context.setCurrentGame([]);
      })
      .catch(this.context.setError);
  }

  componentDidMount() {
    this.setLoadingStatus(true);
    this.context.clearError();
    const { game_id } = this.props.match.params;

    TallyitApiService.getGame(game_id)
      .then(res => {
        this.context.setCurrentGame(res);
      })
      .catch((res) => {
        this.context.setError(res); 
      });

    TallyitApiService.getGamePlayerScores(game_id)
      .then((res) => {
        this.context.setPlayerScores(res);
        this.setLoadingStatus(false);
      })
      .catch((res) => {
        this.context.setError(res);
        this.setLoadingStatus(false);
      });
  }

  render() {
    const { current_game, player_scores } = this.context;
    let game;
    let gameId;
    let date;
    let results;

    if (current_game.length > 0) {

      game = current_game[0].game_name;

      if (game === undefined) {
        game = 'Unknown';
      }

      gameId = current_game[0].id;

      date = (moment(game.date_created).format('MMM Do YYYY'));
        
      results = player_scores.map(p => 
        <GameResult 
          key={p.id} 
          name={p.player_name} 
          score={p.score} 
        />
      );
    } 

    // data for pie chart
    const playerData = player_scores.map((p, i) => {
      return { 
        title: p.player_name,
        value: p.score, 
        color: colors[i] 
      };
    });

    return (
      <>
        {
          this.state.isLoading
            ? <Spinner />
            : false
        }
        <header className='game-stats-header'>
          <h1>{game} Stats</h1>
          <h2>Date Played: {date}</h2>
        </header>
        <div className='table-and-chart'>
          <section className='scores-table-section'>
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
          <section className='pie-chart'>
            <PieChart
              animate={false}
              animationDuration={1000}
              animationEasing='ease-out'
              cx={50}
              cy={50}
              data={playerData}
              label={true}
              labelPosition={60}
              labelStyle={{
                fontFamily: 'sans-serif',
                fontSize: '6px'
              }}
              lengthAngle={360}
              lineWidth={20}
              paddingAngle={2}
              radius={50}
              rounded={false}
              startAngle={0}
              viewBoxSize={[
                100,
                100
              ]} 
            />
          </section>
        </div>
        <div className='game-edit-delete-buttons'>
          <Link className='edit-game-button' to={`/edit-game/${gameId}`}>
            <FontAwesomeIcon icon='pencil-alt' size='1x'/> Edit
          </Link>
          <button className='delete-game-button' onClick={this.handleDelete}>
            <FontAwesomeIcon icon='trash' size='1x'/> Delete
          </button>
        </div>
        <button 
          className='go-back-stats-button' 
          onClick={this.handleGoBack}
        >
          Go Back
        </button>
      </>
    );
  }
}

export default GameStatsPage;