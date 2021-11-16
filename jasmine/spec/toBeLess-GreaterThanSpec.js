describe("Suite de testes toBeLessThan", () => {
  let pi = 3.1415;
  let num = 2;

  it("deve validar o uso de matcher 'toBeLessThan'", () => {
    expect(num).toBeLessThan(pi);
  });
});

describe("Suite de testes toBeGreaterThan", () => {
  let pi = 3.1415;
  let num = 4;

  it("deve validar o uso de matcher 'toBeGreaterThan'", () => {
    expect(num).toBeGreaterThan(pi);
  });
});
