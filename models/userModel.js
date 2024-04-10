import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    // email: {
    //   type: String,
    //   lowercase: true,
    //   required: true,
    // },
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

    nicNo: {
      type: String,
      unique: true,
      required: true,
    },
    mobileNo: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      require: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [
        'projectCoordinator',
        'projectMember',
        'Examiner',
        'Supervisor',
        'Student',
      ],
      default: 'Student',
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model('users', userSchema);
export default userModel;
