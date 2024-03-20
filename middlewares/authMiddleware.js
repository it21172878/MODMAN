import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';

// protect route by token
export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

// access Project Coordinator
export const isProjectCoordinator = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 'projectCoordinator') {
      return res.status(401).send({
        success: false,
        message: 'Unathorized access',
        user: { role: user.role },
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: 'Error in Project Coordinator middleware',
    });
  }
};
// access supervisor
export const isSupervisor = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 'Supervisor') {
      return res.status(401).send({
        success: false,
        message: 'Unathorized access',
        user: { role: user.role },
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: 'Error in Supervisor middleware',
    });
  }
};
// access examiner
export const isExaminer = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 'Examiner') {
      return res.status(401).send({
        success: false,
        message: 'Unathorized access',
        user: { role: user.role },
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: 'Error in Examiner middleware',
    });
  }
};
// access project member
export const isProjectMember = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 'projectMember') {
      return res.status(401).send({
        success: false,
        message: 'Unathorized access',
        user: { role: user.role },
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: 'Error in Project Member middleware',
    });
  }
};
