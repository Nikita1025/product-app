import { z } from 'zod';

export const createLoginSchema = () => {
  return z.object({
    username: z
      .string()
      .trim()
      .nonempty('Username is required')
      .min(1, 'minimum length 1 character')
      .max(20, 'maximum length 20 characters'),
    password: z
      .string()
      .trim()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_])[a-zA-Z\d!@#$%^&*_]+$/,
        'Password must contain A-z, 0-9, !#$%*+-? ^_',
      )
      .min(2, 'minimum length 2 character')
      .max(10, 'maximum length 10 characters'),
  });
};
