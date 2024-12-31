// useState
// useEffect
// useReducer
// useContext
// customHooks
// useMemo / useReference
import { useState } from "react";
function HookExample1() {
  const [name] = useState("Hello world!");
  return <h1>{name}</h1>;
}
export default HookExample1;
