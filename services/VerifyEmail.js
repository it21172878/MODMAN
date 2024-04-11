import { set } from 'mongoose';
import userotp from '../models/userOtp.js';
// import dotenv from 'dotenv';
// dotenv.config();

export const verifyEmail = async (req, res) => {
  const { otp, email, isVerify } = req.body;

  if (!otp) {
    res.status(400).send({ error: 'Please Enter Your OTP' });
  }

  try {
    const otpverification = await userotp.findOne({
      email: email,
    });
    console.log(otpverification);

    if (otpverification.otp === otp) {
      // **********************4/11/2024
      const updateData = await userotp.findByIdAndUpdate(
        { _id: otpverification._id },
        {
          isVerify: true,
        },
        { new: true }
      );
      await updateData.save();
      // **********************
      res
        .status(200)
        .send({ success: true, message: 'Email Varifycation Succesfully' });
    } else {
      res.status(400).send({ success: false, message: 'Invalid Otp' });
    }
  } catch (error) {
    res.status(400).send({ success: false, message: 'Invalid Details', error });
  }
};
