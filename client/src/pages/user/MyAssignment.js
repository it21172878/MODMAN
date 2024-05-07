import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './MyAssignment.css';
import Button from '../../components/Button';
import toast from 'react-hot-toast';
import Popup from '../../components/Layout/Popup';
import { MdEmail } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

const MyAssignment = () => {
  // btn popup
  const [buttonPopup, setButtonPopup] = useState(false);
  const [verifyPopup, setVerifyPopup] = useState(false);
  const [items, setItems] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // const [moduleCode, setModuleCode] = useState('');
  // const [assignmentTitle, setAssignmentTitle] = useState('');
  const fileInputRef = useRef(null);
  // const [deadline, setDeadline] = useState('');

  // ======================================================================================

  const [otp, setOtp] = useState('');
  const [isVerify, setIsVerify] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp === '') {
      toast.error('Enter Your Otp');
    }
    //  else if (!/[^a-zA-Z]/.test(otp)) {
    //   toast.error('Enter Valid Otp');
    // }
    else if (otp.length < 6) {
      toast.error('Otp Length minimum 6 digit');
    } else {
      const data = {
        otp,
        email: location.state,
        isVerify: isVerify,
      };
      console.log(data);

      const response = await axios.post('/api/v1/otpemail/verifyEmail', data);
      if (response.status === 200) {
        // localStorage.setItem('userdbtoken', response.data.userToken);
        toast.success(response.data.message);
        setTimeout(() => {
          navigate('/dashboard/user/assignment');
        }, 3000);
      } else {
        toast.error(response.data.message);
      }
    }
  };

  const [email, setEmail] = useState('');
  // const [spiner, setSpiner] = useState(false);

  // const navigate = useNavigate();

  // sendotp
  const sendOtp = async (e) => {
    e.preventDefault();

    if (email === '') {
      toast.error('Enter Your Email !');
    } else if (!email.includes('@')) {
      toast.error('Enter Valid Email !');
    } else {
      // setSpiner(true);
      const data = {
        email: email,
      };

      const response = await axios.post('/api/v1/otpemail/sendEmail', data);
      console.log(response);

      if (response.status === 200) {
        // setSpiner(false);
        toast.success(response.data.message);
        localStorage.setItem('otpEmail', email);
        // navigate('/verify-otp', { state: email });
        // navigate('/verify-otp', { state: email });
        navigate({ state: email });
      } else {
        toast.error(response.response.data.error);
      }
    }
  };
  // ======================================================================================

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
                      {/* <Button onClick={submitAssignmentDoc}>submit</Button> */}
                      <Button onClick={() => setButtonPopup(true)}>
                        submit
                      </Button>
                      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <h1>Popup</h1>
                        <form onSubmit={sendOtp} action="">
                          <h5 style={{ fontSize: '25px' }}>
                            Confirm Email Address
                          </h5>
                          {/* <label>Enter Your Email Address</label> */}
                          <div className="input-box">
                            <label>Email</label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Email"
                              required
                            ></input>
                            <MdEmail className="icon" />
                          </div>

                          <Button
                            // type="submit"
                            onClick={() => setVerifyPopup(true)}
                          >
                            Send OTP
                          </Button>
                        </form>
                      </Popup>
                      <Popup trigger={verifyPopup} setTrigger={setVerifyPopup}>
                        <form onSubmit={handleSubmit} action="">
                          <h5 style={{ fontSize: '25px' }}>
                            Please Enter Your OTP Here
                          </h5>
                          <div className="input-box">
                            <label>OTP Number</label>
                            <input
                              type="text"
                              value={otp}
                              onChange={(e) => setOtp(e.target.value)}
                              placeholder="enter your OTP code here"
                              required
                            ></input>
                            <MdEmail className="icon" />
                          </div>

                          <Button type="submit" onClick={submitAssignmentDoc}>
                            Verify Email
                          </Button>
                          {/* <div className="login-link">
              <p>
                have an account please{' '}
                <Link to="/login" className="login">
                  login
                </Link>
              </p>
            </div> */}
                        </form>
                      </Popup>
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
