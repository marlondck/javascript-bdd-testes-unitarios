describe("Suite de testes de adição", () => {
  const calculadora = require("../../src/js/calculadora");

  it("deve retornar 5 da soma de 2 e 3", () => {
    expect(calculadora.adicionar(2, 3)).toEqual(5);
  });

  it("deve retornar 6 para a soma de 9 e -3 no formato texto", () => {
    expect(calculadora.adicionar("9", "-3")).toEqual(6);
  });

  it("deve retornar 4.5 para soma de 1.5 e 3", () => {
    expect(calculadora.adicionar(1.5, 3)).toEqual(4.5);
  });

  it("deve retornar 0 quando valor 1 não for numérico", () => {
    expect(calculadora.adicionar(undefined, 10)).toEqual(0);
  });
});
