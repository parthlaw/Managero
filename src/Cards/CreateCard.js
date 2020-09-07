import React, { useState, useRef } from "react";
import Cookies from "js-cookie";
import "./Card.css";
const CreateCard = ({ ChangeTemp }) => {
  const [website, setWebsite] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username] = useState(Cookies.get("username"));
  const text = useRef();
  const em = useRef();
  const web = useRef();
  const sendData = () => {
    fetch("https://managero-passwords.herokuapp.com/card", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        website: website,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "success") {
          ChangeTemp();
          text.current.value = "";
          web.current.value = "";
          em.current.value = "";
          alert("Card Added");
        }
      });
  };
  return (
    <div className="card">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h4>Create Card</h4>
          </div>
          <div className="flip-card-back">
            <div className="card1">
              <input
                ref={web}
                type="text"
                placeholder="website"
                onChange={(e) => {
                  setWebsite(e.target.value);
                }}
              />
              <input
                ref={em}
                type="text"
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                ref={text}
                type="text"
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input type="submit" placeholder="save it" onClick={sendData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateCard;
