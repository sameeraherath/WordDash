import React, { useEffect, useState } from "react";

const GameTimer = () => {
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    const timer = setInterval(
      () => setTimeLeft((time) => Math.max(time - 1, 0)),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center text-lg mb-4">
      Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}
    </div>
  );
};

export default GameTimer;
