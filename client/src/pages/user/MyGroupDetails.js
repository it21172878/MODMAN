import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import './MyGroupDetails.css';

const MyGroupDetails = () => {
  const [groups, setGroups] = useState();
  const [auth, setAuth] = useAuth();
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
            <h1>My Group Details</h1>
            <div>
              {groups?.map((group, index) => {
                return <h4 key={index}>{group.userName}</h4>;
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyGroupDetails;
