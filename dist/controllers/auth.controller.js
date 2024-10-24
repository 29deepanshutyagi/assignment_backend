"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("../services/auth.service");
const auth_validation_1 = require("../validations/auth.validation");
exports.authController = {
    register: async (req, res) => {
        try {
            const validatedData = auth_validation_1.registerSchema.parse(req.body);
            const user = await auth_service_1.authService.registerUser(validatedData);
            res.status(201).json(user);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    login: async (req, res) => {
        try {
            const validatedData = auth_validation_1.loginSchema.parse(req.body);
            const token = await auth_service_1.authService.loginUser(validatedData);
            res.json({ token });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};
