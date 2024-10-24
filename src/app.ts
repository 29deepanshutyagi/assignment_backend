import express from 'express';
import authRoutes from './routes/auth.routes';
import expenseRoutes from './routes/expense.routes';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middleware/error.middleware';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/expenses', expenseRoutes);
app.use('/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
