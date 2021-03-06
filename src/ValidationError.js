/* eslint-disable react/prop-types */
import React from 'react';

export default function ValidationError(props) {
  if (props.message) {
    return (
      <div className='red-error'>{props.message}</div>
    );
  }

  return <></>;
}