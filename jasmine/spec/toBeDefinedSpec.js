describe("Suite de testes toBeDefined", () => {
  let num = 10;
  let obj = { valor: 1 };

  it("deve validar o uso de matcher 'toBeDefined'", () => {
    expect(num).toBeDefined();
    expect(obj.valor).toBeDefined();
    expect(null).toBeDefined();
    expect(NaN).toBeDefined();
  });
});
