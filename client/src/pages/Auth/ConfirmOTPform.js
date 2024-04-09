import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { MdEmail } from 'react-icons/md';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const ConfirmOTPform = () => {
  const [otp, setOtp] = useState('');

  //   const handleSubmit = () => {
  //     // now check whether sent email is valid
  //     if (otp == otp_val) {
  //       alert('Email address verified...');
  //     } else {
  //       alert('Invalid OTP');
  //     }
  //   };
  return (
    <Layout title={'Register'}>
      <div className="wrapper">
        <div className="wrapper2">
          <form onSubmit={handleSubmit} action="">
            <h1>Confirm Your Email</h1>
            <div className="input-box">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Email"
                required
              ></input>
              <MdEmail className="icon" />
            </div>

            <Button type="submit">Register</Button>
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

export default ConfirmOTPform;
