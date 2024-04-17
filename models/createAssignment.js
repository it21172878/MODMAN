import mongoose from 'mongoose';

const createAssignmenrSchema = new mongoose.Schema(
  {
    moduleCode: {
      type: String,
      required: true,
    },
    assignmentTitle: {
      type: String,
      required: true,
    },
    file: {
      type: String,
    },
    deadline: {
      type: String,
    },
  },
  { timestamps: true }
);

// user otp model
const createAssignment = new mongoose.model(
  'createAssignments',
  createAssignmenrSchema
);

export default createAssignment;
