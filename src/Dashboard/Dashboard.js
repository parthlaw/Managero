import React, { useState } from "react";
//import "./App.css";
import CreateCard from "../Cards/CreateCard";
import CardList from "../Cards/CardList";
import styles from "./Dashboard.module.css";
import Cookies from "js-cookie";
function Dashboard({ Path }) {
  const [temp, setTemp] = useState(false);
  const ChangeTemp = () => {
    setTemp(!temp);
  };
  const handleLogout = () => {
    Cookies.remove("username");
    Cookies.remove("path");
    Path(false);
  };
  return (
    <div>
      <div className="dash">
        <div className={styles.main}>
          <h1>MANAGERO</h1>
        </div>
        <div className={styles.text}>
          <h2>Your Passwords</h2>
        </div>
        <div className={styles.container}>
          <CardList temp={temp} />
          <CreateCard ChangeTemp={ChangeTemp} />
        </div>
      </div>
      <button className={styles.logout} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
export default Dashboard;
