import { Schema, model } from 'mongoose';

const customersSchema = new Schema(
  {
    photo: {
      type: String,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Email is invalid'],
    },
    spent: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    address: {
      type: String,
    },
    register_date: {
      type: Date,
    },
  },
  {
    versionKey: false,
  },
);

export const Customer = model('Customer', customersSchema);
