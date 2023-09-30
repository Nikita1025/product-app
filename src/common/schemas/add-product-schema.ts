import { z } from 'zod';

export const addProductSchema = () => {
  return z.object({
    title: z
      .string()
      .trim()
      .nonempty('Enter title')
      .min(3, 'Title  must have more than 2 characters')
      .max(100),
    price: z
      .string()
      .min(1, 'Price  must have more than 1 characters')
      .max(10, 'Password must have more than 10 characters'),
    category: z
      .string()
      .nonempty('Enter category')
      .min(3, 'Category  must have more than 2 characters')
      .max(100),
    description: z
      .string()
      .nonempty('Enter description')
      .min(3, 'Description  must have more than 2 characters')
      .max(100),
    image: z.string().nonempty('Insert a link to the picture'),
  });
};
