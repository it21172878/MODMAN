import React from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';

const MyAssignment = () => {
  return (
    <Layout>
      <div className="container-flui m-3 b-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>My Assignment</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyAssignment;
