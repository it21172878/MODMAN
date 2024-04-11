import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button';
import toast from 'react-hot-toast';
import axios from 'axios';

const OTPverifyForm = () => {
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
          navigate('/register');
        }, 5000);
      } else {
        toast.error(response.data.message);
      }
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
            <h5 style={{ fontSize: '25px' }}>Please Enter Your OTP Here</h5>
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

            <Button type="submit">Verify Email</Button>
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

export default OTPverifyForm;
