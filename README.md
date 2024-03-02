# Trybe Wallet Project

## Visão Geral

Este projeto front-end foi desenvolvido durante a formação do curso de Desenvolvimento Web Full Stack na Trybe. Utilizando React e Redux, o Trybe Wallet é uma aplicação que consome a API `economia.awesomeapi` para realizar operações financeiras e gerenciar despesas em diferentes moedas. O objetivo é praticar conhecimentos avançados adquiridos durante o curso, focando na gestão de estado com Redux em aplicações React.

## Tecnologias e Bibliotecas Utilizadas

- React.js
- Redux
- CSS
- Redux-thunk (para operações assíncronas)
- @redux-devtools/extension (para debugging de Redux)

## Funcionalidades Principais

O Trybe Wallet permite aos usuários:
- Adicionar despesas em diferentes moedas.
- Visualizar um resumo das despesas adicionadas e convertidas para BRL (Real Brasileiro).
- Editar e excluir despesas registradas.

## Configuração do Ambiente

Este projeto foi configurado e desenvolvido com as ferramentas e suporte fornecidos pela Trybe, garantindo que todas as dependências necessárias estejam incluídas e configuradas adequadamente para desenvolvimento e execução.

## Instruções de Instalação

Para instalar e rodar o Trybe Wallet localmente, siga os passos abaixo:

1. Clone o repositório:
```bash
git clone URL_DO_REPOSITORIO

2. Entre no diretório do projeto:
cd NOME_DO_DIRETORIO

3. Instale as dependências:
npm install

4. Execute a aplicação:
npm start

## Uso
Após iniciar a aplicação, você pode começar a adicionar despesas, especificando detalhes como valor, descrição, moeda, método de pagamento e categoria. As despesas adicionadas são exibidas em uma tabela, onde podem ser editadas ou excluídas conforme necessário.

## Código de Exemplo
A configuração da Redux store é crucial para o gerenciamento de estado nesta aplicação:

import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;

## Licença

Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo LICENSE no repositório.

## Contato

Para mais informações, entre em contato comigo:

- Telefone: (48) 99611-7767
- E-mail: antonioggt85@gmail.com
- LinkedIn: https://www.linkedin.com/in/antonio-g-teixeira/
