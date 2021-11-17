## Testando sua aplicação com nodejs e jasmine

- Adicione o jasmine como dependência de desenvolvimento (`yarn add -D jasmine`).
- Inicialize o jasmine init (`npx jasmine init`) para criar o diretorio `spec`

## Teste parcial utilizando o jasmine

- Após crie seu teste dentro do diretorio spec com o final do arquivo spec.js(ex: `testeSpec.js`) e rode o comando (`npx jasmine`) para testar.

## Teste integrado ao package do Node

- Editar o arquivo `package.json` e substituir o comando de testes para jasmine
- Execute então `yarn run test`

## Exemplos

- Execute `npx jasmine examples` e irá aparecer um diretorio novo com exemplos de testes para estudo.

## Automatização de testes

- Instale o karma como dependencia de desenvolvimento.
  `yarn add karma karma-cli karma-jasmine karma-chrome-launcher -D`

Inicialize o karma com o comando e responda as questões do terminal conforme seu ambiente.
`npx karma init karma.config.js`

- O comando do Karma é `npx karma start`
- Altere a seção de scripts no `package.json` para

```javascript
 "scripts": {
    "test": "karma start --single-run",
    "test-dev": "karma start"
  },
```
