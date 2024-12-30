import * as React from "react";
class StatMerge extends React.Component {
  state = {
    first: "Loading...",
    second: "Loading...",
    third: "Loading...",
    fourth: "Loading...",
    cmplmsg: "Loading Done",
  };
  constructor() {
    super();
    setTimeout(() => {
      this.setState({ first: "Done" });
    }, 2000);
    setTimeout(() => {
      this.setState({ second: "Done" });
    }, 4000);
    setTimeout(() => {
      this.setState({ third: "Done" });
    }, 6000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        first: state.cmplmsg,
        second: state.cmplmsg,
        third: state.cmplmsg,
        fourth: state.cmplmsg,
      }));
    }, 8000);
  }
  render() {
    return (
      <div>
        <ul>
          {Object.keys(this.state)
            .filter((keys) => keys !== "cmplmsg")
            .map((keys) => (
              <li key={keys}>
                <strong>{keys} : </strong>
                {this.state[keys]}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
export default StatMerge;
