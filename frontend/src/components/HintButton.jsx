import React from "react";
import api from "../api";
const HintButton = ({ hintsUsed, setHintsUsed, setScore }) => {
  const handleHint = async () => {
    try {
      const response = await api.get("/game/hint");
      alert(response.data.hint);
      setHintsUsed((prev) => prev + 1);
      setScore((prev) => Math.max(prev - 10, 0));
    } catch (error) {
      console.error("Error fetching hint:", error);
    }
  };

  return (
    <button
      onClick={handleHint}
      className="bg-green-500 text-white p-2 rounded mb-4 w-full"
    >
      Request Hint
    </button>
  );
};

export default HintButton;
