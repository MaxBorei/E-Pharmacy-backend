import Joi from 'joi';

export const supplierSchemaValidation = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  address: Joi.string().min(3).max(50).required(),
  suppliers: Joi.string().min(3).max(30).required(),
  date: Joi.string().required(),
  amount: Joi.string().min(3).max(30).required(),
  status: Joi.string().valid('Active', 'Deactive').required(),
});

export const updateSupplierSchemaValidation = Joi.object({
  name: Joi.string().min(3).max(30),
  address: Joi.string().min(3).max(50),
  suppliers: Joi.string().min(3).max(30),
  date: Joi.string(),
  amount: Joi.string().min(3).max(30),
  status: Joi.string().valid('Active', 'Deactive').min(1),
});
