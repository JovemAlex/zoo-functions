const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const pessoa = data.employees.find((employ) =>
    employ.firstName === employeeName || employ.lastName === employeeName);

  return pessoa;
}
console.log(getEmployeeByName());

module.exports = getEmployeeByName;
