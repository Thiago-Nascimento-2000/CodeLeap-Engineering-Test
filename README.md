# CodeLeap Test

Este projeto foi desenvolvido como parte do **teste técnico da CodeLeap**.  
A proposta foi criar uma aplicação simples em **React** que consome a API pública deles para implementar um **CRUD de posts**.

API utilizada:  
https://dev.codeleap.co.uk/careers/

---

## Sobre o projeto

A aplicação começa com uma tela simples solicitando um **username**.  
Após entrar, o usuário pode criar novos posts, visualizar os posts existentes e também editar ou deletar apenas os posts que ele mesmo criou.

Para melhorar a experiência, o **username é salvo no localStorage**, permitindo que a sessão continue ativa mesmo após atualizar a página.

---

## O que é possível fazer

- Entrar na aplicação informando um **username**
- Criar novos posts (título e conteúdo)
- Visualizar a lista de posts retornados pela API
- Editar posts criados pelo próprio usuário
- Deletar posts criados pelo próprio usuário
- Fazer logout da aplicação

---

## Tecnologias utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Redux Toolkit**
- **TailwindCSS**
- **Axios**

---

## Como rodar o projeto

Instale as dependências:
- npm install

Depois inicie o servidor de desenvolvimento:
- npm rum dev

O Vite exibirá no terminal o endereço da aplicação, normalmente:
- http://localhost:5173

