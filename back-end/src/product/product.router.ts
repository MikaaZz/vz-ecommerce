import express from 'express';
import type { Request, Response } from 'express';

import * as ProductService from './product.service';
import { body, validationResult } from 'express-validator';

export const productRouter = express.Router();

// GET: List of all Users
productRouter.get('/', async (request: Request, response: Response) => {
  try {
    const users = await ProductService.listProducts();
    return response.status(200).json(users);
  } catch (e: any) {
    return response.status(500).json(e.message);
  }
});

// GET: Single user by ID
productRouter.get('/:id', async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id, 10);
  try {
    const product = await ProductService.getProduct(id);
    if (product) {
      return response.status(200).json(product);
    }
    return response.status(404).json('Product could not be found');
  } catch (e: any) {
    return response.status(500).json(e.message);
  }
});

// POST: Create product
// Params: name, description, price
productRouter.post(
  '/',
  body('name').isString(),
  body('description').isString(),
  body('price').isNumeric(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    try {
      const req = request.body;
      const newProduct = await ProductService.createProduct(
        req.product,
        req.user
      );
      return response.status(201).json(newProduct);
    } catch (e: any) {
      return response.status(500).json(e.message);
    }
  }
);
