"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addExpenseSchema = void 0;
const zod_1 = require("zod");
exports.addExpenseSchema = zod_1.z.object({
    description: zod_1.z.string().min(1, 'Description is required'),
    totalAmount: zod_1.z.number().positive('Total amount must be greater than zero'),
    splits: zod_1.z.array(zod_1.z.object({
        userId: zod_1.z.number().int(),
        amount: zod_1.z.number().positive(),
        splitType: zod_1.z.enum(['EQUAL', 'EXACT', 'PERCENTAGE']),
    })),
});
