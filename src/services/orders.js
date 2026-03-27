import { SORT_ORDER } from '../constants/index.js';
import { Order } from '../db/models/orders.js';

export const getAllOrders = async ({
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const mongoFilter = {};

  if (filter.name) {
    mongoFilter.name = new RegExp(filter.name, 'i');
  }

  const orders = await Order.find(mongoFilter)
    .sort({ [sortBy]: sortOrder })
    .exec();

  return {
    data: orders,
  };
};
