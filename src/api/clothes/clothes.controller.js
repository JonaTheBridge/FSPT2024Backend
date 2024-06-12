import * as clothesService from './clothes.service.js';

async function getAll(req, res) {
  const allClothes = await clothesService.getAll();
  res.json(allClothes);
}

async function getFirst(req, res) {
  const firtClothesItem = await clothesService.getFirst();
  res.json(firtClothesItem);
}

async function getRandom(req, res) {
  const randomClothesItem = await clothesService.getRandom();
  res.json(randomClothesItem);
}

async function getByBrand(req, res) {
  const { brandName, } = req.params;
  const query = { 'brand': brandName, };
  const filteredClothesByBrand = await clothesService.getByFilter({ query, });
  res.json(filteredClothesByBrand);
}

async function getByFilter(req, res) {
  const { query, } = req;
  const filteredClothes = await clothesService.getByFilter({ query, });
  res.json(filteredClothes);
}

async function getByPriceRange(req, res) {
  const { query, } = req;
  if (!query.min || !query.max) {
    res.status(400);
    res.json({ error: 'The properties of /byPriceRange route query are min or max', });
    return;
  }

  const filteredClothesByPriceRange = await clothesService.getByPriceRange({ query, });
  res.json(filteredClothesByPriceRange);
}

async function create(req, res) {
  const clothesItem = req.body;
  if (!clothesItem.type || !clothesItem.color || !clothesItem.size || !clothesItem.size.length) {
    let message = 'The following properties are mandatory: ';
    const emptyProps = [];
    !clothesItem.type && emptyProps.push('Type');
    !clothesItem.color && emptyProps.push('Color');
    (!clothesItem.size || !clothesItem.size.length) && emptyProps.push('Size');
    message += emptyProps.join(', ');

    res.status(400);
    res.json({ error: message, });
    return;
  }

  const lastItem = await clothesService.create({ clothesItem, });
  res.json(lastItem);
}

async function replace(req, res) {
  const { id, } = req.params;
  const newItem = req.body;
  const changedClothes = await clothesService.replace({ id, newItem, });
  res.json(changedClothes);
}

async function update(req, res) {
  const { id, } = req.params;
  const newItem = req.body;
  const updatedClothes = await clothesService.update({ id, newItem, });
  res.json(updatedClothes);
}

async function remove(req, res) {
  const { id, } = req.params;
  const removedItem = await clothesService.remove({ id, });
  res.json(removedItem);
}

export {
  getAll,
  getFirst,
  getRandom,
  getByBrand,
  getByFilter,
  getByPriceRange,
  create,
  replace,
  update,
  remove
};
