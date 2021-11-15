describe("Suite de testes toBeUndefined", () => {
  let v1;
  let obj = { valor: 1 };

  it("deve validar o uso de matcher 'toBeUndefined'", () => {
    expect(v1).toBeUndefined();
    expect(obj).not.toBeUndefined();
  });
});
