// 4. Create a react pure functional component
// that will take text input and print total number of characters.
import { useState } from "react";
function Task4() {
  const [textlength, setTextlength] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTextlength(e.target.value.length)}
      />
      <p>Length of Text is: {textlength}</p>
    </div>
  );
}
export default Task4;
