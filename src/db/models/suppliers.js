import { model, Schema } from 'mongoose';

const supplierSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
    },
    suppliers: {
      type: String,
    },
    date: {
      type: String,
    },
    amount: {
      type: String,
    },
    status: {
      type: String,
      enum: ['Active', 'Deactive'],
    },
  },
  {
    versionKey: false,
  },
);

export const Supplier = model('Supplier', supplierSchema, 'suppliers');
