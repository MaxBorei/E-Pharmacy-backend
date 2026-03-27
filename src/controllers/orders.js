import { orderFields } from '../constants/index.js';
import { getAllOrders } from '../services/orders.js';
import { parsedName } from '../utils/parseFilterParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

export const getOrdersContoller = async (req, res, next) => {
  try {
    const { sortBy, sortOrder } = parseSortParams(req.query, orderFields);
    const filter = parsedName(req.query);

    const orders = await getAllOrders({
      sortBy,
      sortOrder,
      filter,
    });

    res.status(200).json({
      status: 200,
      message: 'Successfully found orders!',
      data: orders,
    });
  } catch (err) {
    next(err);
  }
};
