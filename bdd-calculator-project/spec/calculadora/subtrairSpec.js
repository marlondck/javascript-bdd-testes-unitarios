describe("Suite de testes de subtração", () => {
  const calculadora = require("../../src/js/calculadora");

  it("deve retornar 5 da subtração de 8 para 3", () => {
    expect(calculadora.subtrair(8, 3)).toEqual(5);
  });

  it("deve retornar 5 para a subtração de 8 e 3 no formato texto", () => {
    expect(calculadora.subtrair("8", "3")).toEqual(5);
  });

  it("deve retornar 4 da subtração de 5.5 e 1.5", () => {
    expect(calculadora.subtrair(5.5, 1.5)).toEqual(4);
  });

  it("deve retornar 0 para valor 1 inválido", () => {
    expect(calculadora.subtrair(undefined, 3)).toEqual(0);
  });
});
