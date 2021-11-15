describe("Suite de testes toMatch", () => {
  let text = "string";

  it("deve validar o uso de matcher 'toMatch'", () => {
    expect(text).toMatch(/string/);
    expect(text).toMatch("string");
    expect(text).toMatch(/STRING/i);
    expect(text).not.toMatch(/'javascript'/);
    expect("15/11/2021").toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    expect("12345-456").toMatch(/^\d{5}-\d{3}$/);
  });
});
