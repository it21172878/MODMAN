import express from 'express';
import {
  registerController,
  loginController,
  testController,
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
// TEST ROUTE
router.get('/test', requireSignIn, isProjectCoordinator, testController);
// protected route auth
router.get('/user-auth', requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
