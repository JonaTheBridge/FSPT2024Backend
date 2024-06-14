import Router from 'express';
import * as clothesController from './clothes.controller.js';
import roleMiddleware from '../../middlewares/role.middleware.js';

const router = Router();

router.get('/all', clothesController.getAll);
router.get('/first', clothesController.getFirst);
router.get('/random', clothesController.getRandom);
router.get('/brand/:brandName', clothesController.getByBrand);
router.get('/filter', clothesController.getByFilter);
router.get('/byPriceRange', clothesController.getByPriceRange);

router.post(
  '/',
  (req, res, next) => roleMiddleware(req, res, next, ['admin',]),
  clothesController.create
);

router.put('/id/:id', clothesController.replace);

router.patch('/id/:id', clothesController.update);

router.delete('/id/:id', clothesController.remove);

export default router;
