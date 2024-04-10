import mongoose from 'mongoose';
import validator from 'validator';

const groupRegisterSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    regNo: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
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
    groupType: {
      type: String,
      enum: ['REGULAR', 'JUNE'],
    },
    specialization: {
      type: String,
      enum: ['IT', 'SE', 'IS', 'CS', 'DS', 'CSNE'],
      require: true,
    },
    projectLeaderName: {
      type: String,
      require: true,
    },
    projectLeaderRegNo: {
      type: String,
      required: true,
    },
    projectTitle: {
      type: String,
      require: true,
    },
    researchArea: {
      type: String,
      require: true,
    },
    researchGroup: {
      type: String,
      enum: [
        'Machine Learning',
        'Natural Language Processing',
        'Interlligent System',
        'Robotics',
      ],
      require: true,
    },
    supervisorName: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const groupRegisterModel = mongoose.model(
  'registerGroups',
  groupRegisterSchema
);
export default groupRegisterModel;
