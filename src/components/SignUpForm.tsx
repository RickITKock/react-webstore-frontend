import axios from "axios";
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:8001/users", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default App;
