import mongoose from 'mongoose';

const coordinatorSchema = new mongoose.Schema(
  {
    cooNo: {
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
    mobileNo: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: Number,
      default: 0, // 0 for Coordinator and 1 for Student
    },
  },
  { timestamps: true }
);

const coordinatorModel = mongoose.model('coordinators', coordinatorSchema);
export default coordinatorModel;
