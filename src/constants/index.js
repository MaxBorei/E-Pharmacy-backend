export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const productFields = [
  '_id',
  'name',
  'photo',
  'suppliers',
  'stock',
  'price',
  'category',
];

export const orderFields = [
  'photo',
  'name',
  'address',
  'products',
  'price',
  'status',
  'order_date',
];

export const customersFields = [
  'image',
  'name',
  'email',
  'spent',
  'phone',
  'address',
  'register_date',
];

export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;
