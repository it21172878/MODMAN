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

import React from 'react';
import Layout from './../../components/Layout/Layout';
import { Link } from 'react-router-dom';
import './Register.css';
import { HiIdentification } from 'react-icons/hi2';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { PiIdentificationBadgeFill } from 'react-icons/pi';
import { FaPhoneVolume } from 'react-icons/fa6';
import { RiLockPasswordFill } from 'react-icons/ri';

const Register = () => {
  return (
    <Layout title={'Register'}>
      <div className="wrapper">
        <div className="wrapper2">
          <form action="">
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" placeholder="UserID" required></input>
              <HiIdentification className="icon" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Fullname" required></input>
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required></input>
              <MdEmail className="icon" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="NIC no" required></input>
              <PiIdentificationBadgeFill className="icon" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Mobile no" required></input>
              <FaPhoneVolume className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required></input>
              <RiLockPasswordFill className="icon" />
            </div>
            <button type="submit">Register</button>
            <div className="login-link">
              <p>
                have an account please{' '}
                <Link to="#" className="login">
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
