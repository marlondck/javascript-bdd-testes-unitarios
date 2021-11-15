describe("Suite de testes toBeTruthy", () => {
  let num = 10;
  let obj;

  it("deve validar o uso de matcher 'toBeTruthy'", () => {
    expect(num).toBeTruthy();
    expect(obj).not.toBeTruthy();
  });
});
