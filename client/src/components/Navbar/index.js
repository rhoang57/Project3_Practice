import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from './logo.png';
import ProfileNav from '../ProfileNav/';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/write"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                write
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/read"
                className={window.location.pathname === "/read" ? "nav-link active" : "nav-link"}
              >
                read
              </Link>
            </li>
          </ul>
        </div>
        <ProfileNav link={"http://localhost:3000/users/login"}/>
      </nav>
    );
  }
  
  export default Navbar;