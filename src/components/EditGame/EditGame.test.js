import React from 'react';
import ReactDOM from 'react-dom';
import EditGame from './EditGame';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <EditGame />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});