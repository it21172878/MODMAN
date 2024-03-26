import React from 'react';
import Layout from './../../components/Layout/Layout';
import { useAuth } from '../../context/auth';
import ProjectCoordinatorMenu from '../../components/Layout/ProjectCoordinatorMenu';

const ProjectCoordinatorDashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ProjectCoordinatorMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75">
              <h4>Username: {auth?.user?.fullName}</h4>
              <h4>Email: {auth?.user?.email}</h4>
              <h4>Contact Number: {auth?.user?.mobileNo}</h4>
              <h4>User role: {auth?.user?.role}</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectCoordinatorDashboard;
