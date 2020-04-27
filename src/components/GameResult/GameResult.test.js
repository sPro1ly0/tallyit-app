import React from 'react';
import ReactDOM from 'react-dom';
import GameResult from './GameResult';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {

  const name = 'Sara';
  const score = 10;
 
  // <tr> cannot appear as a child of a <div> so using <tbody>
  const tbody = document.createElement('tbody');
  ReactDOM.render(
    <BrowserRouter>
      <GameResult name={name} score={score} />
    </BrowserRouter>,
    tbody
  );
  ReactDOM.unmountComponentAtNode(tbody);
});