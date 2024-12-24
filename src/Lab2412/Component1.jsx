import * as React from "react";

class Component2 extends React.Component {
  render() {
    return (
      <div>
        <h2>Component 2</h2> <Component3 />
      </div>
    );
  }
}
class Component3 extends React.Component {
  render() {
    return <h3>Component 3</h3>;
  }
}
class Component1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Component 1</h1>
        <p>This is a simple React component.</p>
        <Component2 />
        <button>Click Me</button>
      </div>
    );
  }
}
export default Component1;
