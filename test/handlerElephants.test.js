const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('teste', () => {
    const availability = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    const residents = [
      { name: 'Ilana', sex: 'female', age: 11 },
      { name: 'Orval', sex: 'male', age: 15 },
      { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 },
    ];
    expect(handlerElephants()).toBeUndefined();
    expect(handlerElephants('kkk')).toBeNull();
    expect(handlerElephants('1')).toBeNull();
    expect(handlerElephants('')).toBeNull();
    expect(handlerElephants(1)).toEqual('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('name')).toEqual('elephants');
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('availability')).toEqual(availability);
    expect(handlerElephants('residents')).toEqual(residents);
    expect(handlerElephants('availability')).toStrictEqual(availability);
    expect(handlerElephants('residents')).toStrictEqual(residents);
    expect(handlerElephants('count')).toEqual(4);
    expect(typeof handlerElephants('count')).toEqual('number');
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
});
