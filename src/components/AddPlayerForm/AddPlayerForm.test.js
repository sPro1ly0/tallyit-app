/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import AddPlayerForm from './AddPlayerForm';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <AddPlayerForm />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});