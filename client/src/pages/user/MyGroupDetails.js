import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useProjectGroup } from '../../context/projectGroup';
import './MyGroupDetails.css';
// import { useLocation } from 'react-router-dom';

const MyGroupDetails = () => {
  const [groups, setGroups] = useState();
  const [auth, setAuth] = useAuth();
  const [projectGroup, setProjectGroup] = useProjectGroup();

  // const special = localStorage.getItem('inputValue');
  // ****************************
  // const [specialization, setSpecialization] = useState('');
  // const location = useLocation();

  // useEffect(() => {
  //   const searchParams = new URLSearchParams(location.search);
  //   const specializationParam = searchParams.get('specialization');
  //   setSpecialization(specializationParam);
  // }, [location.search]);
  // ****************************
  //getall groups
  const getAllGroups = async () => {
    try {
      const { data } = await axios.get('/api/v1/group/get-all-groups');
      setGroups(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // getAllGroups();
  //lifecycle method
  useEffect(() => {
    if (auth?.token) getAllGroups();
  }, [auth?.token]);

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
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
                      <h1>Username</h1>
                    </th>
                    <th>
                      <h1>RegisteNo</h1>
                    </th>
                    <th>
                      <h1>ContactNo</h1>
                    </th>
                    <th>
                      <h1>Email</h1>
                    </th>
                    <th>
                      <h1>Group Type</h1>
                    </th>
                    <th>
                      <h1>Specialization</h1>
                    </th>
                    <th>
                      <h1>Project Leader Name</h1>
                    </th>
                    <th>
                      <h1>Project Leader RegNo</h1>
                    </th>
                    <th>
                      <h1>Project Title</h1>
                    </th>
                    <th>
                      <h1>Research Area</h1>
                    </th>
                    <th>
                      <h1>Research Group</h1>
                    </th>
                    <th>
                      <h1>Supervisor Name</h1>
                    </th>
                  </tr>
                </thead>
                {groups?.map((group, index) => {
                  if (group.specialization === projectGroup) {
                    return (
                      <tbody>
                        <tr key={index}>
                          <td>{group.userName}</td>
                          <td>{group.regNo}</td>
                          <td>{group.contactNo}</td>
                          <td>{group.email}</td>
                          <td>{group.groupType}</td>
                          <td>{group.specialization}</td>
                          <td>{group.projectLeaderName}</td>
                          <td>{group.projectLeaderRegNo}</td>
                          <td>{group.projectTitle}</td>
                          <td>{group.researchArea}</td>
                          <td>{group.researchGroup}</td>
                          <td>{group.supervisorName}</td>
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

export default MyGroupDetails;
