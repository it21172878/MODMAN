import React, { useEffect, useState } from 'react';
import ProjectCoordinatorMenu from '../../components/Layout/ProjectCoordinatorMenu';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { useAuth } from '../../context/auth';

const ProjectMembers = () => {
  const [auth, setAuth] = useAuth();
  const [users, setUsers] = useState();

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get('/api/v1/auth/users');
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // getAllGroups();
  //lifecycle method
  useEffect(() => {
    if (auth?.token) getAllUsers();
  }, [auth?.token]);
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ProjectCoordinatorMenu />
          </div>
          <div className="col-md-9">
            {/* <h1>{`Hello ${auth?.token && auth?.user?.fullName}...`}</h1>
        <h5>{'This is your group details'}</h5> */}
            {/* <p className="text-center">
          {projectGroup?.length
            ? `You Have ${projectGroup.length} items in your DB ${
                auth?.token ? '' : 'please login to checkout !'
              }`
            : ' Register to group'}
        </p> */}
            <div className="items">
              <table class="container" style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th>
                      <h1>User ID</h1>
                    </th>
                    <th>
                      <h1>Full Name</h1>
                    </th>
                    <th>
                      <h1>Email</h1>
                    </th>
                    <th>
                      <h1>NIC No</h1>
                    </th>
                    <th>
                      <h1>Mobile No</h1>
                    </th>
                    <th>
                      <h1>Answer</h1>
                    </th>
                    <th>
                      <h1>User Role</h1>
                    </th>
                  </tr>
                </thead>
                {users?.map((user, index) => {
                  if (user.role === 'projectMember') {
                    return (
                      <tbody>
                        <tr key={index}>
                          <td>{user.userID}</td>
                          <td>{user.fullName}</td>
                          <td>{user.email}</td>
                          <td>{user.nicNo}</td>
                          <td>{user.mobileNo}</td>
                          <td>{user.answer}</td>
                          <td>{user.role}</td>
                        </tr>
                      </tbody>
                    );
                  }
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectMembers;
