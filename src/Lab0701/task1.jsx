// 1. Create a react functional component
// that will take 2 numbers and print addtion, subtractions, multiplication and division.
import { useState } from "react";
function Task1() {
  const [num1, setNum1] = useState(0); // First number
  const [num2, setNum2] = useState(0); // Second number

  return (
    <div>
      <h1>Arithmetic Operations</h1>
      <label>
        Number 1:
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value) || 0)}
        />
      </label>
      <br />
      <label>
        Number 2:
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value) || 0)}
        />
      </label>
      <hr />
      <h2>Results:</h2>
      <p>Addition: {num1 + num2}</p>
      <p>Subtraction: {num1 - num2}</p>
      <p>Multiplication: {num1 * num2}</p>
      <p>Division: {num2 !== 0 ? num1 / num2 : "Cannot divide by zero"}</p>
    </div>
  );
}

export default Task1;
