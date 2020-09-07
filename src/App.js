import React, { useState, useEffect } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Dashboard from "./Dashboard/Dashboard";
import "./App.css";
import Cookies from "js-cookie";
function App() {
  const [login, setLogin] = useState(false);
  const [path, setPath] = useState(false);
  useEffect(() => {
    setPath(Cookies.get("path"));
  }, []);
  const loginRoute = (x) => {
    setLogin(x);
  };
  const Path = (x) => {
    setPath(x);
  };
  if (path) {
    return <Dashboard Path={Path} />;
  } else {
    if (login) {
      return (
        <div className="App">
          <Login loginRoute={loginRoute} path={Path} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Register loginRoute={loginRoute} />
        </div>
      );
    }
  }
}

export default App;
