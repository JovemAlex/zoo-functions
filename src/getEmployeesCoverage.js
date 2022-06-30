const data = require('../data/zoo_data');

const getSpecieId = (id) => data.species.find((specie) => specie.id === id);

const emptyObject = (employee) => {
  const object = { id: '', fullName: '', species: [], locations: [] };
  object.id = employee.id;
  object.fullName = `${employee.firstName} ${employee.lastName}`;
  employee.responsibleFor.forEach((id) => {
    const specieFound = getSpecieId(id);
    object.species.push(specieFound.name);
    object.locations.push(specieFound.location);
  });
  return object;
};

const getEmployee = ({ name, id }) => {
  let dataEmployee;
  if (id !== undefined) {
    dataEmployee = data.employees.find((employee) => employee.id === id);
  } else {
    dataEmployee = data.employees.find((employee) => {
      const { firstName, lastName } = employee;
      return firstName === name || lastName === name;
    });
  }
  if (dataEmployee !== undefined) {
    return emptyObject(dataEmployee);
  }
  throw new Error('Informações inválidas');
};

function getEmployeesCoverage(options) {
  if (options === undefined) {
    return data.employees.map((employee) => getEmployee({ id: employee.id }));
  }
  return getEmployee(options);
}

module.exports = getEmployeesCoverage;
