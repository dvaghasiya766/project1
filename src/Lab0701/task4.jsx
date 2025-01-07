// 4. Create a react pure functional component
// that will take text input and print total number of characters.
import { useState } from "react";
function Task4() {
  const [text, setText] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>Length of Text is: {text.length}</p>
    </div>
  );
}
export default Task4;
