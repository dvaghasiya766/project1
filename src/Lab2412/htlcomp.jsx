import * as React from "react";

class HtmlComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
      </div>
    );
  }
}
export default HtmlComponent;
