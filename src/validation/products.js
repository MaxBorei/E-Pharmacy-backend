import Joi from 'joi';

export const createProductSchema = Joi.object({
  id: Joi.string().trim().required(),
  photo: Joi.string().trim(),
  name: Joi.string().min(3).max(30).required(),
  suppliers: Joi.string().min(3).max(30).required(),
  stock: Joi.string().required(),
  price: Joi.string().trim().required(),
  category: Joi.string()
    .valid(
      'Medicine',
      'Head',
      'Hand',
      'Dental Care',
      'Skin Care',
      'Eye Care',
      'Vitamins & Supplements',
      'Orthopedic Products',
      'Baby Care',
      'Leg',
    )
    .required(),
});

export const updateProductSchema = Joi.object({
  id: Joi.string().trim(),
  photo: Joi.string().trim(),
  name: Joi.string().min(3).max(30),
  suppliers: Joi.string().min(3).max(30),
  stock: Joi.string(),
  price: Joi.string().trim(),
  category: Joi.string().valid(
    'Medicine',
    'Head',
    'Hand',
    'Dental Care',
    'Skin Care',
    'Eye Care',
    'Vitamins & Supplements',
    'Orthopedic Products',
    'Baby Care',
    'Leg',
  ),
}).min(1);
