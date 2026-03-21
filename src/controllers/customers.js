import { getCustomerById, getCustomers } from '../services/customers.js';

export const customersController = async (req, res, next) => {
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

export const customerControllerById = async (req, res, next) => {
  const { customerId } = req.params;
  const customer = await getCustomerById(customerId);
  if (!customer) {
    next(new Error('Customer not found'));
    return;
  }
  res.json({
    status: 200,
    message: `Successfully found student with id ${customerId}!`,
    data: customer,
  });
};
