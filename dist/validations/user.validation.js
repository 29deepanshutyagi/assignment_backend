"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    name: zod_1.z.string().min(3, 'Name must be at least 3 characters long'),
    phone: zod_1.z.string().min(10).max(10, 'Phone number must be 10 digits'),
    password: zod_1.z.string().min(6, 'Password must be at least 6 characters long'),
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6, 'Password must be at least 6 characters long'),
});
