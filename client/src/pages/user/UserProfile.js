import React from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';
import { useAuth } from '../../context/auth';

const UserProfile = () => {
  const [auth, setAuth] = useAuth();
  console.log(auth.user.answer);
  //   console.log(auth?.user);
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card">
              <h1>User details</h1>
              <h5>User ID: {auth?.user?.userID}</h5>
              <h5>Username: {auth?.user?.fullName}</h5>
              <h5>Email: {auth?.user?.email}</h5>
              <h5>NIC: {auth?.user?.nicNo}</h5>
              <h5>Contact Number: {auth?.user?.mobileNo}</h5>
              {/* <h5>Answer: {auth?.user?.answer}</h5> */}
              {/* <h5>Role: {auth?.user?.role}</h5> */}
              {/* <h5>Password: {auth?.user?.password}</h5> */}
              <a href="/dashboard/user/update-profile">
                <button>update user</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
