import * as React from "react";
class StateABC extends React.Component {
  state = {
    first: false,
    second: 1.23,
    thired: "Hello",
    fourth: [1, 2, 3],
  };
  render() {
    const { first, second, thired, fourth } = this.state;
    return (
      <div>
        <button disabled={first}>My Button</button>
        <p>
          Value of variable is: <strong>{second}</strong>
        </p>
        <p>
          Greeting statement: <strong>{thired}</strong>
        </p>
        <p>
          Array is : <strong>{typeof(fourth)}</strong>
        </p>
      </div>
    );
  }
}
export default StateABC;
