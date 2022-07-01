const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('testes', () => {
    const openingHours = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Thursday', '10:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours()).toEqual(openingHours);
    expect(getOpeningHours('')).toEqual(openingHours);
    expect(() => { getOpeningHours('Thu', '09:00-AM'); }).toThrow();
    expect(() => { getOpeningHours('Friday', '13:00-ZM'); }).toThrow();
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrow();
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrow();
    expect(() => { getOpeningHours('Monday', '00:60-AM'); }).toThrow();
  });
});
