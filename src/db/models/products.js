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
    },
    stock: {
      type: String,
    },
    price: {
      type: String,
    },
    category: {
      type: String,
      enum: [
        'Medicine',
        'Heart',
        'Head',
        'Hand',
        'Leg',
        'Dental Care',
        'Skin Care',
      ],
    },
  },
  {
    versionKey: false,
  },
);

export const Product = model('Product', productSchema, 'products');
