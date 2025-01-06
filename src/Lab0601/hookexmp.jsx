import { useState } from "react";

function HookExample() {
  const [name] = useState("HOokExaMplE");
  const array = [
    "red",
    "green",
    "blue",
    "yellow",
    "Orange",
    "Pink",
    "lightblue",
    "gray",
    "black",
    "brown",
    "lightgreen",
  ];

  return (
    <div>
      <h1>{name}</h1>
      <div style={{ display: "inline-flex" }}>
        {array.map((color, index) => (
          <div key={index} style={{ color: color.toLowerCase() }}>
            {name[index]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HookExample;
