import express from 'express';
import {
  addUserHandler,
  getUserHandler,
  // deleteUserHandler,
  // updateUserHandler,
} from '../controller/user_controller';
import validate from '../middilwares/validate';
import {
  addMovieSchema,
  deleteMovieSchema,
  updateMovieSchema,
} from '../zod-schema/movie_sehema';

const router = express.Router();

router.get('/', getUserHandler);
router.post('/', validate(addMovieSchema), addUserHandler);
// router.put('/:id', validate(updateMovieSchema), updateUserHandler);
// router.delete('/:id', validate(deleteMovieSchema), deleteUserHandler);

export default router;