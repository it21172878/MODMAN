import groupRegisterModel from '../models/groupRegisterModel.js';

export const groupRegisterController = async (req, res) => {
  try {
    // Get DOM elements.
    const {
      userName,
      regNo,
      contactNo,
      email,
      groupType,
      specialization,
      projectLeaderName,
      projectLeaderRegNo,
      projectTitle,
      researchArea,
      researchGroup,
      supervisorName,
    } = req.body;
    // validations
    if (!userName) {
      res.send({ message: 'Username is required' });
    }
    if (!regNo) {
      res.send({ message: 'Student register number is required' });
    }
    if (!contactNo) {
      res.send({ message: 'Contact number is required' });
    }
    if (!email) {
      res.send({ message: 'Email is required' });
    }
    if (!groupType) {
      res.send({ message: 'Group type is required' });
    }
    if (!specialization) {
      res.send({ message: 'Specialization is required' });
    }
    if (!projectLeaderName) {
      res.send({ message: `Project group leader's name is required` });
    }
    if (!projectLeaderRegNo) {
      res.send({
        message: `Project group leader's register number is required`,
      });
    }
    if (!projectTitle) {
      res.send({ message: 'Project title is required' });
    }
    if (!researchArea) {
      res.send({ message: 'Project research area is required' });
    }
    if (!researchGroup) {
      res.send({ message: 'Project research group is required' });
    }
    if (!supervisorName) {
      res.send({ message: 'Group supervisor name is required' });
    }

    // register for group
    // save
    const group = await new groupRegisterModel({
      userName,
      regNo,
      contactNo,
      email,
      groupType,
      specialization,
      projectLeaderName,
      projectLeaderRegNo,
      projectTitle,
      researchArea,
      researchGroup,
      supervisorName,
    }).save();
    // send response
    res.status(201).send({
      success: true,
      message: 'Group Registration Successful',
      data: group,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Some Error Occared in Group Registeration',
      error,
    });
  }
};

//all project groupsuser
export const getAllProjectGroupsController = async (req, res) => {
  try {
    await groupRegisterModel.find().then((groups) => {
      res.json(groups);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error While Geting Groups',
      error,
    });
  }
};
