import React from 'react';
import ReactDOM from 'react-dom';
import DashBoard from './DashBoard';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <DashBoard />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});