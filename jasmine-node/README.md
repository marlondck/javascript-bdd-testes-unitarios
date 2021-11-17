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
    "test": "karma start --no-single-run karma.config.js",
    "test-dev": "karma start karma.config.js"
  },
```

## Browserify

- Os testes usam como padrão de importação o require, porém os navegadores não reconhecem estas chamadas, ai entra o browserify que faz a conversão então automaticamente para `tags html <script>`.

- Instale usando o comando `yarn add -D browserify watchify karma-browserify`
- Altere o arquivo do arquivo `karma-config.js` para:

```javascript
frameworks: ['jasmine', 'browserify'],
files: [
    'spec/**/*Spec.js',
    'spec/helpers/**/SpecHelper.js'
  ],
preprocessors: {
      "spec/**/*Spec.js": ["browserify"],
    },
    browsers: ["Chrome", "Chrome_without_security"],
    customLaunchers: {
      Chrome_without_security: {
        base: "Chrome",
        flags: ["--disable-web-security", "--disable-site-isolation-trials"],
      },
    },
```

Com isso sempre que rodar `yarn run test`
Ele abrirá o navegador, executará os testes automaticamente.
