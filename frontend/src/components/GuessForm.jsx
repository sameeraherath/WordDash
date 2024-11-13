import React, { useState } from "react";
import api from "../api";

const GuessForm = ({ remainingGuesses, setRemainingGuesses }) => {
  const [guess, setGuess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/game/check", { guess });
      if (response.data.correct) {
        alert("Congratulations, you guessed the word!");
      } else {
        setRemainingGuesses((prev) => prev - 1);
      }
    } catch (error) {
      console.error("Error submitting guess:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="border rounded p-2 flex-grow"
        placeholder="Enter your guess"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">
        Guess
      </button>
    </form>
  );
};

export default GuessForm;
