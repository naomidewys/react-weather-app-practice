import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <p className="Footer">
      {" "}
      Coded by{" "}
      <a
        href="https://www.linkedin.com/in/naomidewys"
        target="_blank"
        rel="noopener noreferrer"
      >
        Naomi De Wys
      </a>
      , open-sourced on{" "}
      <a
        href="https://github.com/naomidewys/react-weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      , and hosted on Netlify.
    </p>
  );
}
