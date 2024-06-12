import clothesModel from './clothes.model.js';

async function getAll() {
  const allClothes = await clothesModel.find({}).lean();
  return allClothes;
}

async function getLength() {
  const clothesLength = await clothesModel.countDocuments({});
  return clothesLength;
}

async function getByIndex({ index, }) {
  const clothesByIndex = await clothesModel.findOne({}).skip(index).lean();
  return clothesByIndex;
}

function getByFilter({ query, }) {
  const filteredClothes = clothesModel.find(query).lean();
  return filteredClothes;
}

function getByPriceRange({ query, }) {
  const price = { $gte: 0, };

  query.min && (price.$gte = parseInt(query.min));
  query.max && (price.$lte = parseInt(query.max));

  const filteredByPriceRangeClothes = clothesModel.find({ price, }).lean();
  return filteredByPriceRangeClothes;
}

function create({ clothesItem, }) {
  const createdClothes = clothesModel.create(clothesItem);
  return createdClothes;
}

function replace({ id, newItem, }) {
  const options = { new: true, };
  const replacedClothes = clothesModel.findOneAndReplace({_id: id, }, newItem, options);
  return replacedClothes;
}

function update({ id, newItem, }) {
  const options = { new: true, };
  const replacedClothes = clothesModel.findByIdAndUpdate(id, newItem, options);
  return replacedClothes;
}

function remove({ id, }) {
  const replacedClothes = clothesModel.findByIdAndDelete(id);
  return replacedClothes;
}

export {
  getAll,
  getLength,
  getByIndex,
  getByFilter,
  getByPriceRange,
  create,
  replace,
  update,
  remove
};
