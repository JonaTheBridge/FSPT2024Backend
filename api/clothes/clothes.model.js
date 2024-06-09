import { Schema, model } from 'mongoose';

const clothesSchema = new Schema({
  type: { type: String, required: true, },
  color: { type: String, required: true, },
  name: { type: String, required: true, },
  brand: { type: String, required: true, },
  price: { type: Number, required: true, },
  size: [{ type: String, required: true, },],
});

const clothesModel = model('Clothes', clothesSchema, 'clothes');
export default clothesModel;
