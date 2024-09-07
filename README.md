# Interactive Draggable App com WebSocket

Este projeto é uma aplicação web interativa que permite aos usuários mover componentes na tela e ver os cursores de outros usuários em tempo real. Ele utiliza React com TypeScript no frontend e Node.js com Socket.IO no backend para proporcionar uma experiência em tempo real.

## Características

- Componentes arrastáveis na interface
- Edição do nome dos componentes em tempo real
- Visualização dos cursores de outros usuários conectados
- Nomes de usuários exibidos acima dos cursores
- Sincronização em tempo real via WebSocket

## Tecnologias Utilizadas

- Frontend:
  - React
  - TypeScript
  - Vite
  - react-draggable
  - socket.io-client

- Backend:
  - Node.js
  - Express
  - Socket.IO

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

- Clone o repositório:
  - git clone https://github.com/kristyancarvalho/interactive-draggable-app.git 
  - cd interactive-draggable-app

- Instale as dependências do frontend:
  - npm install

- Navegue até a pasta do servidor e instale as dependências:
  - cd server 
  - npm install

## Executando a Aplicação

1. Inicie o servidor backend:
cd server 
npm start

2. Em outro terminal, inicie o frontend:
npm run dev

3. Abra seu navegador e acesse `http://localhost:5173`

## Como Usar

- Digite seu nome no campo de texto no topo da página.
- Arraste os componentes pela tela.
- Edite o nome dos componentes clicando no campo de texto dentro deles.
- Observe os cursores e nomes de outros usuários conectados movendo-se pela tela.