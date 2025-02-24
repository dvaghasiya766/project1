import { useReducer } from "react";
function Funct1(state, action) {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.value };
    case "changeAge":
      return { ...state, age: action.value };
    default:
      return state;
  }
}
function ReducerExmp() {
  const [{ name, age }, dispatch] = useReducer(Funct1, {
    name: "Hello world",
    age: 30,
  });
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) =>
          dispatch({ type: "changeName", value: e.target.value })
        }
      />
      <br />
      Name is {name}
      <br />
      <input
        type="number"
        value={age}
        onChange={(e) => dispatch({ type: "changeAge", value: e.target.value })}
      />
      <br />
      Age is {age}
    </>
  );
}
export default ReducerExmp;
