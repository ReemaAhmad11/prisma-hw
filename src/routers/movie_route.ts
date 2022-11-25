import express from 'express';
import {
  addMovieHandler,
  deleteMovieHandler,
  getMovieHandler,
  updateMovieHandler,
} from '../controller/movie.controller';
import validate from '../middilwares/validate';
import {
  addMovieSchema,
  deleteMovieSchema,
  GetNameMovieSchema,
  GetgenreMovieSchema,
  GetrateMovieSchema,
  updateMovieSchema,
} from '../zod-schema/movie_sehema';

const router = express.Router();

router.get('/', getMovieHandler);
router.get('/name', validate(GetNameMovieSchema), getMovieHandler);
router.get('/genre', validate(GetgenreMovieSchema), getMovieHandler);
router.get('/rate', validate(GetrateMovieSchema), getMovieHandler);
router.post('/', validate(addMovieSchema), addMovieHandler);
router.put('/:id', validate(updateMovieSchema), updateMovieHandler);
router.delete('/:id', validate(deleteMovieSchema), deleteMovieHandler);

export default router;
