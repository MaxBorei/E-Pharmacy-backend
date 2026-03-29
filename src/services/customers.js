import { SORT_ORDER } from '../constants/index.js';
import { Customer } from '../db/models/customers.js';

export const getCustomers = async ({
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const mongoFilter = {};
  if (filter.name) {
    mongoFilter.name = new RegExp(filter.name, 'i');
  }
  const customers = await Customer.find(mongoFilter)
    .sort({ [sortBy]: sortOrder })
    .exec();

  return customers;
};

export const getCustomerById = async (customerId) => {
  const customer = await Customer.findById(customerId);
  return customer;
};
