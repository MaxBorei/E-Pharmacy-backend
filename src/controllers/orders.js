import { getAllOrders } from '../services/orders.js';

export const ordersContoller = async (req, res, next) => {
  try {
    const orders = await getAllOrders();
    res.json({
      status: 200,
      message: 'Successfully found orders!',
      data: orders,
    });
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(res, null, 2));
  } catch (err) {
    next(err);
  }
};
