import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header id="welcome-section">
      {/* <div class="layer" /> */}
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="logs" />
      <div className="container">
        <h1>
          <span className="line">I code</span>
          <span className="line">
            <span className="color">&</span> build things for
          </span>
          <span className="line">the web.</span>
        </h1>
        <div className="buttons">
          <a href="#projects">my portfolio</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
