import { getDashboard } from '../services/dashboard.js';

export const getDashboardController = async (req, res, next) => {
  try {
    const result = await getDashboard();

    res.status(200).json({
      status: 200,
      message: 'Successfully found data!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
