/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import TallyContext from '../../TallyContext';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';
import GameResult from '../GameResult/GameResult';
import './GameStatsPage.css';
import TallyitApiService from '../../services/tallyit-api-service';
import moment from 'moment';
import PieChart from 'react-minimal-pie-chart';
import colors from '../Colors';

class GameStatsPage extends Component {

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

    this.setState({
      error: null
    });

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

  componentWillUnmount() {
    this.context.setPlayerScores([]);
  }

  render() {

    const { games, player_scores } = this.context;
    const { game_id } = this.props.match.params;

    const game = games.find(g =>
      g.id === Number(game_id)    
    );
    
    let date = (moment(game.date_created).format('MMM Do YYYY'));

    // console.log(player_scores);
    const results = player_scores.map(p => 
      <GameResult key={p.id} name={p.player_name} score={p.score} />
    );

    // data for pie chart
    const playerData = player_scores.map((p, i) => {
      return { 
        title: p.player_name,
        value: p.score, 
        color: colors[i] 
      };
    }
    
    );

    return (
      <>
        {
          this.state.isLoading
            ? <Spinner />
            : false
        }
        <button className='go-back-button' onClick={this.handleGoBack}>Go Back</button>
        <header className='game-stats-header'>
          <h1>{game.game_name} Stats</h1>
          <h2>Date Played: {date}</h2>
        </header>

        <section className='games-played'>
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
            animate
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
            paddingAngle={5}
            radius={50}
            rounded={false}
            startAngle={0}
            viewBoxSize={[
              100,
              100
            ]} 
          />
        </section>

        <div className='game-edit-delete-buttons'>
          <Link className='edit-game-button' to={`/edit-game/${game.id}`}>Edit Game</Link>
          <button className='delete-game-button' onClick={this.handleDelete}>Delete Game</button>
        </div>

      </>
    );
  }
}

export default GameStatsPage;