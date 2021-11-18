const calculadora = {
  adicionar: (n1, n2) => 0,
  subtrair: (n1, n2) => 0,
  dividir: (n1, n2) => 0,
  multiplicar: (n1, n2) => 0,
};

// impedir o 'require' seja executado no browser
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = calculadora;
}
