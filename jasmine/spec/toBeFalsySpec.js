describe("Suite de testes toBeFalsy", () => {
  let num = 10;
  let obj;

  it("deve validar o uso de matcher 'toBeFalsy'", () => {
    expect(obj).toBeFalsy();
    expect(null).toBeFalsy();
    expect("").toBeFalsy();
    expect(num).not.toBeFalsy();
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
  });
});
