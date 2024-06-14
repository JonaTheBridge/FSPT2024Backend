import * as purchaseRepository from './purchase.repository.js';

function getByUserId({ userId, }) {
  const clothesByUserId = purchaseRepository.getByUserId({ userId, });
  return clothesByUserId;
}

export {
  getByUserId
};
