import express from 'express';
import {
  getAllProjectGroupsController,
  groupRegisterController,
} from '../controllers/projectGroupController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

// router object
const groupRouter = express.Router();

// routing
// REGISTER TO PROJECT GROUP
groupRouter.post('/register', groupRegisterController);
// GET ALL PROJECT GROUPS
groupRouter.get(
  '/get-all-groups',
  requireSignIn,
  getAllProjectGroupsController
);

export default groupRouter;
