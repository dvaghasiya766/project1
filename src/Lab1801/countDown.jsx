// import { useState, useEffect } from "react";

// function CountDown() {
//   const [totalSeconds, setTotalSeconds] = useState(300);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTotalSeconds((prevSeconds) =>
//         prevSeconds > 0 ? prevSeconds - 1 : clearInterval(interval)
//       );
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const minutes = Math.floor(totalSeconds / 60);
//   const seconds = totalSeconds % 60;

//   return (
//     <div>
//       <h1>Countdown Timer</h1>
//       <span>
//         {minutes} : {seconds}
//       </span>
//     </div>
//   );
// }

// export default CountDown;
import { useState, useEffect } from "react";
import "./CountDown.css"; // Make sure you have a CSS file to style the component

function CountDown() {
  const [totalSeconds, setTotalSeconds] = useState(300);

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
        <span>{minutes}</span> : <span>{seconds}</span>
      </div>
    </div>
  );
}

export default CountDown;
