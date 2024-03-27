import React from 'react';
import Layout from './../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';
import { useAuth } from '../../context/auth';
import './dashboard.css';

const Dashboard = ({ children }) => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card">
              <h1>Welcome to {auth?.user?.fullName}</h1>
              {/* <h1>User details</h1>
              <h5>User ID: {auth?.user?.userID}</h5>
              <h5>Username: {auth?.user?.fullName}</h5>
              <h5>Email: {auth?.user?.email}</h5>
              <h5>NIC: {auth?.user?.nicNo}</h5>
              <h5>Contact Number: {auth?.user?.mobileNo}</h5> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
