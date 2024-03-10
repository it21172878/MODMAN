import { comparePasswords, hashPassword } from '../helpers/authHelper.js';
import coordinatorModel from '../models/coordinatorModel.js';
import JWT from 'jsonwebtoken';

export const registerController = async (req, res) => {
  try {
    // Get DOM elements.
    const { cooNo, fullName, email, mobileNo, password } = req.body;
    // validations
    if (!cooNo) {
      res.send({ error: 'Coordinator Number is required' });
    }
    if (!fullName) {
      res.send({ error: 'Your Name is required' });
    }
    if (!email) {
      res.send({ error: 'Email is required' });
    }
    if (!mobileNo) {
      res.send({ error: 'Mobile Number is required' });
    }
    if (!password) {
      res.send({ error: 'Password is required' });
    }

    //  Checking for existing user with the same username and email address.
    const existingCoordinator = await coordinatorModel.findOne({ cooNo });
    // existing Coordinator
    if (existingCoordinator) {
      return res
        .status(200)
        .send({ success: true, message: 'Already register please login' });
    }
    // register coordinator
    const hashedPassword = await hashPassword(password);
    // save
    const coordinator = await new coordinatorModel({
      cooNo,
      fullName,
      email,
      mobileNo,
      password: hashedPassword,
    }).save();
    // send response
    res.status(201).send({
      success: true,
      message: 'Registration Successful',
      data: coordinator,
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
    // check coordinator
    const coordinator = await coordinatorModel.findOne({ email });
    if (!coordinator) {
      return res
        .status(404)
        .send({ success: false, message: 'Email is not registered' });
    }
    // compare passwords
    const match = await comparePasswords(password, coordinator.password);
    if (!match) {
      return res
        .status(200)
        .send({ success: false, message: 'Wrong Password!' });
    }
    // JWT
    const token = await JWT.sign(
      { _id: coordinator._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.status(200).send({
      success: true,
      message: 'Logged In Successfully',
      coordinator: {
        cooNo: coordinator.cooNo,
        fullName: coordinator.fullName,
        email: coordinator.email,
        mobileNo: coordinator.mobileNo,
        password: coordinator.password,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: 'Wrror in Login', error });
  }
};
