- Testes de Unidade ou teste unitário é a fase de testes onde cada unidade do sistema é testada individualmente. O objetivo é isolar cada parte do sistema para garantir que elas estejam funcionando conforme especificado.

- Permite a criação de um código mais confidente e de facil manutenção.

- O codigo ficara menos acoplado e melhor estruturado.

- Seguindo o padrão BDD `(Behavior Driven Development ou Desenvolvimento orientado por comportamento)` os testes poderão ser utilizados para entender o funcionamento do sistema.

- Adicionar uma nova funcionalidade leva menos tempo com testes de regressão, uma vez que o codigo já cobre o teste para as funcionalidades existentes, e elas serão testadas automaticamente ao executar as suítes de testes.

## Jasmine

- é um framework utilizado para a criação de testes em Javascript.

### Suítes

- Suítes de testes servem para definir o escopo do que está sendo testado. No Jasmine, a suíte é uma function global chamada `describe`

```javascript
describe("Oparação de Adição", () => {});
```

- Specs são os testes que validam uma suíte de testes, possuí um a palavra reservada `it`

```javascript
describe("Oparação de Adição", () => {
  it("deve garantir que 1 + 1 = 2", () => {});
  it("deve garantir que 1 * 0 = 0", () => {});
});
```

- Verificações servem para validar um resultado do teste.
  Possuí a palavra reservada `expect`.
  O expect deve ser utilizado em conjunto com uma comparação (`Matcher`), que conterá o valor a ser comparado.

```javascript
describe("Oparação de Adição", () => {
  it("deve garantir que 1 + 1 = 2", () => {
    expect(1 + 1).toBe(2);
  });
});
```

### Matchers

- Comparações são funções que retornam um valor booleano para ser verificado através de uma expectation.
- Já existe uma serie de matchers por padão no jasmine mas é possível criar mais conforme a necessidade.
- Exemplos:
  - toBe
  - toEqual
  - toMatch
  - toBeDefined
  - toBeNull
  - toContain
  - toFalsy
