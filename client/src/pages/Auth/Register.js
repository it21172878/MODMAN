// import React from 'react';
// import Layout from './../../components/Layout/Layout';

// const Register = () => {
//   return (
//     <Layout title={'Register'}>
//       <div className="register">
//         <h1>Register</h1>
//         <form>
//           <div class="mb-3">
//             <label for="exampleInputUserId" class="form-label">
//               User ID
//             </label>
//             <input type="text" class="form-control" id="exampleInputUserId" />
//           </div>
//           <div class="mb-3">
//             <label for="exampleInputName" class="form-label">
//               Fullname
//             </label>
//             <input type="text" class="form-control" id="exampleInputName" />
//           </div>
//           <div class="mb-3">
//             <label for="exampleInputEmail" class="form-label">
//               Email
//             </label>
//             <input type="email" class="form-control" id="exampleInputEmail" />
//           </div>
//           <div class="mb-3">
//             <label for="exampleInputNicNo" class="form-label">
//               NIC No
//             </label>
//             <input type="text" class="form-control" id="exampleInputNicNo" />
//           </div>
//           <div class="mb-3">
//             <label for="exampleInputMobileNo" class="form-label">
//               Mobile No
//             </label>
//             <input type="text" class="form-control" id="exampleInputMobileNo" />
//           </div>
//           <div class="mb-3">
//             <label for="exampleInputPassword" class="form-label">
//               Password
//             </label>
//             <input type="text" class="form-control" id="exampleInputPassword" />
//           </div>

//           <button type="submit" class="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import Layout from './../../components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import { HiIdentification } from 'react-icons/hi2';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { PiIdentificationBadgeFill } from 'react-icons/pi';
import { FaPhoneVolume } from 'react-icons/fa6';
import { RiLockPasswordFill } from 'react-icons/ri';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useOtpEmailGroup } from '../../context/otpEmail';
import Button from '../../components/Button';

const Register = () => {
  const [userID, setUserID] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [nicNo, setNicNo] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();
  const [otpEmailAdd, setOtpEmailAdd] = useOtpEmailGroup();
  // console.log(otpEmailAdd);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/register', {
        userID,
        fullName,
        email: otpEmailAdd,
        nicNo,
        mobileNo,
        password,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate('/login');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <Layout title={'Register'}>
      <div className="wrapper">
        <div className="wrapper2">
          <form onSubmit={handleSubmit} action="">
            <h1>Register</h1>
            <div className="input-box">
              <label>User ID</label>
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
              <label>Full Name</label>
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
              <label>Email</label>
              <input
                type="email"
                // value={email}
                value={otpEmailAdd}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              ></input>
              <MdEmail className="icon" />
            </div>
            <div className="input-box">
              <label>National Identity Number</label>
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
              <label>Mobile Number</label>
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
              <label>Password</label>
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
              <label>What is your favourite color?</label>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="What is your favourite color?"
                required
              ></input>
              <RiLockPasswordFill className="icon" />
            </div>
            {/* <button type="submit">Register</button> */}
            <Button type="submit">Sign Up</Button>
            <div className="login-link">
              <p>
                have an account please{' '}
                <Link to="/login" className="login">
                  login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
