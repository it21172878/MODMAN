import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectCoordinatorMenu = () => {
  return (
    <>
      <div className="text-left">
        <div className="list-group">
          <h4>Project Coordinator Panel</h4>
          <NavLink
            to="/dashboard/projectCoordinator/add-user"
            className="list-group-item list-group-item-action "
            aria-current="true"
          >
            Create New User
          </NavLink>

          <NavLink
            to="/dashboard/projectCoordinator/all-project-coordinators"
            className="list-group-item list-group-item-action "
          >
            Project Coordinators
          </NavLink>
          <NavLink to="#" className="list-group-item list-group-item-action ">
            Project Members
          </NavLink>
          <NavLink to="#" className="list-group-item list-group-item-action ">
            Examiners
          </NavLink>
          <NavLink to="#" className="list-group-item list-group-item-action ">
            Supervisors
          </NavLink>
          <NavLink to="#" className="list-group-item list-group-item-action ">
            Students
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ProjectCoordinatorMenu;
