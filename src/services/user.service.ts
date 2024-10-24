import { prisma } from '../prismaClient';

export const userService = {
  getUserById: async (userId: number) => {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    return user;
  }
};
