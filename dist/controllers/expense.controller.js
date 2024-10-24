"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expenseController = void 0;
const expense_sevice_1 = require("../services/expense.sevice");
const expense_validation_1 = require("../validations/expense.validation");
exports.expenseController = {
    addExpense: async (req, res) => {
        try {
            const validatedData = expense_validation_1.addExpenseSchema.parse(req.body);
            const expense = await expense_sevice_1.expenseService.createExpense(validatedData);
            res.status(201).json(expense);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    getUserExpenses: async (req, res) => {
        try {
            const { userId } = req.params;
            const expenses = await expense_sevice_1.expenseService.getUserExpenses(parseInt(userId));
            res.json(expenses);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    getAllExpenses: async (req, res) => {
        try {
            const expenses = await expense_sevice_1.expenseService.getAllExpenses();
            res.json(expenses);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};
