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
      return res
        .status(401)
        .send({ success: false, message: 'Unathorized access' });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: 'Error in Project Coordinator middleware',
      error,
    });
  }
};
