import React from "react";

const ScoreBoard = ({ score, remainingGuesses }) => (
  <div className="flex justify-between mb-4">
    <div>Score: {score}</div>
    <div>Guesses Left: {remainingGuesses}</div>
  </div>
);

export default ScoreBoard;
