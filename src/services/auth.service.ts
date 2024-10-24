import { prisma } from '../prismaClient';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const authService = {
  registerUser: async ({ email, name, phone, password }: any) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { email, name, phone, password: hashedPassword },
    });
    return newUser;
  },

  loginUser: async ({ email, password }: any) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error('Invalid email or password');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error('Invalid email or password');

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    return token;
  }
};
