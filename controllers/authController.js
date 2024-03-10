import { comparePasswords, hashPassword } from '../helpers/authHelper.js';
import userModel from '../models/userModel.js';
import JWT from 'jsonwebtoken';

export const registerController = async (req, res) => {
  try {
    // Get DOM elements.
    const { userID, fullName, email, nicNo, mobileNo, password } = req.body;
    // validations
    if (!userID) {
      res.send({ error: 'User ID is required' });
    }
    if (!fullName) {
      res.send({ error: 'Your Name is required' });
    }
    if (!email) {
      res.send({ error: 'Email is required' });
    }
    if (!nicNo) {
      res.send({ error: 'NIC Number is required' });
    }
    if (!mobileNo) {
      res.send({ error: 'Mobile Number is required' });
    }
    if (!password) {
      res.send({ error: 'Password is required' });
    }

    //  Checking for existing user with the same username and email address.
    const existingUser = await userModel.findOne({ userID });
    // existing user
    if (existingUser) {
      return res
        .status(200)
        .send({ success: true, message: 'Already register please login' });
    }
    // register user
    const hashedPassword = await hashPassword(password);
    // save
    const user = await new userModel({
      userID,
      fullName,
      email,
      nicNo,
      mobileNo,
      password: hashedPassword,
    }).save();
    // send response
    res.status(201).send({
      success: true,
      message: 'Registration Successful',
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in Registeration',
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validate input fields
    if (!email || !password) {
      return res
        .status(404)
        .send({ success: false, message: 'Invalid Email or Password' });
    }
    // check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: 'Email is not registered' });
    }
    // compare passwords
    const match = await comparePasswords(password, user.password);
    if (!match) {
      return res
        .status(200)
        .send({ success: false, message: 'Wrong Password!' });
    }
    // JWT
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    res.status(200).send({
      success: true,
      message: 'Logged In Successfully',
      user: {
        userID: user.userID,
        fullName: user.fullName,
        email: user.email,
        nicNo: user.nicNo,
        mobileNo: user.mobileNo,
        password: user.password,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: 'Error in Login', error });
  }
};

export const testController = (req, res) => {
  console.log('test controller');
  res.send('Protected route');
};