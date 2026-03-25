import Joi from 'joi';

export const supplierSchemaValidation = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  address: Joi.string().min(3).max(50).required(),
  suppliers: Joi.string().min(3).max(30).required(),
  date: Joi.string().required(),
  amount: Joi.string().min(3).max(30).required(),
  status: Joi.string().valid('Active', 'Deactive').required(),
});
