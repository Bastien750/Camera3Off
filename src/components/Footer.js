import React from "react";
import moment from "moment";
import "./Footer.css";

function Footer() {
  const date = moment().format("dddd DD MMMM YYYY");
  return (
    <footer>
      <div className="credit">
        <p style={{ marginRight: "1em" }}>©</p>
        <div>
          <p>Designed by Nathan Thomas</p>
          <p>Developped by Bastien Lasorne</p>
        </div>
      </div>
      <p>{date}</p>
    </footer>
  );
}

export default Footer;
