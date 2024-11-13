import React from "react";

const WordDisplay = ({ word }) => (
  <div className="text-center text-2xl mb-4">
    {word.split("").map((char, index) => (
      <span key={index} className="mr-2">
        {char === " " ? " " : "_"}
      </span>
    ))}
  </div>
);

export default WordDisplay;
