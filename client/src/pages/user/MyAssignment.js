import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './MyAssignment.css';
import Button from '../../components/Button';
import toast from 'react-hot-toast';

const MyAssignment = () => {
  const [items, setItems] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // const [moduleCode, setModuleCode] = useState('');
  // const [assignmentTitle, setAssignmentTitle] = useState('');
  const fileInputRef = useRef(null);
  // const [deadline, setDeadline] = useState('');

  const submitAssignmentDoc = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', fileInputRef.current.files[0]);
      const res = await axios.post('/api/v1/assignment/submit', formData);
      console.log(res);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>My Assignments</h1>
            {/* <CardComponent /> */}

            {items?.map((item, index) => {
              // if (item.specialization === projectGroup) {
              return (
                <Card
                  className="cardDesign"
                  style={{ width: '100%', height: '35vh', marginBottom: '2%' }}
                >
                  <Card.Body key={index}>
                    <Card.Header
                      style={{ backgroundColor: '#040d12', color: '#93b1a6' }}
                    >
                      {item.moduleCode}
                    </Card.Header>
                    <Card.Title>{item.assignmentTitle}</Card.Title>
                    <Card.Text>
                      <label onClick={() => downloadFile(item._id)}>
                        Download Assesment File Here
                      </label>
                    </Card.Text>

                    <Card.Text style={{ fontWeight: 500 }}>
                      Assignment deadline: {item.deadline}
                    </Card.Text>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Card.Text>
                        <input type="file" ref={fileInputRef}></input>
                      </Card.Text>
                      <Button onClick={submitAssignmentDoc}>submit</Button>
                    </div>
                  </Card.Body>
                </Card>
              );
              // }
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyAssignment;
