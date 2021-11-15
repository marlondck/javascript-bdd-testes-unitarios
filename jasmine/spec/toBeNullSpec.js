describe("Suite de testes toBeNull", () => {
  let num = 10;
  let obj = null;
  let texto;

  it("deve validar o uso de matcher 'toBeNull'", () => {
    expect(num).not.toBeNull();
    expect(obj).toBeNull();
    expect(texto).not.toBeNull();
  });
});
