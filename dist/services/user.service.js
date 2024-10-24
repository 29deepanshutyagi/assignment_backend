"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const prismaClient_1 = require("../prismaClient");
exports.userService = {
    getUserById: async (userId) => {
        const user = await prismaClient_1.prisma.user.findUnique({
            where: { id: userId },
        });
        return user;
    }
};
