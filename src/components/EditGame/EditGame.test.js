import React from 'react';
import ReactDOM from 'react-dom';
import EditGame from './EditGame';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    match: { params: [] }
  };

  ReactDOM.render(
    <BrowserRouter>
      <EditGame {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});