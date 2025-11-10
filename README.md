# Projeto de Testes Automatizados com Cypress

Este projeto tem como objetivo demonstrar aos alunos da Mentoria 2.0 como automatizar testes de aplicações web utilizando Cypress e JavaScript. A automação cobre cenários de login, transferência e validação de mensagens, utilizando boas práticas como Custom Commands e geração de relatórios.

## Componentes do Projeto

- **Cypress**: Framework principal para automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para facilitar e organizar a escrita dos testes, localizados em `cypress/support/commands/`.
- **Relatórios**: Geração de relatórios automáticos com o `cypress-mochawesome-reporter`, disponíveis em `cypress/reports/html/`.
- **Fixtures**: Dados de teste em arquivos JSON, como credenciais, em `cypress/fixtures/`.
- **Testes**: Casos de teste organizados em arquivos como `cypress/e2e/login.cy.js` e `cypress/e2e/transferencia.cy.js`.

## Pré-requisitos

- Node.js instalado
- API [banco-api](https://github.com/juliodelimas/banco-api) em execução
- Aplicação Web [banco-web](https://github.com/juliodelimas/banco-web) em execução

## Instalação

1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Certifique-se de que a API e a aplicação Web estejam rodando localmente.

## Execução dos Testes

- Para rodar os testes em modo interativo:
  ```bash
  npx cypress open
  ```
- Para rodar os testes em modo headless e gerar relatórios:
  ```bash
  npx cypress run
  ```
  Os relatórios serão gerados em `cypress/reports/html/index.html`.

## Estrutura dos Testes

- Os testes estão organizados por funcionalidades, por exemplo:
  - `login.cy.js`: Testes de login com dados válidos e inválidos
  - `transferencia.cy.js`: Testes de transferência entre contas

## Custom Commands

Os Custom Commands estão definidos em `cypress/support/commands/` e facilitam ações recorrentes, como:

- `cy.fazerLoginComCredenciaisValidas()`: Realiza login com dados válidos
- `cy.fazerLoginComCredenciaisInvalidas()`: Tenta login com dados inválidos
- `cy.verificarMensagemNoToast(mensagem)`: Valida mensagens exibidas em toast

## Relatórios

Após a execução dos testes, acesse o relatório em:
```
cypress/reports/html/index.html
```

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests para melhorias ou correções.

---
Mentoria 2.0 - Automação de Testes com Cypress
