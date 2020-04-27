/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import NavBarTop from './NavBarTop';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <NavBarTop />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});