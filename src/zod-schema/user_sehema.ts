import { z } from 'zod';

export const addUserSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'Id is required !' }),

    username: z.string({ required_error: 'UserName is required !' })
    .min(4, 'you UserName must be more than 4 characters'),
    
    password: z.number().min(4),

    email: z.string({ required_error: 'Email is required !' }),

    role: z.string({required_error:'Role is required !'}),

    joiningYear :z.string({ required_error: 'JoiningYear must be between 1 - 5 !' }),

    age :z.number({ required_error: 'Age must be more than 60!' })
    .min(18).max(60)
  }),
});

export const updateUserSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'Id is required !' }),

    username: z.string({ required_error: 'UserName is required !' })
    .min(4, 'you UserName must be more than 4 characters'),
    
    password: z.number().min(4),

    email: z.string({ required_error: 'Email is required !' }),

    role: z.string({required_error:'Role is required !'}),

    joiningYear :z.string({ required_error: 'JoiningYear must be between 1 - 5 !' }),

    age :z.number({ required_error: 'Age must be more than 60!' })
    .min(18).max(60)
  }),
    params: z.object({
    id: z.string({ required_error: 'Please send id in the params' }),
  }),
});

 export const GetUserSchema = z.object({
  query: z.object({
    id: z.string({ required_error: 'Please send id in the params' }),
  }),
});


export const deleteUserSchema = z.object({
  params: z.object({
    id: z.string({ required_error: 'Please send id in the params' }),
  }),
});


export type UserSchemaType = z.infer<typeof updateUserSchema>['params'];


export type GetUserSchemaType = z.infer<
  typeof GetUserSchema
>['query'];

