import mongoose from 'mongoose';

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
    email: {
      type: String,
      lowercase: true,
      required: true,
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
    role: {
      type: String,
      enum: [
        'projectCoordinator',
        'projectMembers',
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
