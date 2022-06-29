const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { species, employees } = data;

  const funcionario = employees.find((employ) => employ.id === id);
  const firstAnimal = species.find((spec) => spec.id === funcionario.responsibleFor[0]);
  const oldAnimal = firstAnimal.residents.reduce((acc, curr) => {
    if (acc.age > curr.age) return acc;
    return curr;
  });
  return ([`${oldAnimal.name}`, `${oldAnimal.sex}`, oldAnimal.age]);
}

module.exports = getOldestFromFirstSpecies;
