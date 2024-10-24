import { Router } from 'express';
import { expenseController } from '../controllers/expense.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.post('/add', authenticate, expenseController.addExpense);
router.get('/user/:userId', authenticate, expenseController.getUserExpenses);
router.get('/all', authenticate, expenseController.getAllExpenses);

export default router;
