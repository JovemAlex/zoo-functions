const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, curr) => {
    if (curr.age < 18) {
      acc.child += 1;
    } else if (curr.age < 50) {
      acc.adult += 1;
    } else {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const qtd = countEntrants(entrants);
  const { adult, senior, child } = data.prices;
  return (qtd.adult * adult) + (qtd.senior * senior) + (qtd.child * child);
}

module.exports = { calculateEntry, countEntrants };
