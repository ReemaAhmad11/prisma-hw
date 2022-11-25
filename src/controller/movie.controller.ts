import { movie } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';
import {
  MovieSchemaType,
  GetMovieSchemaType,
} from '../zod-schema/movie_sehema';

export const getMovieHandler = async (
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

export const addMovieHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newMovie = req.body as movie;

    await prisma.movie.create({
      data: newMovie,
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

export const updateMovieHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newMovie = req.body as movie;
    const { id } = req.params as MovieSchemaType;

    await prisma.movie.update({
      where: { id },
      data: newMovie,
    });
    return res.status(200).json({ message: 'Movie updated' });
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error !',
    });
  }
};

export const deleteMovieHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as MovieSchemaType;

    await prisma.movie.delete({
      where: { id },
    });
    return res.status(200).json({ message: 'Movie Deleted !' });
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error !',
    });
  }
};