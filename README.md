# nyttop
React + Redux

<hr>

## Descrição do Projeto
Página web que contenha as notícias mais importantes em ciências e tecnologia, saúde, política e mundo, consultando API do The New York Times, http://developer.nytimes.com/

- Requisitos

  - Sistema operacional: Windows, Mac ou Linux
  - Browser (Google Chrome, Firefox, etc...)
  - [Node.JS](https://nodejs.org/en/) - V.10.15.3

- Front

  - Projeto iniciado com [create-react-app](https://github.com/facebook/create-react-app)

  - Dependências
    - Material UI - `npm install @material-ui/core`
    - Material Icon - `npm install @material-ui/icons`
    - React Router - `npm install react-router-dom`
    - Axios - `npm install axios`
    - Redux Logger - `npm install redux-logger`
    - Redux Thunk - `npm install redux-thunk`
    - Redux - `npm install redux`
    - React Redux - `npm install react-redux`

- Back

  - [API - The New York Times](http://developer.nytimes.com/) 

<hr>

## Iniciar projeto

### Local

- Clone o repositório (Terminal)

  - escolher diretório (exemplo) `cd Documents`
  - clonar repositório `git clone https://github.com/bucceroni/nyttop.git`

- API

  - Gerar API Key para acessar as notícias do The New York Times - [Instruções](https://developer.nytimes.com/get-started)
  - Criar arquivo .env e adicionar código abaixo substituindo a API Key
  ```
  REACT_APP_TOKEN_NYTTOP = APIKey
  ```
  - Não esquecer de adicionar o arquivo .env no .gitignore

- Inicie o projeto (Terminal)
  - `cd nyttop`
  - Instalar dependências `npm install`
  - Iniciar APP `npm start`
  - acessar URL `http://localhost:3000/`

<hr>

## Deploy

- Heroku
  - Aplicação disponível em:
  - [https://nyttop.herokuapp.com/](https://nyttop.herokuapp.com/)

<hr>
