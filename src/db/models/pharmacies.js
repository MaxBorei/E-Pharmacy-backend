import { Schema, model } from 'mongoose';

const pharmacySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    address: { type: String },
    city: { type: String },
    phone: { type: String, required: true, trim: true },
    rating: { type: Number, min: 0, max: 5 },
  },
  {
    versionKey: false,
  },
);

export const Pharmacy = model('Pharmacy', pharmacySchema, 'pharmacies');
