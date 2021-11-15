describe("Suite de testes toContain", () => {
  let arr = [1, 2, 3];
  let text = "javascript";
  let arr2 = ["javascript", "Reactjs"];

  it("deve validar o uso de matcher 'toContain'", () => {
    expect(arr).toContain(1);
    expect(text).toContain("javascript");
    expect(arr2).not.toContain("reactjs");
    expect(arr2).toContain("Reactjs");
  });
});
