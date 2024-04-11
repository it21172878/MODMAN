import React, { useState } from 'react';
import Layout from './../../components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import toast from 'react-hot-toast';
import axios from 'axios';
import Button from '../../components/Button';

const ForgotPasssword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/forgot-password', {
        email,
        newPassword,
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
    <Layout title={'Forgot-Password'}>
      <div className="wrapper">
        <div className="wrapper2 login">
          <form onSubmit={handleSubmit} action="">
            <h1 className="title">Reset Password</h1>

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
            <div className="input-box">
              <label>What is your favourite color?</label>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter you given color while register"
                required
              ></input>
              <MdEmail className="icon" />
            </div>

            <div className="input-box">
              <label>New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                required
              ></input>
              <RiLockPasswordFill className="icon" />
            </div>
            <Button>Change Password</Button>
            {/* <button type="submit">Login</button> */}
            {/* <div className="login-link">
              <p>
                have an account please{' '}
                <Link to="/register" className="login">
                  Register
                </Link>
              </p>
            </div> */}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPasssword;
