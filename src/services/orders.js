import { SORT_ORDER } from '../constants/index.js';
import { Order } from '../db/models/orders.js';
import { calculatePaginationData } from '../utils/parsePaginationParams.js';

export const getAllOrders = async ({
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
  perPage,
  page,
}) => {
  const mongoFilter = {};
  const limit = perPage;
  const skip = (page - 1) * perPage;

  if (filter.name) {
    mongoFilter.name = new RegExp(filter.name, 'i');
  }
  const orderQuery = Order.find(mongoFilter);

  const orderCount = await Order.countDocuments(mongoFilter);

  const orders = await orderQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(orderCount, perPage, page);
  return {
    data: orders,
    ...paginationData,
  };
};
