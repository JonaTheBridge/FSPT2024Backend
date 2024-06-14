import Router from 'express';
import * as purchaseController from './purchase.controller.js';

const router = Router();

router.get('/byUserId/:userId', purchaseController.getByUserId);

export default router;
