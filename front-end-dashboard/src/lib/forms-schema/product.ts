import { z } from 'zod';

export const productSchema = z.object({
  name: z
    .string({ required_error: 'O campo Nome Completo não pode estar vazio.' })
    .min(3, {
      message: 'O campo Nome Completo deve conter pelo menos 3 letras.',
    })
    .max(255),
  description: z.string(),
  price: z.string(),
});

export type ProductSchema = z.infer<typeof productSchema>;
