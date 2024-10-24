"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
exports.userController = {
    getUserDetails: async (req, res) => {
        try {
            const { userId } = req.params;
            const user = await user_service_1.userService.getUserById(parseInt(userId));
            res.json(user);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};
