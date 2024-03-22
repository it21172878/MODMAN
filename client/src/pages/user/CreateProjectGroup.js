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
        navigate('#');
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
    // <Layout>
    //   <div className="container-flui m-3 b-3">
    //     <div className="row">
    //       <div className="col-md-3">
    //         <UserMenu />
    //       </div>
    //       <div className="col-md-9">
    //         <h1>Join to Project Group</h1>
    //       </div>
    //     </div>
    //   </div>
    // </Layout>

    // <Layout>
    //   <div className="container-flui m-3 b-3">
    //     <div className="row">
    //       <div className="col-md-3">
    //         <UserMenu />
    //       </div>
    //       <div className="col-md-9">
    //         <div className="wrapper">
    //           <div className="wrapper2">
    //             <form onSubmit={handleSubmit} action="">
    //               <h1>Register Group</h1>
    //               <div className="input-box">
    //                 <input
    //                   type="text"
    //                   value={userName}
    //                   onChange={(e) => setUserName(e.target.value)}
    //                   placeholder="Username"
    //                   required
    //                 ></input>
    //                 <HiIdentification className="icon" />
    //               </div>
    //               <div className="input-box">
    //                 <input
    //                   type="text"
    //                   value={regNo}
    //                   onChange={(e) => setRegNo(e.target.value)}
    //                   placeholder="Registration Number"
    //                   required
    //                 ></input>
    //                 <FaUser className="icon" />
    //               </div>
    //               <div className="input-box">
    //                 <input
    //                   type="text"
    //                   value={contactNo}
    //                   onChange={(e) => setContactNo(e.target.value)}
    //                   placeholder="Mobile Number"
    //                   required
    //                 ></input>
    //                 <MdEmail className="icon" />
    //               </div>
    //               <div className="input-box">
    //                 <input
    //                   type="email"
    //                   value={email}
    //                   onChange={(e) => setEmail(e.target.value)}
    //                   placeholder="Email Address"
    //                   required
    //                 ></input>
    //                 <PiIdentificationBadgeFill className="icon" />
    //               </div>
    //               <div className="input-box">
    //                 <input
    //                   type="text"
    //                   value={groupType}
    //                   onChange={(e) => setGroupType(e.target.value)}
    //                   placeholder="Your Group Type"
    //                   required
    //                 ></input>
    //                 <FaPhoneVolume className="icon" />
    //               </div>
    //               <div className="input-box">
    //                 <input
    //                   type="text"
    //                   value={specialization}
    //                   onChange={(e) => setSpecialization(e.target.value)}
    //                   placeholder="Specialization"
    //                   required
    //                 ></input>
    //                 <RiLockPasswordFill className="icon" />
    //               </div>
    //               <h3>Project Group Details</h3>
    //               <div className="input-box">
    //                 <input
    //                   type="text"
    //                   value={projectLeaderName}
    //                   onChange={(e) => setProjectLeaderName(e.target.value)}
    //                   placeholder="Enter Your Project Leader Name"
    //                   required
    //                 ></input>
    //                 <RiLockPasswordFill className="icon" />
    //               </div>
    //               <div className="input-box">
    //                 <input
    //                   type="text"
    //                   value={projectLeaderRegNo}
    //                   onChange={(e) => setProjectLeaderRegNo(e.target.value)}
    //                   placeholder="Enter Your Project Leader Registration Number"
    //                   required
    //                 ></input>
    //                 <RiLockPasswordFill className="icon" />
    //               </div>
    //               <div className="input-box">
    //                 <input
    //                   type="text"
    //                   value={projectTitle}
    //                   onChange={(e) => setProjectTitle(e.target.value)}
    //                   placeholder="Project Title Here"
    //                   required
    //                 ></input>
    //                 <RiLockPasswordFill className="icon" />
    //               </div>
    //               <div className="input-box">
    //                 <input
    //                   type="text"
    //                   value={researchArea}
    //                   onChange={(e) => setResearchArea(e.target.value)}
    //                   placeholder="Research Area"
    //                   required
    //                 ></input>
    //                 <RiLockPasswordFill className="icon" />
    //               </div>
    //               <div className="input-box">
    //                 <input
    //                   type="text"
    //                   value={researchGroup}
    //                   onChange={(e) => setResearchGroup(e.target.value)}
    //                   placeholder="Research Group Here"
    //                   required
    //                 ></input>
    //                 <RiLockPasswordFill className="icon" />
    //               </div>
    //               <div className="input-box">
    //                 <input
    //                   type="text"
    //                   value={supervisorName}
    //                   onChange={(e) => setSupervisorName(e.target.value)}
    //                   placeholder="Select Supervisor Name"
    //                   required
    //                 ></input>
    //                 <RiLockPasswordFill className="icon" />
    //               </div>
    //               <button type="submit">Register</button>
    //               <div className="login-link">
    //                 {/* <p>
    //                   have an account please{' '}
    //                   <Link to="/login" className="login">
    //                     login
    //                   </Link>
    //                 </p> */}
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Layout>

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
                    <div className="inputBox">
                      <input
                        type="text"
                        value={groupType}
                        onChange={(e) => setGroupType(e.target.value)}
                        placeholder="Your Group Type"
                        required
                      ></input>
                      <FaPhoneVolume className="icon" />
                    </div>
                    <div className="inputBox">
                      <select
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                      >
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
                      <input
                        type="text"
                        value={researchGroup}
                        onChange={(e) => setResearchGroup(e.target.value)}
                        placeholder="Research Group Here"
                        required
                      ></input>
                      <RiLockPasswordFill className="icon" />
                    </div>
                    {/* <div className="inputBox">
                      <input
                        type="text"
                        value={supervisorName}
                        onChange={(e) => setSupervisorName(e.target.value)}
                        placeholder="Select Supervisor Name"
                        required
                      ></input>
                      <RiLockPasswordFill className="icon" />
                    </div> */}
                    <div className="inputBox">
                      <select
                        value={supervisorName}
                        onChange={(e) => setSupervisorName(e.target.value)}
                      >
                        <option>IT</option>
                        <option>SE</option>
                        <option>IS</option>
                        <option>CS</option>
                        <option>DS</option>
                        <option>CSNE</option>
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
                <button type="submit">Register</button>
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
