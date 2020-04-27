import React from 'react';
import ReactDOM from 'react-dom';
import SuccessPopUp from './SucessPopUp';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const groupName = 'beatles';
  const handleSignUpSuccessPopUp = () => {
    this.setState({
      showPopUp: !this.state.showPopUp
    });
  };

  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SuccessPopUp groupName={groupName} closePopUp={handleSignUpSuccessPopUp} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});