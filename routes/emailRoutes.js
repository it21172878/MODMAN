import express from 'express';
import sendEmail from '../services/sendEmail.js';
import { verifyEmail } from '../services/VerifyEmail.js';
import { getAllController } from '../controllers/authController.js';

const router = express.Router();

// const { sendEmail } = require('../services/sendEmail');

router.post('/sendEmail', sendEmail);
router.post('/verifyEmail', verifyEmail);
router.get('/all-emails', getAllController);

export default router;
