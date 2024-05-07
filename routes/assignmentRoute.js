// const upload = require('../middleware/multer');
// const express = require('express');

import express from 'express';
import upload from './../middlewares/multer.js';
import {
  addItem,
  downloadFile,
  getItems,
  submitDocument,
} from '../controllers/assignmentController.js';
import submit from '../middlewares/submitDocumentMiddleware.js';
import sendEmail from '../services/sendEmail.js';

// const { getItems, addItem, downloadFile } = require('../controllers/items');

const router = express.Router();

router.route('/').get(getItems).post(upload.single('file'), addItem);
router.route('/download/:id').get(downloadFile);
// User Submit They Assignments Document Route
// router.route('/submit').post(submit.single('file'), submitDocument);
router.route('/submit').post(submit.single('file'), submitDocument);

// module.exports = router;
export default router;
