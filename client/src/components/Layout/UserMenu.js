import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserMenu.css';

const UserMenu = () => {
  return (
    <>
      <div className="text-left">
        <div className="list-group">
          <h4>Student Panel</h4>
          <NavLink
            to="/dashboard/user/my-profile"
            className="list-group-item list-group-item-action "
            aria-current="true"
          >
            Your Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/project-group"
            className="list-group-item list-group-item-action "
            aria-current="true"
          >
            Project Group
          </NavLink>

          <NavLink
            to="/dashboard/user/my-group"
            className="list-group-item list-group-item-action "
          >
            My Group Details
          </NavLink>
          <NavLink
            to="/dashboard/user/assignment"
            className="list-group-item list-group-item-action "
          >
            My Assignment
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
