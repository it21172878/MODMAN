import { hashPassword } from '../helpers/authHelper.js';
import coordinatorModel from '../models/coordinatorModel.js';

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
