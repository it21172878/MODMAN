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
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              MOD
              <span className="inline-block ">MAN</span>
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
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link ">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      {auth?.user?.fullName}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
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
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
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
