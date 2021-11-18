const display = document.querySelector(".display");

let n1 = "";
let n2 = "";
let res = "";
let operacao = "";
display.textContent = "10";

const limpar = () => {
  n1 = "";
  n2 = "";
  operacao = "";
  display.textContent = "0";
};

const adicionaNumero = (numero) => {
  if (operacao === "") {
    n1 = obterNumero(numero, n1);
  } else {
    n2 = obterNumero(numero, n2);
  }
};

function obterNumero(novoNumero, numeroAtual) {
  if (
    numeroAtual.length == 10 ||
    (novoNumero === "." && numeroAtual.indexOf(".") >= 0)
  ) {
    return;
  }
  if (
    novoNumero === "." &&
    (display.textContent === "0" || numeroAtual === "")
  ) {
    numeroAtual = "0";
  }
  display.textContent = numeroAtual + novoNumero;
  return display.textContent;
}

const defineOperacao = (valor) => {
  calcular();
  operacao = valor;
};

const calcular = () => {
  if (n1 === "" || n2 === "" || operacao === "") {
    return;
  }

  res = "";
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);

  switch (operacao) {
    case "+":
      res = calculadora.adicionar(n1, n2);
      break;
    case "-":
      res = calculadora.subtrair(n1, n2);
      break;
    case "/":
      res = calculadora.dividir(n1, n2);
      break;
    case "*":
      res = calculadora.multiplicar(n1, n2);
      break;
  }

  res = res.toString();
  display.textContent = res.length <= 10 ? res : res.substr(0, 10);
  n1 = display.textContent;
  n2 = "";
  operacao = "";
};
