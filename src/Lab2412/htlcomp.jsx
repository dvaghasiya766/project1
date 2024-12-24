import * as React from "react";

class HtmlComponent extends React.Component {
  render() {
    return (
      <div className="col-5 bg-secondary py-3 px-5 rounded mb-3">
        <form>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="text-light form-label"
            >
              Small Input
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your Text"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="text-light form-label"
            >
              Email Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1 "
              className="text-light form-label"
            >
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
    );
  }
}
export default HtmlComponent;
