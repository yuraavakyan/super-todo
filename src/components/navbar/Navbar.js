import React, { Component } from "react";
import check from "../../images/check.png";
import "./styles.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <header className="navbar">
        <div className="navbar-wrapper">
          <div className="logo">
            <h1>Super Do</h1>
            <img src={check} className="check"></img>
          </div>
          <div className="navlist">
            <span>Home</span>
            <span>About</span>
            <span>Contacts</span>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
