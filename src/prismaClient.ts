import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

prisma.$connect()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Error connecting to database', err));

process.on('exit', async () => {
  await prisma.$disconnect();
});
