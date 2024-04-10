import expressAsyncHandler from 'express-async-handler';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import generateOTP from './generateOTP.js';
import userotp from '../models/userOtp.js';

dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;

  const OTP = generateOTP();

  // const mailOptions = {
  //   from: process.env.SMTP_MAIL,
  //   to: email,
  //   subject: 'OTP form MODMAN server',
  //   text: `Your OTP code is: ${OTP}`,
  // };

  // await transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.log(error);
  //     res
  //       .status(500)
  //       .send({ success: false, message: 'Error in sendOTP', error });
  //   } else {
  //     const existEmail = userotp.findOne({ email: email });
  //     console.log(existEmail);

  //     const saveOtpData = new userotp({
  //       email,
  //       otp: OTP,
  //     });
  //     saveOtpData.save();
  //     console.log('Email sent successfully!');
  //     res
  //       .status(200)
  //       .send({ success: true, message: 'Your OTP has been sent' });
  //   }
  // });

  // *******************************************************************************
  try {
    // if (presuer) {
    // const OTP = Math.floor(100000 + Math.random() * 900000);

    const existEmail = await userotp.findOne({ email: email });

    if (existEmail) {
      const updateData = await userotp.findByIdAndUpdate(
        { _id: existEmail._id },
        {
          otp: OTP,
          // isVerify: false,
        },
        { new: true }
      );
      await updateData.save();

      const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: 'Sending Eamil For OTP Validation',
        text: `OTP:- ${OTP}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('error', error);
          res.status(400).json({ error: 'email not send' });
        } else {
          console.log('Email sent', info.response);
          res.status(200).send({
            success: true,
            message: 'Your OTP has been sent',
            data: OTP,
          });
        }
      });
    } else {
      const saveOtpData = new userotp({
        email,
        otp: OTP,
      });

      await saveOtpData.save();
      const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: 'Sending Eamil For Otp Validation',
        text: `OTP:- ${OTP}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('error', error);
          res.status(400).json({ error: 'email not send' });
        } else {
          console.log('Email sent', info.response);
          res
            .status(200)
            .send({ success: true, message: 'Your OTP has been sent' });
        }
      });
    }
    // }
    //  else {
    //   res.status(400).json({ error: 'This User Not Exist In our Db' });
    // }
  } catch (error) {
    res.status(400).json({ error: 'Invalid Details', error });
  }
  // *******************************************************************************
});

export default sendEmail;
