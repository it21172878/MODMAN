import mongoose from 'mongoose';
import validator from 'validator';

const userOtpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Not Valid Email');
      }
    },
  },
  otp: {
    type: String,
    required: true,
  },
  isVerify: {
    type: Boolean,
    default: false,
  },
});

// user otp model
const userotp = new mongoose.model('userotps', userOtpSchema);

export default userotp;
