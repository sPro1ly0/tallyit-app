import React, { Component } from 'react';
import './SuccessPopUp.css';

class SuccessPopUp extends React.Component {
  render() {
    return (
      <div className='popup-success'>
        <h1>{this.props.gameName} created! You can now login with this name.</h1>
        <button onClick={this.props.closePopUp} className='close-button'>Close</button>
      </div>
    );
  }
}

export default SuccessPopUp;