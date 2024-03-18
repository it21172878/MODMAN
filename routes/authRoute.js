import express from 'express';
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from '../controllers/authController.js';
import {
  isProjectCoordinator,
  requireSignIn,
} from '../middlewares/authMiddleware.js';

// router object
const router = express.Router();

// routing
// REGISTER
router.post('/register', registerController);
// LOGIN
router.post('/login', loginController);
// FORGOT PASSWORD || POST
router.post('/forgot-password', forgotPasswordController);

// TEST ROUTE
router.get('/test', requireSignIn, isProjectCoordinator, testController);
// PROTECTED ROUTE AUTH
router.get('/user-auth', requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
