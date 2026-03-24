import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (paramName) => (req, res, next) => {
  const value = req.params[paramName];

  if (!isValidObjectId(value)) {
    return next(
      createHttpError(400, `${paramName} is not a valid MongoDB ObjectId`),
    );
  }

  next();
};
