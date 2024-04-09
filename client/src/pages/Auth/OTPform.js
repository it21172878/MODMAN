import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button';
import toast from 'react-hot-toast';
import axios from 'axios';

const OTPform = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/otpemail/sendEmail', {
        method: 'POST',
        body: JSON.stringify(email),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        email,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        // navigate('/confirm-otp');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };
  //   ****************************************

  //   const [email, setEmail] = useState('');
  //   const navigate = useNavigate();

  //   const sendEmail = async () => {
  //     let dataSend = {
  //       email: email,
  //     };

  //     const res = await fetch('/api/v1/otpemail/sendEmail', {
  //       method: 'POST',
  //       body: JSON.stringify(dataSend),
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       // HANDLING ERRORS
  //       .then((res) => {
  //         console.log(res);
  //         if (res.status > 199 && res.status < 300) {
  //           alert('Send Successfully !');
  //           toast.success(res.data.message);
  //           navigate('/register');
  //         } else {
  //         }
  //       });
  //   };
  return (
    <Layout title={'Register'}>
      <div className="wrapper">
        <div className="wrapper2">
          <form onSubmit={handleSubmit} action="">
            <h1>OTP</h1>
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

            <Button type="submit">Get OTP</Button>
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

export default OTPform;
