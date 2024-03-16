import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              MOD
              <span className="inline-block text-secondary">MAN</span>
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/specializations"
                  data-bs-toggle="dropdown"
                >
                  Specializations
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Information Technology (IT)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Software Engineering (SE)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Information Systems (IS)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Cyber Security (CS)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Data Science (DS)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Computer Systems and Network Engineering (CSNE)
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link ">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link ">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/myaccount" className="nav-link ">
                  My Account
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signup" className="nav-link ">
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link ">
                  Log In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
