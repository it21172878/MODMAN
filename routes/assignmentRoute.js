// const upload = require('../middleware/multer');
// const express = require('express');

import express from 'express';
import upload from './../middlewares/multer.js';
import {
  addItem,
  downloadFile,
  getItems,
} from '../controllers/assignmentController.js';

// const { getItems, addItem, downloadFile } = require('../controllers/items');

const router = express.Router();

router.route('/').get(getItems).post(upload.single('file'), addItem);
router.route('/download/:id').get(downloadFile);

// module.exports = router;
export default router;
