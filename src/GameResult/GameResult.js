/* eslint-disable react/prop-types */
import React from 'react';

export default function GameResult(props) {
  return (
    <tr><td>{props.name}</td><td>{props.score}</td></tr>
  );
}