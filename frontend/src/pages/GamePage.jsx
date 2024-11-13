import React, { useState, useEffect } from "react";
import GameTimer from "../components/GameTimer";
import GuessForm from "../components/GuessForm";
import HintButton from "../components/HintButton";
import ScoreBoard from "../components/ScoreBoard";
import WordDisplay from "../components/WordDisplay";
import api from "../api";

const GamePage = () => {
  const [word, setWord] = useState("");
  const [score, setScore] = useState(100);
  const [remainingGuesses, setRemainingGuesses] = useState(5);
  const [hintsUsed, setHintsUsed] = useState(0);

  // Fetch the hidden word from backend on component mount
  useEffect(() => {
    async function fetchWord() {
      try {
        const response = await api.get("/game/getWord");
        setWord(response.data.word);
      } catch (error) {
        console.error("Error fetching word:", error);
      }
    }
    fetchWord();
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Word Guessing Game
      </h1>
      <GameTimer />
      <ScoreBoard score={score} remainingGuesses={remainingGuesses} />
      <WordDisplay word={word} />
      <GuessForm
        remainingGuesses={remainingGuesses}
        setRemainingGuesses={setRemainingGuesses}
      />
      <HintButton
        hintsUsed={hintsUsed}
        setHintsUsed={setHintsUsed}
        setScore={setScore}
      />
    </div>
  );
};

export default GamePage;
