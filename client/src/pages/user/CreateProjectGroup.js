import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { HiIdentification } from 'react-icons/hi2';
import { FaPhoneVolume, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { PiIdentificationBadgeFill } from 'react-icons/pi';
import { RiLockPasswordFill } from 'react-icons/ri';
import './createProjectGroup.css';
import { useAuth } from '../../context/auth';
import Button from '../../components/Button';

const CreateProjectGroup = () => {
  const [userName, setUserName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [groupType, setGroupType] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [projectLeaderName, setProjectLeaderName] = useState('');
  const [projectLeaderRegNo, setProjectLeaderRegNo] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [researchArea, setResearchArea] = useState('');
  const [researchGroup, setResearchGroup] = useState('');
  const [supervisorName, setSupervisorName] = useState('');
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [auth, setAuth] = useAuth();
  // const [projectGroup, setProjectGroup] = useProjectGroup();
  // const special = useRef();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/group/register', {
        userName,
        regNo,
        contactNo,
        email,
        groupType,
        specialization,
        projectLeaderName,
        projectLeaderRegNo,
        projectTitle,
        researchArea,
        researchGroup,
        supervisorName,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        localStorage.setItem('special', specialization);
        // navigate(`/dashboard/user/my-group?specialization=${specialization}`);
        navigate('/dashboard/user/my-group');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  //getall users
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get('/api/v1/auth/users');
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //lifecycle method
  useEffect(() => {
    if (auth?.token) getAllUsers();
  }, [auth?.token]);
  return (
    <Layout>
      {/* <div className="container-fluid m-3 b-3"> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="wrap">
              {/* <div className="wrap2"> */}
              <form onSubmit={handleSubmit} action="">
                <h3>Register Group</h3>
                <div className="divide">
                  <div className="col1">
                    <div className="subTitle">
                      <h6>Your Details</h6>
                    </div>

                    <div className="inputBox">
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Username"
                        required
                      ></input>
                      <HiIdentification className="icon" />
                    </div>
                    <div className="inputBox">
                      <input
                        type="text"
                        value={regNo}
                        onChange={(e) => setRegNo(e.target.value)}
                        placeholder="Registration Number"
                        required
                      ></input>
                      <FaUser className="icon" />
                    </div>
                    <div className="inputBox">
                      <input
                        type="text"
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
                        placeholder="Mobile Number"
                        required
                      ></input>
                      <MdEmail className="icon" />
                    </div>
                    <div className="inputBox">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        required
                      ></input>
                      <PiIdentificationBadgeFill className="icon" />
                    </div>
                    <div className="radioBtn">
                      <h6>Select your group type</h6>
                      <input
                        className="m"
                        type="radio"
                        value="REGULAR"
                        id="REGULAR"
                        onChange={(e) => setGroupType(e.target.value)}
                        name={groupType}
                      />
                      <label for="regular">Regular</label>
                      <input
                        type="radio"
                        value="JUNE"
                        id="JUNE"
                        onChange={(e) => setGroupType(e.target.value)}
                        name={groupType}
                      />
                      <label for="june">June</label>
                    </div>

                    {/* <div className="inputBox">
                      <input
                        type="text"
                        value={groupType}
                        onChange={(e) => setGroupType(e.target.value)}
                        placeholder="Your Group Type"
                        required
                      ></input>
                      <FaPhoneVolume className="icon" />
                    </div> */}
                    <div className="inputBox">
                      <select
                        // ref={special}
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                      >
                        <option>--select your specialization--</option>
                        <option>IT</option>
                        <option>SE</option>
                        <option>IS</option>
                        <option>CS</option>
                        <option>DS</option>
                        <option>CSNE</option>
                      </select>
                    </div>
                  </div>
                  <div className="col1">
                    <h6>Group Details</h6>
                    <div className="inputBox">
                      <input
                        type="text"
                        value={projectLeaderName}
                        onChange={(e) => setProjectLeaderName(e.target.value)}
                        placeholder="Enter Your Project Leader Name"
                        required
                      ></input>
                      <RiLockPasswordFill className="icon" />
                    </div>
                    <div className="inputBox">
                      <input
                        type="text"
                        value={projectLeaderRegNo}
                        onChange={(e) => setProjectLeaderRegNo(e.target.value)}
                        placeholder="Enter Your Project Leader Registration Number"
                        required
                      ></input>
                      <RiLockPasswordFill className="icon" />
                    </div>
                    <div className="inputBox">
                      <input
                        type="text"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                        placeholder="Project Title Here"
                        required
                      ></input>
                      <RiLockPasswordFill className="icon" />
                    </div>
                    <div className="inputBox">
                      <input
                        type="text"
                        value={researchArea}
                        onChange={(e) => setResearchArea(e.target.value)}
                        placeholder="Research Area"
                        required
                      ></input>
                      <RiLockPasswordFill className="icon" />
                    </div>
                    <div className="inputBox">
                      <select
                        value={researchGroup}
                        onChange={(e) => setResearchGroup(e.target.value)}
                      >
                        <option>--select research group--</option>
                        <option>Machine Learning</option>
                        <option>Natural Language Processing</option>
                        <option>Interlligent System</option>
                        <option>Robotics</option>
                      </select>
                    </div>

                    <div className="inputBox">
                      <select
                        value={supervisorName}
                        onChange={(e) => setSupervisorName(e.target.value)}
                      >
                        <option>--select supervisor name--</option>
                        {users.map((supervisor, index) => {
                          if (supervisor.role === 'Supervisor') {
                            return (
                              <option key={index}>{supervisor.fullName}</option>
                            );
                          }
                        })}
                      </select>
                    </div>
                  </div>

                  {/* <div className="login-link"> */}
                  {/* <p>
                      have an account please{' '}
                      <Link to="/login" className="login">
                        login
                      </Link>
                    </p> */}
                  {/* </div> */}
                </div>
                <div className="reg-btn">
                  <Button>Register Group</Button>
                </div>
                {/* <button type="submit">Register</button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Layout>
  );
};

export default CreateProjectGroup;
