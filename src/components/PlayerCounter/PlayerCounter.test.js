import React from 'react';
import ReactDOM from 'react-dom';
import PlayerCounter from './PlayerCounter';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PlayerCounter />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});