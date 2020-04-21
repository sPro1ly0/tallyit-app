import config from '../config';
import TokenService from '../services/token-service';

const TallyitApiService = {
  getGroupName() {
    return fetch(`${config.API_ENDPOINT}/groups`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()    
      );
  },
  getGroupGames() {
    return fetch(`${config.API_ENDPOINT}/groups/games`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  getGamePlayerScores(game_id) {
    return fetch(`${config.API_ENDPOINT}/games/${game_id}/player-scores`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  postGame(newGame) {
    return fetch(`${config.API_ENDPOINT}/games`, {
      method: 'POST',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        game_name: newGame.game_name
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );      
  },
  deleteGame(gameId) {
    return fetch(`${config.API_ENDPOINT}/games/${gameId}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok) {
          res.json().then(e => Promise.reject(e));
        }
      });
  }
};

export default TallyitApiService;