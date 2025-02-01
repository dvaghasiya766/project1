import React, { useState } from "react";
function RegistrationForm() {
  const [formData, setFormData] = useState({
    cricketerName: "",
    gender: "",
    email: "",
    matches: [],
    password: "",
    confirmPassword: "",
    country: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let updatedMatches = formData.matches;
      if (checked) {
        updatedMatches = [...updatedMatches, value];
      } else {
        updatedMatches = updatedMatches.filter((match) => match !== value);
      }
      setFormData({ ...formData, matches: updatedMatches });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setSubmittedData(formData);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Cricketer Name</label>
          <input
            type="text"
            className="form-control"
            name="cricketerName"
            value={formData.cricketerName}
            onChange={handleChange}
            minLength="8"
            required
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <br />
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="Male"
              onChange={handleChange}
              required
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Matches</label>
          <br />
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              name="matches"
              value="ODI"
              onChange={handleChange}
            />
            <label className="form-check-label">ODI</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              name="matches"
              value="TEST"
              onChange={handleChange}
            />
            <label className="form-check-label">TEST</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              name="matches"
              value="T20"
              onChange={handleChange}
            />
            <label className="form-check-label">T20</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              name="matches"
              value="DOMESTIC"
              onChange={handleChange}
            />
            <label className="form-check-label">DOMESTIC</label>
          </div>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <select
            className="form-control"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="England">England</option>
            <option value="South Africa">South Africa</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="West Indies">West Indies</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      {submittedData && (
        <div className="mt-5">
          <h2>Submitted Data</h2>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Cricketer Name</td>
                <td>{submittedData.cricketerName}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{submittedData.gender}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{submittedData.email}</td>
              </tr>
              <tr>
                <td>Matches</td>
                <td>{submittedData.matches.join(", ")}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{submittedData.country}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
