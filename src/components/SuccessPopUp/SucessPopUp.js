/* eslint-disable react/prop-types */
import React from 'react';
import './SuccessPopUp.css';

// success pop up for new created group name
function SuccessPopUp(props) {
  return (
    <div className='popup-success'>
      <h1>{props.groupName} created!</h1> 
      <p>You can now login with this name.</p>
      <button onClick={props.closePopUp} className='close-button'>Close</button>
    </div>
  );
}

export default SuccessPopUp;