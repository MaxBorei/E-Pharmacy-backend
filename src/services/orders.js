import { Order } from '../db/models/orders.js';

export const getAllOrders = async () => {
  const orders = await Order.find();
  return orders;
};
