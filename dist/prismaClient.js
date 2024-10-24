"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient();
exports.prisma.$connect()
    .then(() => console.log('Database connected'))
    .catch((err) => console.error('Error connecting to database', err));
process.on('exit', async () => {
    await exports.prisma.$disconnect();
});
