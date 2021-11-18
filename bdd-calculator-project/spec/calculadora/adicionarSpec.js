describe("Suite de testes de adição", () => {
  const calculadora = require("../src/js/calculadora");

  it("deve retornar 5 da soma de 2 e 3", () => {
    expect(calculadora.adicionar(2, 3)).toEqual(5);
  });
});
