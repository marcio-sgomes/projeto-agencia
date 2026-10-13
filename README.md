# projeto-agencia

> 📦 Projeto de estudo — não recebe mais atualizações.

Primeira versão (fevereiro de 2022) da landing page de uma agência, feita em React a partir do tema [Start Bootstrap Grayscale](https://startbootstrap.com/theme/grayscale/).

## Contexto

Faz parte de uma série de repositórios do mesmo trabalho (agência de viagens com CRUD de clientes, 2022):

| Repositório | Data | O que é |
|---|---|---|
| **projeto-agencia** | fev/2022 | Primeira landing page em React (este repositório) |
| [Crud-Agencia](https://github.com/marcio-sgomes/Crud-Agencia) | fev/2022 | Primeiro CRUD de clientes em Java Servlets/JSP + JDBC |
| [front-back](https://github.com/marcio-sgomes/front-back) | mar/2022 | Versão intermediária: API Spring Boot + front React |
| [agencia-plus](https://github.com/marcio-sgomes/agencia-plus) | mar/2022 | **Versão final**, com diagramas e script do banco |

## Tecnologias

- React 17 (Create React App).
- CSS do tema Grayscale (Bootstrap) em `src/componentes/styles.css`.

## Estrutura

```
src/componentes/   Nav, Header, About, Projeto, Footer
src/paginas/       Home e Contato
public/img/        Imagens do tema
```

## Como rodar

Pré-requisito: Node.js.

```bash
npm install
npm start      # abre em http://localhost:3000
npm run build  # gera a versão de produção em build/
```
