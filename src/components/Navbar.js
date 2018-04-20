import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <header>
        <div id="navbar">
          <Link className="navbar-l" id="navbar-home" to="/">Home</Link>
          <form className="navbar-l" id="navbar-search"><input id="navbar-search-input" type="text" placeholder="Search for an address..." maxlength="25" autocomplete="off"/><input id="navbar-search-submit" type="submit" value="Search"/></form>
          <Link className="navbar-r" id="navbar-signup" to="/signup">Signup</Link>
          <Link className="navbar-r" id="navbar-login" to="/login">Login</Link>
          <Link className="navbar-r" id="navbar-faq" to="/faq">FAQ</Link>
          <Link className="navbar-r" id="navbar-about" to="/about">About</Link>
        </div>
      </header>
    )
  }
}

export default Navbar;
