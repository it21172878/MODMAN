import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: '',
    });
    localStorage.removeItem('auth');
    toast.success("You've been logged out successfully!");
  };
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
              <span className="inline-block ">MAN</span>
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/specializations"
                  data-bs-toggle="dropdown"
                >
                  Specializations
                </Link>
                <ul className=" dropdown-menu">
                  <li>
                    <Link
                      to="/information-technology"
                      className="dropdown-item"
                    >
                      Information Technology (IT)
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-engineering" className="dropdown-item">
                      (SE)
                    </Link>
                  </li>
                  <li>
                    <Link to="/information-systems" className="dropdown-item">
                      Information Systems (IS)
                    </Link>
                  </li>
                  <li>
                    <Link to="/cyber-security" className="dropdown-item">
                      Cyber Security (CS)
                    </Link>
                  </li>
                  <li>
                    <Link to="/data-science" className="dropdown-item">
                      Data Science (DS)
                    </Link>
                  </li>
                  <li>
                    <Link to="/csne" className="dropdown-item">
                      Computer Systems and Network Engineering (CSNE)
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link ">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link ">
                  Contact
                </Link>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link ">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/sendotp" className="nav-link ">
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      {auth?.user?.fullName}
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to={`/dashboard/${
                            auth?.user?.role === 'projectCoordinator'
                              ? 'projectCoordinator'
                              : 'user' && auth?.user?.role === 'Supervisor'
                              ? 'Supervisor'
                              : 'user' && auth?.user?.role === 'Examiner'
                              ? 'Examiner'
                              : 'user' && auth?.user?.role === 'projectMember'
                              ? 'projectMember'
                              : 'user'
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
