import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "") {
      alert("Username cannot be empty!");
      return;
    }

    // Password must not be empty and must contain a number
    // and should be at least 8 characters long
    if (password.length === 0) {
      alert("Password cannot be empty");
      return;
    } else if (!/\d/.test(password)) {
      // Check if password contains a number
      alert("Password must contain at least one number");
      return;
    } else if (password.length < 8) {
      // Check if password is at least 8 characters long
      alert("Password must be at least 8 characters long");
      return;
    }

    alert("Done!");
    // submit form data here...
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        className="form-input"
        onChange={(e) => setUsername(e.target.value)}
      />

      <label>Password:</label>
      <input
        type="password"
        className="form-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
};

export default App;
