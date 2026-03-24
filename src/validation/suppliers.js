import Joi from 'joi';
// import { toUtcMidnight } from '../utils/date.js';

export const supplierSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  address: Joi.string().min(3).max(50).required(),
  suppliers: Joi.string().min(3).max(30).required(),
  date: Joi.string().required(),
  // .custom((value, helpers) => {
  //   let dt;
  //   try {
  //     dt = toUtcMidnight(value);
  //   } catch {
  //     return helpers.error('date.format');
  //   }

  //   const now = new Date();
  //   const todayUTC = new Date(
  //     Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  //   );

  //   if (dt < todayUTC) {
  //     return helpers.error('date.past');
  //   }
  //   return dt;
  // }, 'parse date & forbid past'),
  amount: Joi.string().min(3).max(30).required(),
  status: Joi.string().valid('Active', 'Deactive').required(),
});
