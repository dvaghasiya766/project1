import * as React from "react";
class StateXYZ extends React.Component {
  state = {
    first: false,
    second: 1.23,
    thired: "Hello",
    fourth: ["yellow", "green", "orange", "red"],
  };
  constructor() {
    super();
    setTimeout(() => {
      this.setState({
        first: true,
        second: 2,
        thired: "Goodbye",
        fourth: ["yellow", "purple", "white", "lightpink"],
      });
    }, 3000);
    console.log("State ABC");
  }
  render() {
    const { first, second, thired, fourth } = this.state;
    return (
      <div style={{ backgroundColor: fourth[1] }}>
        <button disabled={first}>My Button</button>
        <p style={{ color: fourth[0] }}>
          Value of variable is: <strong>{second}</strong>
        </p>
        <p style={{ color: fourth[2] }}>
          Greeting statement: <strong>{thired}</strong>
        </p>
        <p style={{ color: fourth[3] }}>
          Array is : <strong>{typeof fourth}</strong>
        </p>
      </div>
    );
  }
}
export default StateXYZ;
