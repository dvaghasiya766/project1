import * as React from "react";
import MyButton from "./propexam1";
import MyList from "./propexamp2";
import Purefunc1 from "./purefunc1";
class MyCustComp extends React.Component {
  state = {
    var1: false,
    var2: "buttons",
    var3: ["apple", "orange", "banana", "guava"],
  };
  constructor() {
    super();
    setTimeout(() => {
      this.setState({
        var1: true,
        var2: "Responsive",
        var3: ["kiwi", "mango", "peach", "plum"],
      });
    }, 1000);
  }
  render() {
    const { var1, var2, var3 } = this.state;
    return (
      <div>
        <MyButton prop1={var1} xyz={var2} />
        <MyList itms={var3} />
        {/* we can use also file name without creating class like this */}
        <Purefunc1 var1={false} var2={"How are you"} />
      </div>
    );
  }
}
export default MyCustComp;
