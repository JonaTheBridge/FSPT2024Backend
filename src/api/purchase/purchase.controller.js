import * as purchaseService from './purchase.service.js';

async function getByUserId(req, res) {
  const userId = req.params;
  const clothesByUserId = await purchaseService.getByUserId({ userId, });
  res.json(clothesByUserId);
}

export {
  getByUserId
};
