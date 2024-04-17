import React, { useEffect, useRef, useState } from 'react';
import Button from '../../components/Button';
import Layout from '../../components/Layout/Layout';
import ProjectCoordinatorMenu from '../../components/Layout/ProjectCoordinatorMenu';
import axios from 'axios';
// import toast from 'react-hot-toast';
import { HiIdentification } from 'react-icons/hi2';
import { MdEmail } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

const CreateAssignment = () => {
  const [items, setItems] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [moduleCode, setModuleCode] = useState('');
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const fileInputRef = useRef(null);

  const getItems = async () => {
    setLoading(true);
    try {
      // const res = await axios.get('http://localhost:8585/api/v1/items');
      const res = await axios.get('/api/v1/assignment');
      setItems(res.data.items);
      setLoading(false);
      console.log(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('moduleCode', moduleCode);
      formData.append('assignmentTitle', assignmentTitle);
      formData.append('file', fileInputRef.current.files[0]);
      const res = await axios.post('/api/v1/assignment', formData);
      // const res = await axios.post(
      //   'http://localhost:8585/api/v1/items',
      //   formData
      // );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadFile = async (id) => {
    try {
      const res = await axios.get(
        // `http://localhost:8585/api/v1/items/download/${id}`,
        `/api/v1/assignment/download/${id}`,
        { responseType: 'blob' }
      );
      const blob = new Blob([res.data], { type: res.data.type });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = '';
      // link.download = res.headers["content-disposition"].split("filename=")[1];
      link.click();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Layout>
      {/* <div className="container-fluid m-3 b-3"> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ProjectCoordinatorMenu />
          </div>
          <div className="col-md-9 main">
            <div className="wrapp">
              {/* <div className="wrap2"> */}
              <form onSubmit={addItem} action="">
                <h1>Create Assignment</h1>
                <div className="input-box">
                  <input
                    type="text"
                    value={moduleCode}
                    onChange={(e) => setModuleCode(e.target.value)}
                    placeholder="module code"
                    required
                  ></input>
                  <HiIdentification className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    value={assignmentTitle}
                    onChange={(e) => setAssignmentTitle(e.target.value)}
                    placeholder="title"
                    required
                  ></input>
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="file"
                    // value={fileInputRef}
                    ref={fileInputRef}
                    // onChange={(e) => setFile(e.target.value)}
                    placeholder="Email"
                    required
                  ></input>
                  <MdEmail className="icon" />
                </div>

                {/* <button type="submit">Register</button> */}
                <Button>Create New User</Button>
                {/* <div className="login-link">
              <p>
                have an account please{' '}
                <Link to="/login" className="login">
                  login
                </Link>
              </p>
            </div> */}
              </form>
              {/* ================================================ */}
              <div className="items">
                {items &&
                  items.map((item) => (
                    <div className="item" key={item._id}>
                      <h3>{item.name}</h3>
                      <button onClick={() => downloadFile(item._id)}>
                        Download File
                      </button>
                    </div>
                  ))}
              </div>
              {/* ================================================ */}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Layout>
  );
};

export default CreateAssignment;
