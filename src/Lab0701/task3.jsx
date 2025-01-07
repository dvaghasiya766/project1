// 3. Create a react pure functional component
//  that will toggle the visibility of the text written by user
//  take one text is visible button text should be "Hide Txt"
//  when text is hidden text should be "Show Txt".
import { useState } from "react";
function Task3() {
  const [text, setText] = useState(""); // Stores the user input
  const [isVisible, setIsVisible] = useState(true); // Controls visibility

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1>Toggle Text Visibility</h1>
      <textarea
        placeholder="Type something here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Txt" : "Show Txt"}
      </button>
      <div style={{ display: isVisible ? "block" : "none" }}>
        <p>{text}</p>
      </div>
    </div>
  );
}
export default Task3;
