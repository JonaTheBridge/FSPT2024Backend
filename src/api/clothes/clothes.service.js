import * as clothesRepository from './clothes.repository.js';

function getRandomNumber({ max, }) {
  return Math.floor(Math.random() * max);
}

async function getAll() {
  const allClothes = await clothesRepository.getAll();
  return allClothes;
}

function getFirst() {
  const firstClothesItem = clothesRepository.getByIndex({ index: 0, });
  return firstClothesItem;
}

async function getRandom() {
  const dbLength = await clothesRepository.getLength();
  const randomIndex = getRandomNumber({ max: dbLength, });
  const randomClothesItem = await clothesRepository.getByIndex({ index: randomIndex, });
  return randomClothesItem;
}

function getByFilter({ query, }) {
  const filteredClothes = clothesRepository.getByFilter({ query, });
  return filteredClothes;
}

function getByPriceRange({ query, }) {
  const filteredClothesByPriceRange = clothesRepository.getByPriceRange({ query, });
  return filteredClothesByPriceRange;
}

function create({ clothesItem, }) {
  const newClothesItem = clothesRepository.create({ clothesItem, });
  return newClothesItem;
}

function replace({ id, newItem, }) {
  const replacedItem = clothesRepository.replace({ id, newItem, });
  return replacedItem;
}

function update({ id, newItem, }) {
  const replacedItem = clothesRepository.update({ id, newItem, });
  return replacedItem;
}

function remove({ id, }) {
  const removedItem = clothesRepository.remove({ id, });
  return removedItem;
}

export {
  getAll,
  getFirst,
  getRandom,
  getByFilter,
  getByPriceRange,
  create,
  replace,
  update,
  remove
};
