"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expenseService = void 0;
const prismaClient_1 = require("../prismaClient");
exports.expenseService = {
    createExpense: async (data) => {
        const expense = await prismaClient_1.prisma.expense.create({
            data: {
                description: data.description,
                totalAmount: data.totalAmount,
                createdBy: data.userId,
                splits: {
                    create: data.splits,
                },
            },
        });
        return expense;
    },
    getUserExpenses: async (userId) => {
        const expenses = await prismaClient_1.prisma.expense.findMany({
            where: { createdBy: { id: userId } }, // Assuming 'id' is the primary key of the User model
            include: { splits: true },
        });
        return expenses;
    },
    getAllExpenses: async () => {
        const expenses = await prismaClient_1.prisma.expense.findMany({
            include: { splits: true },
        });
        return expenses;
    }
};
