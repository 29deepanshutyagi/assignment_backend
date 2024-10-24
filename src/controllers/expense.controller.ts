import { Request, Response } from 'express';
import { expenseService } from '../services/expense.sevice';
import { addExpenseSchema } from '../validations/expense.validation';

export const expenseController = {
  addExpense: async (req: Request, res: Response) => {
    try {
      const validatedData = addExpenseSchema.parse(req.body);
      const expense = await expenseService.createExpense(validatedData);
      res.status(201).json(expense);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  getUserExpenses: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const expenses = await expenseService.getUserExpenses(parseInt(userId));
      res.json(expenses);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  getAllExpenses: async (req: Request, res: Response) => {
    try {
      const expenses = await expenseService.getAllExpenses();
      res.json(expenses);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};
