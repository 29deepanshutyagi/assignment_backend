import { Request, Response } from 'express';
import { authService } from '../services/auth.service';
import { registerSchema, loginSchema } from '../validations/auth.validation';

export const authController = {
  register: async (req: Request, res: Response) => {
    try {
      const validatedData = registerSchema.parse(req.body);
      const user = await authService.registerUser(validatedData);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const validatedData = loginSchema.parse(req.body);
      const token = await authService.loginUser(validatedData);
      res.json({ token });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};
