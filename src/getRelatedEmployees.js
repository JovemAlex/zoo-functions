const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employ) => employ.managers.some((managerId) => id === managerId));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const employees = data.employees.filter((employ) => {
      const employManagers = employ.managers;
      return employManagers.some((managerIds) => managerIds === managerId);
    });
    return employees.map((employ) => `${employ.firstName} ${employ.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };
