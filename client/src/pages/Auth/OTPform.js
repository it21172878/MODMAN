import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button';
import toast from 'react-hot-toast';
import axios from 'axios';

const OTPform = () => {
  const [email, setEmail] = useState('');
  // const [spiner, setSpiner] = useState(false);

  const navigate = useNavigate();

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
        navigate('/verify-otp', { state: email });
      } else {
        toast.error(response.response.data.error);
      }
    }
  };
  // const [email, setEmail] = useState('');
  // const navigate = useNavigate();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post('/api/v1/otpemail/sendEmail', {
  //       method: 'POST',
  //       body: JSON.stringify(email),
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       email,
  //     });
  //     if (res && res.data.success) {
  //       toast.success(res.data.message);
  //       navigate('/verify-otp', { state: email });
  //     } else {
  //       toast.error(res.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error('Something went wrong');
  //   }
  // };
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
          <form onSubmit={sendOtp} action="">
            <h5 style={{ fontSize: '25px' }}>Confirm Email Address</h5>
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

            <Button type="submit">Send OTP</Button>
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
    </Layout>
  );
};

export default OTPform;
