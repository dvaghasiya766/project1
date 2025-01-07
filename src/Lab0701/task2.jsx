// 2. Create a react pure functional component
// that will take email address as input and print wether it is a valid email address or not.

import { useState } from "react";

function Task2() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email) => {
    // Simple email regex pattern
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail));
  };

  return (
    <div>
      <h1>Email Validator</h1>
      <input
        type="text"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <p>
        {email
          ? isValid
            ? "Valid Email Address"
            : "Invalid Email Address"
          : "Please enter an email"}
      </p>
    </div>
  );
}

export default Task2;
