import React, { useState } from "react";
import "./Login.css";
import user from "./user.png";
import Cookies from "js-cookie";
const Login = ({ loginRoute, path }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const handleLogin = () => {
    fetch("https://managero-passwords.herokuapp.com/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Authentication successful!") {
          Cookies.set("username", username);
          Cookies.set("path", true);
          alert("Login Successful");
          path(true);
        } else if (data === "incorrect username") {
          alert("Incorrect Username");
        } else {
          alert("Incorrect Password");
        }
      });
  };
  return (
    <div class="loginbox">
      <h1>Login Here</h1>
      <img src={user} id="user" alt="user" />
      <div>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />{" "}
          </label>
        </div>

        <div>
          <label>
            Password:
            <input
              type="Password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </label>
        </div>
        <div>
          <input
            type="submit"
            name="submit"
            value="Login"
            onClick={handleLogin}
          />
          <span>Don't have a account?</span>
          <span
            className="registerButton"
            onClick={() => {
              loginRoute(false);
            }}
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;
