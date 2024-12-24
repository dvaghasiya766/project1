import * as React from "react";

class Component2 extends React.Component {
  render() {
    return (
      <div>
        <p className="text-success">
          <strong>This text from Component 2.</strong>
        </p>
        <Component3 />
      </div>
    );
  }
}
class Component3 extends React.Component {
  render() {
    return (
      <p className="text-info">
        <strong>This text from Component 3.</strong>
      </p>
    );
  }
}
class Component1 extends React.Component {
  render() {
    return (
      <div className="container py-5">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        ></script>
        <h1 className="text-danger">Component Hierarchy</h1>
        <p className="text-warning">
          <strong>
            This text from Component 1 and component1 is default class.
          </strong>
        </p>
        <Component2 />
        <button className="btn btn-primary">Click Me</button>
      </div>
    );
  }
}
export default Component1;
