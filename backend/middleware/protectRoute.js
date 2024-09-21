import jwt from 'jsonwebtoken';

import { User } from '../models/user.model.js';
import { ENV_VARS } from '../config/envVars.js';

export const protectRoute = async (request, response, next) => {
  try {
    const token = request.cookies['jwt-netflix'];

    if (!token) {
      return response
        .status(401)
        .json({ success: false, message: 'Unauthorized - No Token Provided' });
    }

    const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);

    if (!decoded) {
      return response.status(401).json({
        success: false,
        message: 'Unauthorized - Invalid Token',
      });
    }

    const user = User.findById(decoded.userId).select('-password');

    if (!user) {
      return response.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    request.user = user;

    next();
  } catch (error) {
    console.error('Error in privateRoute middleware: ', error.message);
    response
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};
