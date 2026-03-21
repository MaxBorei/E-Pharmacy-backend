import { Customer } from '../db/models/customers.js';

export const getCustomers = async () => {
  const customers = await Customer.find();
  return customers;
};

export const getCustomerById = async (customerId) => {
  const customer = await Customer.findById(customerId);
  return customer;
};
