/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import SuccessPopUp from './SucessPopUp';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SuccessPopUp />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});