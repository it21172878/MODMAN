import express from 'express';
import sendEmail from '../services/sendEmail.js';

const router = express.Router();

// const { sendEmail } = require('../services/sendEmail');

router.post('/sendEmail', sendEmail);

export default router;
