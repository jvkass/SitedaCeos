Aplicação criada com [Create React App](https://github.com/facebook/create-react-app).

npm i - instalar as dependencias do projeto.
npm start - visualizar o site no servidor local da sua maquina.


## Scripts Disponíveis 




Instalação do yarn no sistema: [https://yarnpkg.com/pt-BR/docs/install](https://yarnpkg.com/pt-BR/docs/install)



### `yarn install`

Equivalente ao 'npm install'

Também é possível rodar ocultando o 'install', entrando apenas `yarn`

Instalação das dependências do yarn.


### `yarn start`

Equivalente ao 'npm start'.

Roda a aplicação no local host<br>
[http://localhost:3000](http://localhost:3000)

A página vai recarregar automaticamente ao salvar mudanças<br>
Os erros também aparecerão no console.

### `yarn build`

Otimiza a aplicação para a pasta `build` e a deixa pronta para colocar no ar.

### Deployment

### `yarn add --dev gh-pages`

Instalação do pacote gh-pages (automatização do processo de publicação no github pages).

Para rodá-la, executamos no terminal: `./node_modules/.bin/gh-pages -d build`.

### `yarn deploy`

Combinação do `yarn build` e `./node_modules/.bin/gh-pages -d build`.

Basta esse comando para criar a pasta build e publicá-la no github pages.


