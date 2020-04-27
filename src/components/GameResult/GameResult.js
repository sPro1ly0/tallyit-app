/* eslint-disable react/prop-types */
import React from 'react';
// rows for player name and score in GameStatsPage's table
export default function GameResult(props) {
  return (
    <tr><td>{props.name}</td><td>{props.score}</td></tr>
  );
}