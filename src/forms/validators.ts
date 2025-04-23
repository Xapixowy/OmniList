import { z } from 'zod';

export const match = <T extends Record<string, unknown>>(field1: string, field2: string) => {
  return (data: T, ctx: z.RefinementCtx) => {
    if (data[field1] !== data[field2]) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: [field2],
      });
    }
  };
};
