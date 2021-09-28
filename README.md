<h1 align="center">
    <img alt="Gobarber" src="https://ik.imagekit.io/hwyksvj4iv/gobarber_19xmN2BUU.svg" width="250px" />
</h1>

<p align="center">
  <a href="#page_with_curl-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :page_with_curl: Sobre
Este repositório contém um API REST em Node.js como back-end utilizando TypeScript.

Essa é a aplicação GoBarber, que é uma plataforma de agendamento de serviços para proprietários de barbearias ou salões de beleza. Nessa aplicação o usuário consegue ter acesso a todos os prostadores de serviços cadastrados através de um aplicativo mobile, com isso usuário consegue escolher um prestador para marcar seu agendamento.

Já o prestador de serviço, através de um interface Web, consegue ter acesso a todos os seus horários, podendo ver todos os que estão ocupados quanto os que estão disponíveis.

**Node.js**: é uma API REST que faz todo o CRUD da aplicação, persistência de dados, tratativa de exceções e que serve dados tanto ao front-end quanto ao mobile.

## :books: Requisitos
- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Node.js**](https://nodejs.org/en/) instalado.
- Ter [**Docker**](https://www.docker.com/) rodando um container PostgreSQL.
```

## Iniciando back-end
```bash
  # Entrar no diretório do back-end:
  $ cd backend
  # Instalar as dependências:
  $ yarn
  # Rodar as migrations:
  $ yarn typeorm migration:run
  # Rodar a aplicação:
  $ yarn dev:server
```
