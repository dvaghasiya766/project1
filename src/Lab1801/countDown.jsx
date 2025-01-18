import { useState, useEffect } from "react";
import "./CountDown.css"; // Ensure this file exists and is properly imported

function CountDown() {
  const [totalSeconds, setTotalSeconds] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prevSeconds) =>
        prevSeconds > 0 ? prevSeconds - 1 : clearInterval(interval)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="countdown-container">
      <h1 className="countdown-title">Countdown Timer</h1>
      <div className="countdown-display">
        <span>{isNaN(minutes) ? 0 : minutes}</span> :{" "}
        <span>{isNaN(seconds) ? 0 : seconds}</span>
      </div>
    </div>
  );
}

export default CountDown;
