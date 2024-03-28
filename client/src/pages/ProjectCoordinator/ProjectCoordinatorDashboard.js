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
            <h1>Welcome to {auth?.user?.fullName}</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectCoordinatorDashboard;
