import * as React from "react";
class StateABC extends React.Component {
  state = {
    first: false,
    second: 1.23,
    thired: "Hello",
    fourth: [1, 2, 3, "yellow", "green"],
  };
  render() {
    const { first, second, thired, fourth } = this.state;
    return (
      <div style={{ backgroundColor: fourth[4] }}>
        <button disabled={first}>My Button</button>
        <p style={{ color: fourth[3] }}>
          Value of variable is: <strong>{second}</strong>
        </p>
        <p>
          Greeting statement: <strong>{thired}</strong>
        </p>
        <p>
          Array is : <strong>{typeof fourth}</strong>
        </p>
      </div>
    );
  }
}
export default StateABC;
