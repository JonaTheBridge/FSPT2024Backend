// import { Schema } from 'mongoose';
import purchaseModel from './purchase.model.js';
// const { ObjectId, } = Schema;

async function getByUserId({ userId, }) {
  const clothesByUserId = await purchaseModel.find({  }).populate('client').populate('clothes').lean();
  return clothesByUserId;
}

export { getByUserId };
