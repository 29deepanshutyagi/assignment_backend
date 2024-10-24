import { Request, Response } from 'express';
import { userService } from '../services/user.service';

export const userController = {
  getUserDetails: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const user = await userService.getUserById(parseInt(userId));
      res.json(user);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};
