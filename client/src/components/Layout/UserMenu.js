import React from 'react';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Student Panel</h4>
          <NavLink
            to="/dashboard/user/project-group"
            className="list-group-item list-group-item-action "
            aria-current="true"
          >
            Project Group
          </NavLink>
          <NavLink
            to="/dashboard/user/project-group"
            className="list-group-item list-group-item-action "
          >
            Project Group
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
