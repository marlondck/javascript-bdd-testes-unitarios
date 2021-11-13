describe("Suite de testes toBe", () => {
  let v1 = true;
  let v1Copia = v1;
  let v1Texto = "true";
  let obj1 = { valor: true };
  let obj2 = { valor: true };

  it("deve validar o uso de matcher 'toBe'", () => {
    expect(v1).toBe(true);
    expect(v1Copia).toBe(v1);
    expect(v1Texto).toBe("true");
    expect(obj1).not.toBe(obj2);
  });
});
