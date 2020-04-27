import React from 'react';
import ReactDOM from 'react-dom';
import CounterNumberForm from './CounterNumberForm';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const handleNumberChange = (e) => {
    this.setState({
      counter_number: Number(e.target.value)
    });
  };

  const number = 1;
  
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CounterNumberForm 
        counterNumber={number}
        onNumberChange={handleNumberChange} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});