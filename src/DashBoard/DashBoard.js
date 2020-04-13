import React, { Component } from 'react';
import './DashBoard.css';

class DashBoard extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Hi bestfam123!</h1>
          <button>Start a New Game</button>
        </header>

        <div>
          <section>
            <h2>Players</h2>
            <button>Add a New Player</button>
            <ul>
              <li><a>Mom</a></li>
              <li><a>Dad</a></li>
              <li><a>Ray</a></li>
              <li><a>Sara</a></li>
              <li><a>Grandpa</a></li>
              <li><a>Lilly</a></li>
            </ul>
          </section>

          <section>
            <h2>Games Played</h2>
            <ul>
              <li>Jenga</li>
              <li>Euchre</li>
              <li>Monopoly</li>
              <li>Uno</li>
              <li>Pictionary</li>
            </ul>
          </section>
        </div>
      </>
    );
  }
}

export default DashBoard;