import { getCustomerById, getCustomers } from '../services/customers.js';
import createHttpError from 'http-errors';

export const getCustomersController = async (req, res, next) => {
  try {
    const customers = await getCustomers();
    res.json({
      status: 200,
      message: 'Successfully found customers!',
      data: customers,
    });

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(res, null, 2));
  } catch (err) {
    next(err);
  }
};

export const getCustomerControllerById = async (req, res, next) => {
  const { customerId } = req.params;
  const customer = await getCustomerById(customerId);
  if (!customer) {
    throw createHttpError(404, 'Customer not found');
  }

  res.json({
    status: 200,
    message: `Successfully found student with id ${customerId}!`,
    data: customer,
  });
};
