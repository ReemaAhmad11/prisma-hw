import { user } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';
import {
  UserSchemaType,
  GetUserSchemaType,
} from '../zod-schema/user_sehema';

export const getUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movies = await prisma.movie.findMany();
    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server Error !' });
  }
};

export const addUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = req.body as user;

    await prisma.user.create({
      data: newUser,
    });
    return res.status(201).json({ message: 'New Movie added !' });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    if (prismaError.code == 'P2002') {
      return res.status(400).json({
        message: ' rating have been used before',
      });
    }
    return res.status(500).json({
      message: 'Server Error !',
    });
  }
};

// export const updateUserHandler = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const newUserUp = req.body as user;
//     const { id } = req.params as UserSchemaType;

//     await prisma.movie.update({
//       where: { id },
//       data: newUserUp,
//     });
//     return res.status(200).json({ message: 'User updated' });
//   } catch (error) {
//     return res.status(500).json({
//       message: 'Server Error !',
//     });
//   }
// };

// export const deleteUserHandler = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params as UserSchemaType;

//     await prisma.user.delete({
//       where: { id },
//     });
//     return res.status(200).json({ message: 'User Deleted !' });
//   } catch (error) {
//     return res.status(500).json({
//       message: 'Server Error !',
//     });
//   }
// };

