const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('teste', () => {
    expect(handlerElephants()).toBeUndefined();
    expect(handlerElephants(1)).toEqual('Parâmetro inválido, é necessário uma string');
  });
});
