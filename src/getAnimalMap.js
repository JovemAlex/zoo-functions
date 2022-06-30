const data = require('../data/zoo_data');

const animalLocation = ({ species }) => {
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  return species.reduce((acc, curr) => {
    acc[curr.location].push(curr.name);
    return acc;
  }, obj);
};

function categorizedWithNames({ species }, { sorted }) {
  const objBase = { NE: [], NW: [], SE: [], SW: [] };
  return species.reduce((objeto, specie) => {
    const objetoInterno = {};
    objetoInterno[specie.name] = specie.residents.map((animal) => animal.name);
    if (sorted) objetoInterno[specie.name].sort();
    objeto[specie.location].push(objetoInterno);
    return objeto;
  }, objBase);
}

function categorizedBySex({ species }, { sex, sorted }) {
  const objBase = { NE: [], NW: [], SE: [], SW: [] };
  return species.reduce((objeto, specie) => {
    const objetoInterno = {};
    objetoInterno[specie.name] = [];
    specie.residents.forEach((animal) => {
      if (animal.sex === sex) objetoInterno[specie.name].push(animal.name);
    });
    if (sorted) objetoInterno[specie.name].sort();
    objeto[specie.location].push(objetoInterno);
    return objeto;
  }, objBase);
}

function getAnimalMap(options) {
  if (options === undefined || options.includeNames !== true) return animalLocation(data);
  if (options.sex) return categorizedBySex(data, options);
  return categorizedWithNames(data, options);
}

module.exports = getAnimalMap;
