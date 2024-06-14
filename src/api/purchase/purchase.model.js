import { Schema, model } from 'mongoose';
const { ObjectId, } = Schema.Types;

const purchaseSchema = new Schema({
  client: { type: ObjectId, ref: 'User', },
  clothes: { type: ObjectId, ref: 'Clothes', },
  quantity: { type: Number, required: true, },
});

const purchaseModel = model('Purchase', purchaseSchema, 'purchase');

export default purchaseModel;
