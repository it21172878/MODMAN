import React, { useState } from 'react';
import Layout from './../../components/Layout/Layout';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Auth.css';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import Button from '../../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/login', {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data));
        navigate(location.state || '/');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <Layout title={'Login'}>
      <div className="wrapper">
        <div className="wrapper2 login">
          <form onSubmit={handleSubmit} action="">
            <h1>Login</h1>

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
            <div className=" mb-3">
              <p style={{ textAlign: 'end' }}>
                <Link to="/forgot-password" className="login">
                  Forgot your password
                </Link>
              </p>

              {/* <Button
                className=" btn btn-primary"
                onClick={() => {
                  navigate('/forgot-password');
                }}
              >
                Forgot Password
              </Button> */}
              {/* <button
                type="button"
                className=" btn btn-primary"
                onClick={() => {
                  navigate('/forgot-password');
                }}
              >
                Forgot Password
              </button> */}
            </div>
            {/* <button type="submit">Login</button> */}
            <Button>Login</Button>

            <div className="login-link">
              <p>
                you have not an account please{' '}
                <Link to="/sendotp" className="login">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
