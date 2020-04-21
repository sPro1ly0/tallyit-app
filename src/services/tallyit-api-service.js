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
  }
};

export default TallyitApiService;