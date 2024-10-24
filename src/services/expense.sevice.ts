import { prisma } from '../prismaClient';

export const expenseService = {
  createExpense: async (data: any) => {
    const expense = await prisma.expense.create({
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

  getUserExpenses: async (userId: number) => {
    const expenses = await prisma.expense.findMany({
        where: { createdBy: { id: userId } },  // Assuming 'id' is the primary key of the User model
        include: { splits: true },
    });
    return expenses;
  },

  getAllExpenses: async () => {
    const expenses = await prisma.expense.findMany({
      include: { splits: true },
    });
    return expenses;
  }
};
