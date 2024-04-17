import mongoose from 'mongoose';

const submitAssignmenrSchema = new mongoose.Schema(
  {
    file: {
      type: String,
    },
  },
  { timestamps: true }
);

// user otp model
const submitAssignment = new mongoose.model(
  'submitAssignments',
  submitAssignmenrSchema
);

export default submitAssignment;
