import React from 'react';
import Button from '../../components/Button';
import ProjectCoordinatorMenu from '../../components/Layout/ProjectCoordinatorMenu';
import Layout from '../../components/Layout/Layout';
import { useAuth } from '../../context/auth';
import '../user/UserProfile.css';

const ProjectCoordinatorProfile = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ProjectCoordinatorMenu />
          </div>
          <div className="col-md-9 user-profile">
            <h1>Your Details</h1>
            <div className="card">
              <div className="group">
                <div className="cols1">
                  <label className="label-titile">
                    <h5>User ID</h5>
                  </label>
                  <label className="label-titile">
                    <h5>Username</h5>
                  </label>
                  <label className="label-titile">
                    <h5>Email</h5>
                  </label>
                  <label className="label-titile">
                    <h5>NIC No</h5>
                  </label>
                  <label className="label-titile">
                    <h5>Contact No</h5>
                  </label>
                  <label className="label-titile">
                    <h5>Answer</h5>
                  </label>
                </div>
                <div className="cols2">
                  <label className="label-container">
                    <h5>{auth?.user?.userID}</h5>
                  </label>
                  <label className="label-container">
                    <h5>{auth?.user?.fullName}</h5>
                  </label>{' '}
                  <label className="label-container">
                    <h5>{auth?.user?.email}</h5>
                  </label>
                  <label className="label-container">
                    <h5>{auth?.user?.nicNo}</h5>
                  </label>
                  <label className="label-container">
                    <h5>{auth?.user?.mobileNo}</h5>
                  </label>
                  <label className="label-container">
                    <h5>{auth?.user?.answer}</h5>
                  </label>
                </div>
              </div>
              <a href="/dashboard/projectCoordinator/update-profile">
                <Button>Update Profile</Button>
                {/* <button>update user</button> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectCoordinatorProfile;
