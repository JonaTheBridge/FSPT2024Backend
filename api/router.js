import Router from 'express';
import clothesRouter from './clothes/clothes.router.js';
import usersRouter from './users/users.router.js';

const router = Router();

router.use('/clothes', clothesRouter);
router.use('/users', usersRouter);

export default router;
