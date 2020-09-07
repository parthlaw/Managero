import React from "react";
import CryptoJS from "crypto-js";
const Card = ({ website, email, password }) => {
  var bytes = CryptoJS.AES.decrypt(password, "secret key 123");
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  return (
    <div className="card">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <span>{website}</span>
          </div>
          <div className="flip-card-back">
            <div className="card1">
              <span>Email:{email}</span>
              <br />
              <br />
              <span>Password:{originalText}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
