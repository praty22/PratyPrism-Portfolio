import React from "react";
import "./Nav.css";

const Nav = (props) => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            praty
            <span className="color">prism</span>
          </p>
          <a
            onClick={props.toggleMenu}
            className={
              props.showMenu === "active" ? "menu-button active" : "menu-button"
            }
            href="#home"
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
