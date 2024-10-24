"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const prismaClient_1 = require("../prismaClient");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.authService = {
    registerUser: async ({ email, name, phone, password }) => {
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const newUser = await prismaClient_1.prisma.user.create({
            data: { email, name, phone, password: hashedPassword },
        });
        return newUser;
    },
    loginUser: async ({ email, password }) => {
        const user = await prismaClient_1.prisma.user.findUnique({ where: { email } });
        if (!user)
            throw new Error('Invalid email or password');
        const validPassword = await bcrypt_1.default.compare(password, user.password);
        if (!validPassword)
            throw new Error('Invalid email or password');
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }
};
