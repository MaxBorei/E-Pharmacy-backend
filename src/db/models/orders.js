import { Schema, model } from 'mongoose';

const ordersSchema = new Schema(
  {
    photo: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
    },
    products: {
      type: String,
    },
    price: {
      type: String,
    },
    status: {
      type: String,
      enum: [
        'Completed',
        'Confirmed',
        'Pending',
        'Cancelled',
        'Processing',
        'Shipped',
        'Delivered',
      ],
    },
    order_date: {
      type: String,
    },
  },
  {
    versionKey: false,
  },
);

export const Order = model('Order', ordersSchema, 'orders');
