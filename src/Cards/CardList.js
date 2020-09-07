import React, { useEffect, useState } from "react";
import Card from "./Card";
import Cookies from "js-cookie";
import styles from "./Cardlist.module.css";
const CardList = ({ temp }) => {
  const [username] = useState(Cookies.get("username"));
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("https://managero-passwords.herokuapp.com/cardlist", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      });
  }, [temp, username]);
  const CardArray = cards.map((post, i) => {
    return (
      <Card
        key={i}
        website={cards[i].website}
        email={cards[i].email}
        password={cards[i].password}
      />
    );
  });
  return <div className={styles.listContainer}>{CardArray}</div>;
};
export default CardList;
