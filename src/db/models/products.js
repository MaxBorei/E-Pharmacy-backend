import { model, Schema } from 'mongoose';

const productSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    suppliers: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
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
      ],
    },
  },
  {
    versionKey: false,
  },
);

export const Product = model('Product', productSchema, 'products');
