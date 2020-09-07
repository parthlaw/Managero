import React, { useState } from "react";
import "./Register.css";
const Register = ({ loginRoute }) => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSubmit = () => {
    fetch("https://managero-passwords.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "success") {
          loginRoute(true);
          alert("Login to continue");
        }
      });
  };
  return (
    <div className="registrationContainer">
      <div className="registrationbox">
        <h1>Managero</h1>

        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="Password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </label>
        <br />
        <br />
        <br />
        <input type="submit" onClick={handleSubmit} />
        <span>Already have a account?</span>
        <button
          className="loginButton"
          onClick={() => {
            loginRoute(true);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default Register;
