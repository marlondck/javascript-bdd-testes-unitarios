describe("Suite de testes toThrow", () => {
  const multiplicar = () => num * 10;
  const somar = (n1, n2) => n1 + n2;

  it("deve validar o uso de matcher 'toThrow'", () => {
    expect(multiplicar).toThrow();
    expect(somar).not.toThrow();
  });
});

describe("Suite de testes toThrowError", () => {
  it("deve validar o uso de matcher 'toThrowError'", () => {
    const somar = (n1, n2) => {
      if (n1 <= 0 || n2 <= 0) throw new TypeError("Deve ser maior que 0");
      return n1 + n2;
    };

    const multiplicar = (n1, n2) => {
      if (n1 <= 0 || n2 <= 0)
        throw new TypeError("O número deve ser maior que 0");
      return n1 * n2;
    };

    expect(() => somar(0, 1)).toThrowError();
    expect(() => multiplicar(0, 1)).toThrowError();
    expect(() => somar(0, 0)).toThrowError("Deve ser maior que 0");
    expect(() => multiplicar(0, 1)).toThrowError(/maior/);
  });
});
