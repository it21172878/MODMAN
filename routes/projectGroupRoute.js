import express from 'express';
import { groupRegisterController } from '../controllers/projectGroupController.js';

// router object
const groupRouter = express.Router();

// routing
// REGISTER TO PROJECT GROUP
groupRouter.post('/register', groupRegisterController);

export default groupRouter;
