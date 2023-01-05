const soma = require('./../src/soma')

test('Adicione 5 + 7 e resulte em 12', () => {

    expect(soma(5, 7)).toBe(12);

});
