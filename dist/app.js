"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const expense_routes_1 = __importDefault(require("./routes/expense.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const error_middleware_1 = require("./middleware/error.middleware");
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware to parse JSON request body
app.use(express_1.default.json());
// Routes
app.use('/auth', auth_routes_1.default);
app.use('/expenses', expense_routes_1.default);
app.use('/users', user_routes_1.default);
// Error handling middleware
app.use(error_middleware_1.errorHandler);
exports.default = app;
