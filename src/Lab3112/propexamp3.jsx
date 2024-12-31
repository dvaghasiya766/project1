import * as React from "react";
import MyButton from "./propexam1";
import MyList from "./propexamp2";
class MyCustComp extends React.Component {
  state = {
    var1: false,
    var2: "buttons",
    var3: ["apple", "orange", "banana", "guava"],
  };
  render() {
    const { var1, var2, var3 } = this.state;
    return (
      <div>
        <MyButton prop1={var1} xyz={var2} />
        <MyList itms={var3} />
      </div>
    );
  }
}
export default MyCustComp;
