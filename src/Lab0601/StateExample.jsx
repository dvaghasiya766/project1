import { useState } from "react";

function StateExample1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("RKU");
  const [color, setColor] = useState("Red");
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <hr />
      <h1>{name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <hr />
      <h1>Color: {color}</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input type="radio" name="color" id="color1" onChange={() => setColor("#00ff00")} />
      <label htmlFor="color1">{"Green"}</label>
      <input type="radio" name="color" id="color2" onChange={() => setColor("#ff0000")} />
      <label htmlFor="color2">{"Red"}</label>
      <input type="radio" name="color" id="color3" onChange={() => setColor("#0000ff")} />
      <label htmlFor="color3"> {"Blue"}</label>
      <input type="radio" name="color" id="color4" onChange={() => setColor("#fff700")} />
      <label htmlFor="color4"> {"Yellow"}</label>
    </div>
  );
}
export default StateExample1;
