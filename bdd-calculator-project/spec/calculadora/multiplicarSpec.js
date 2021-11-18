describe("Suite de testes de multiplicação", () => {
  const calculadora = require("../../src/js/calculadora");

  it("deve retornar 50 da multiplicação de 10 por 5", () => {
    expect(calculadora.multiplicar(10, 5)).toEqual(50);
  });

  it("deve retornar 6 para a multiplicação de 2 e 3 no formato texto", () => {
    expect(calculadora.multiplicar("2", "3")).toEqual(6);
  });

  it("deve retornar 4.5 da multiplicação de 1.5 e 3", () => {
    expect(calculadora.multiplicar(1.5, 3)).toEqual(4.5);
  });

  it("deve retornar 0 para valor inválido", () => {
    expect(calculadora.multiplicar(undefined, 1)).toEqual(0);
  });
});
