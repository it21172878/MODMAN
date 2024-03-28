import React, { useState } from 'react';
import Layout from './../../components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
// import '../Auth/Auth.css';
import { HiIdentification } from 'react-icons/hi2';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { PiIdentificationBadgeFill } from 'react-icons/pi';
import { FaPhoneVolume } from 'react-icons/fa6';
import { RiLockPasswordFill } from 'react-icons/ri';
import toast from 'react-hot-toast';
import axios from 'axios';
import ProjectCoordinatorMenu from './../../components/Layout/ProjectCoordinatorMenu';
import './CreateNewUser.css';
import Button from '../../components/Button';

const CreateNewUser = () => {
  const [userID, setUserID] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [nicNo, setNicNo] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [answer, setAnswer] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/register', {
        userID,
        fullName,
        email,
        nicNo,
        mobileNo,
        password,
        answer,
        role,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        // navigate('/dashboard/projectCoordinator/all-project-coordinators');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };
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
              <form onSubmit={handleSubmit} action="">
                <h1>Create User</h1>
                <div className="input-box">
                  <input
                    type="text"
                    value={userID}
                    onChange={(e) => setUserID(e.target.value)}
                    placeholder="UserID"
                    required
                  ></input>
                  <HiIdentification className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Fullname"
                    required
                  ></input>
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  ></input>
                  <MdEmail className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    value={nicNo}
                    onChange={(e) => setNicNo(e.target.value)}
                    placeholder="NIC no"
                    required
                  ></input>
                  <PiIdentificationBadgeFill className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                    placeholder="Mobile no"
                    required
                  ></input>
                  <FaPhoneVolume className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  ></input>
                  <RiLockPasswordFill className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="What is your favourite color?"
                    required
                  ></input>
                  <RiLockPasswordFill className="icon" />
                </div>
                <div className="input-box">
                  <select
                    // ref={special}
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option>--select user role--</option>
                    <option>projectCoordinator</option>
                    <option>projectMember</option>
                    <option>Examiner</option>
                    <option>Supervisor</option>
                    <option>Student</option>
                  </select>
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
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Layout>
  );
};

export default CreateNewUser;
