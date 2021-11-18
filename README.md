# Testes Unitários

- Testes de Unidade ou teste unitário é a fase de testes onde cada unidade do sistema é testada individualmente. O objetivo é isolar cada parte do sistema para garantir que elas estejam funcionando conforme especificado.

- Permite a criação de um código mais confidente e de facil manutenção.

- O codigo ficara menos acoplado e melhor estruturado.

- Seguindo o padrão BDD `(Behavior Driven Development ou Desenvolvimento orientado por comportamento)` os testes poderão ser utilizados para entender o funcionamento do sistema.

- Adicionar uma nova funcionalidade leva menos tempo com testes de regressão, uma vez que o codigo já cobre o teste para as funcionalidades existentes, e elas serão testadas automaticamente ao executar as suítes de testes.

### Jasmine

- é um framework utilizado para a criação de testes em Javascript.

### Suítes

- Suítes de testes servem para definir o escopo do que está sendo testado. No Jasmine, a suíte é uma function global chamada `describe`

```javascript
describe("Operação de Adição", () => {});
```

### Specs

- Specs são os testes que validam uma suíte de testes, possuí um a palavra reservada `it`

```javascript
describe("Operação de Adição", () => {
  it("deve garantir que 1 + 1 = 2", () => {});
  it("deve garantir que 1 * 0 = 0", () => {});
});
```

- Verificações servem para validar um resultado do teste.
  Possuí a palavra reservada `expect`.
  O expect deve ser utilizado em conjunto com uma comparação (`Matcher`), que conterá o valor a ser comparado.

```javascript
describe("Operação de Adição", () => {
  it("deve garantir que 1 + 1 = 2", () => {
    expect(1 + 1).toBe(2);
  });
});
```

### Matchers

- Comparações são funções que retornam um valor boolean para ser verificado através de uma expectation.
- Já existe uma serie de matchers por padrão no jasmine mas é possível criar mais conforme a necessidade.
- Exemplos:
  - [toBe](01.toBe.md)
  - [toEqual](02.toEqual.md)
  - [toMatch](03.toMatch.md)
  - [toBeDefined](04.toBefined-tobeUndefined.md)
  - [toBeNull](05.toBeNull.md)
  - [toBeTruthy & toBeFalsy](06.toBeTruthy-toBeFalsy.md)
  - [toContain](07.toContain.md)
  - [toBeLessThan & toBeGreaterThan](08.toBeLessThan-toBeGreaterThan.md)
  - [toThrow & toThrowError](09.toThrow-toThrowError.md)
  - [metodos globais](10.Global-Methods.md)
  - [algumas tricks](11.Desabilitando.md)
  - e existem outros matchers..

# BDD - Behavior Driven Development

Desenvolvimento guiado por comportamentos, é um processo de criação de testes unitários de forma interativa.

### Seu processo é composto por:

1. Adicionar um teste
2. Executar o teste e certificar que ele falhe
3. Implementar a funcionalidade no código
4. Executar o teste para certificar que ele passe
5. Refatorar o codigo
6. Reiniciar o processo até que todos os testes sejam escritos

![screenshot](bdd.png?raw=true "screenshot")

- Para criar um fluxo de testes automatizados no `Nodejs` pode seguir este tutorial [aqui](jasmine-node/README.md)

## Projeto Calculadora Utilizando BDD

![screenshot](calc.png?raw=true "screenshot")
[Acesse aqui](bdd-calculator-project)
