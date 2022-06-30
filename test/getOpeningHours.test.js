const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('testes', () => {
    expect(getOpeningHours('Monday', '00:00-AM')).toEqual('The zoo is closed');
  });
});
