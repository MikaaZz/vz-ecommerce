import express from 'express';
import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import * as UserService from './user.service';

export const userRouter = express.Router();

// GET: List of all Users
userRouter.get('/', async (request: Request, response: Response) => {
  try {
    const users = await UserService.listUsers();
    return response.status(200).json(users);
  } catch (e: any) {
    return response.status(500).json(e.message);
  }
});

// GET: Single user by ID
userRouter.get('/:id', async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id, 10);
  try {
    const user = await UserService.getUser(id);
    if (user) {
      return response.status(200).json(user);
    }
    return response.status(404).json('User could not be found');
  } catch (e: any) {
    return response.status(500).json(e.message);
  }
});
