import { Schema, model } from 'mongoose';

const nearestPharmaciesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
  },
  {
    versionKey: false,
  },
);

export const nearestPharmacy = model(
  'nearestPharmacy',
  nearestPharmaciesSchema,
  'nearest_pharmacies',
);
