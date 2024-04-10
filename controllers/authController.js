import { comparePasswords, hashPassword } from '../helpers/authHelper.js';
// import userModel from '../models/userModel.js';
import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';
import userotp from '../models/userOtp.js';

export const registerController = async (req, res) => {
  try {
    // Get DOM elements.
    const { userID, fullName, email, nicNo, mobileNo, password, answer } =
      req.body;
    // validations
    if (!userID) {
      res.send({ message: 'User ID is required' });
    }
    if (!fullName) {
      res.send({ message: 'Your Name is required' });
    }
    if (!email) {
      res.send({ message: 'Email is required' });
    }
    if (!nicNo) {
      res.send({ message: 'NIC Number is required' });
    }
    if (!mobileNo) {
      res.send({ message: 'Mobile Number is required' });
    }
    if (!password) {
      res.send({ message: 'Password is required' });
    }
    if (!answer) {
      res.send({ message: 'Answer is required' });
    }
    // if (!role) {
    //   res.send({ message: 'User Role is required' });
    // }

    //  Checking for existing user with the same username and email address.
    const existingUser = await userModel.findOne({ userID });
    // existing user
    if (existingUser) {
      return res
        .status(200)
        .send({ success: false, message: 'Already register please login' });
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
      answer,
      // role,
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
        answer: user.answer,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: 'Error in Login', error });
  }
};

// forgotPasswordController
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: 'Email is required' });
    }

    if (!answer) {
      res.status(400).send({ message: 'Answer is required' });
    }

    if (!newPassword) {
      res.status(400).send({ message: 'New Password is required' });
    }
    // check
    const user = await userModel.findOne({ email, answer });
    // validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'Wrong Email Or Answer',
      });
    }
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: 'Password Reset Successfully',
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: 'Something went wrong', error });
  }
};

// test controller
export const testController = (req, res) => {
  try {
    res.send('Protected route');
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

//user
export const getAllUsersController = async (req, res) => {
  try {
    await userModel.find().then((users) => {
      res.json(users);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error While Geting Users',
      error,
    });
  }
};

//update user prfole
export const updateProfileController = async (req, res) => {
  try {
    const { userID, fullName, email, nicNo, mobileNo, password, answer } =
      req.body;
    const user = await userModel.findById(req.user._id);
    //password
    if (password && password.length < 3) {
      return res.json({ error: 'Passsword is required and 3 character long' });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;
    const updatedUser = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        userID: userID || user.userID,
        fullName: fullName || user.fullName,
        password: hashedPassword || user.password,
        email: email || user.email,
        mobileNo: mobileNo || user.mobileNo,
        nicNo: nicNo || user.nicNo,
        answer: answer || user.answer,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: 'Profile Updated Successfully',
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: 'Error While Update profile',
      error,
    });
  }
};

// ********************** OTP EMAIL CONTROLL *********************************
// get all users
export const getAllController = async (req, res) => {
  try {
    await userotp.find().then((users) => {
      res.json(users);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error While Geting Users',
      error,
    });
  }
};
