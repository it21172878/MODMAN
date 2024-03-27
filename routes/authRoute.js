import express from 'express';
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  getAllUsersController,
  updateProfileController,
} from '../controllers/authController.js';
import {
  isExaminer,
  isProjectCoordinator,
  isProjectMember,
  isSupervisor,
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
// PROTECTED USER ROUTE AUTH
router.get('/user-auth', requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//ALL USERS
router.get('/users', requireSignIn, getAllUsersController);
//UPDATE USER
router.put('/profile', requireSignIn, updateProfileController);

// PROTECTED PROJECT COORDINATOR ROUTE AUTH
router.get(
  '/projectcoordinator-auth',
  requireSignIn,
  isProjectCoordinator,
  (req, res) => {
    res.status(200).send({ ok: true });
  }
);
// PROTECTED SUPERVISOR ROUTE AUTH
router.get('/supervisor-auth', requireSignIn, isSupervisor, (req, res) => {
  res.status(200).send({ ok: true });
});
// PROTECTED EXAMINER ROUTE AUTH
router.get('/examiner-auth', requireSignIn, isExaminer, (req, res) => {
  res.status(200).send({ ok: true });
});
// PROTECTED PROJECT MEMBER ROUTE AUTH
router.get(
  '/projectmember-auth',
  requireSignIn,
  isProjectMember,
  (req, res) => {
    res.status(200).send({ ok: true });
  }
);
export default router;
