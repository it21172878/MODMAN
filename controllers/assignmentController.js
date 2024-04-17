import createAssignment from './../models/createAssignment.js';
import path from 'path';
import asyncWrapper from '../middlewares/asyncWrapper.js';
import submitAssignment from '../models/submitAssignment.js';

// const Item = require('../models/Item');
// const path = require('path');
// const asyncWrapper = require('../middleware/asyncWrapper');

export const getItems = async (req, res) => {
  try {
    const items = await createAssignment.find();
    res.status(200).json({ items });
  } catch (error) {
    console.log(error);
  }
};

export const addItem = asyncWrapper(async (req, res) => {
  try {
    const { moduleCode } = req.body;
    const { assignmentTitle } = req.body;
    const file = req.file.path;
    const { deadline } = req.body;
    const item = await createAssignment.create({
      moduleCode,
      assignmentTitle,
      file,
      deadline,
    });
    // res.status(201).json({ item });
    res.status(201).send({
      success: true,
      message: 'Assignment Created Successfully',
      data: item,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in Assignment Creat',
      error,
    });
  }
});

export const downloadFile = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const item = await createAssignment.findById(id);
  if (!item) {
    return next(new Error('No item found'));
  }
  const file = item.file;
  const __dirname = path.resolve(path.dirname(''));
  // const filePath = path.join(__dirname, `../${file}`);
  const filePath = path.join(__dirname, `/${file}`);
  res.download(filePath);
});

// ==================User Submit They Assignments Document Controller==================
export const submitDocument = asyncWrapper(async (req, res) => {
  try {
    const file = req.file.path;
    const item = await submitAssignment.create({
      file,
    });
    // res.status(201).json({ item });
    res.status(201).send({
      success: true,
      message: 'Assignment Submitted Successfully',
      data: item,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in Assignment Submition',
      error,
    });
  }
});

// module.exports = {
//   getItems,
//   addItem,
//   downloadFile,
// };
