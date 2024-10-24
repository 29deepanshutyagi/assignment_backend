import { z } from 'zod';

export const addExpenseSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  totalAmount: z.number().positive('Total amount must be greater than zero'),
  splits: z.array(
    z.object({
      userId: z.number().int(),
      amount: z.number().positive(),
      splitType: z.enum(['EQUAL', 'EXACT', 'PERCENTAGE']),
    })
  ),
});
