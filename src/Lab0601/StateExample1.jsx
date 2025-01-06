import { useState } from "react";

function FontSelector() {
  const [weight, setWeight] = useState("normal");
  const [style, setStyle] = useState("normal");
  const [decoration, setDecoration] = useState("none");
  const [color, setColor] = useState("#0000ff");

  // Options for each dropdown
  const fontWeights = ["bold", "lighter", "bolder", "light", "normal"];
  const fontStyles = ["italic", "normal"];
  const fontDecorations = ["underline", "overline", "line-through", "none"];

  return (
    <div>
      <p>Font Weight: {weight}</p>
      <select onChange={(e) => setWeight(e.target.value)}>
        {fontWeights.map((weightOption, index) => (
          <option key={index} value={weightOption}>
            {weightOption}
          </option>
        ))}
      </select>

      <p>Font Style: {style}</p>
      <select onChange={(e) => setStyle(e.target.value)}>
        {fontStyles.map((styleOption, index) => (
          <option key={index} value={styleOption}>
            {styleOption === "normal" ? "None" : styleOption}
          </option>
        ))}
      </select>

      <p>Font Decoration: {decoration}</p>
      <select onChange={(e) => setDecoration(e.target.value)}>
        {fontDecorations.map((decorationOption, index) => (
          <option key={index} value={decorationOption}>
            {decorationOption === "none" ? "None" : decorationOption}
          </option>
        ))}
      </select>
      <p>Color: {color}</p>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      {/* Example text to show changes */}
      <div
        style={{
          fontWeight: weight,
          fontStyle: style,
          textDecoration: decoration,
          color: color,
          marginTop: "20px",
        }}
      >
        This is an example text with dynamic font styling.
      </div>
    </div>
  );
}

export default FontSelector;
