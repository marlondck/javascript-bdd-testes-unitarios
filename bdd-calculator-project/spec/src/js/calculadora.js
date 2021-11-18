const calculadora = {
  adicionar: (n1, n2) => {
    if (isNaN(n1) || isNaN(n2)) {
      return 0;
    }
    return Number(n1) + Number(n2);
  },
  subtrair: (n1, n2) => 0,
  dividir: (n1, n2) => 0,
  multiplicar: (n1, n2) => 0,
};

// impedir o 'require' seja executado no browser
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = calculadora;
}
