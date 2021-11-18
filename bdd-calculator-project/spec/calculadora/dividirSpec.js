describe("Suite de testes de divisão", () => {
  const calculadora = require("../../src/js/calculadora");

  it("deve retornar 5 da divisão de 10 por 2", () => {
    expect(calculadora.dividir(10, 2)).toEqual(5);
  });

  it("deve retornar 2 para a divisão de 6 e 3 no formato texto", () => {
    expect(calculadora.dividir("6", "3")).toEqual(2);
  });

  it("deve retornar 1.5 da divisão de 4.5 e 2", () => {
    expect(calculadora.dividir(4.5, 3)).toEqual(1.5);
  });

  it("deve retornar 'Erro' para divisão por 0", () => {
    expect(calculadora.dividir(10, 0)).toEqual("Erro");
  });

  it("deve retornar 0 para valor inválido", () => {
    expect(calculadora.dividir(undefined, 1)).toEqual(0);
  });
});
