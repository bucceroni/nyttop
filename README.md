# nyttop
ThoughtWorks - Frontend - React & Redux

<hr>

## Descrição do Projeto
Projeto de avaliação

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

<hr >

## Iniciar projeto

### Local

- Clone o repositório (Terminal)

  - escolher diretório (exemplo) `cd Documents`
  - clonar repositório `git clone https://github.com/bucceroni/nyttop.git`

- API

  - Obter um API Key para acessar as notícias do The New York Times - [Link](https://developer.nytimes.com/get-started)
  - Criar arquivo .env e adicionar código abaixo substituindo a API Key
  ```
  REACT_APP_TOKEN_NYTTOP = APIKey
  ```
  - Adicionar .env no .gitignore

- Inicie o projeto (Terminal)
  - `cd nyttop`
  - Instalar dependências `npm install`
  - Iniciar APP `npm start`
  - acessar URL `http://localhost:3000/`

<hr>

### Web/ APP

- Heroku
  - Aplicação disponível em:
  - [hthttps://nyttop.herokuapp.com/](https://nyttop.herokuapp.com/)

<hr>
