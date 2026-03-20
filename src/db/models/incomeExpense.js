import { Schema, model } from 'mongoose';

const incomeExpenseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['Income', 'Expense'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const IncomeExpenseCollection = model(
  'IncomeExpense',
  incomeExpenseSchema,
  'Income-Expenses',
);
