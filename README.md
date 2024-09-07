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

1. Clone o repositório:
<br />
`git clone https://github.com/kristyancarvalho/interactive-draggable-app.git` 
<br />
`cd interactive-draggable-app`

2. Instale as dependências do frontend:
<br />
`npm install`

3. Navegue até a pasta do servidor e instale as dependências:
<br />
`cd server` 
<br />
`npm install`

## Executando a Aplicação

1. Inicie o servidor backend:
<br />
`cd server` 
<br />
`npm start`

2. Em outro terminal, inicie o frontend:
<br />
`npm run dev`


3. Abra seu navegador e acesse `http://localhost:5173`

## Como Usar

- Digite seu nome no campo de texto no topo da página.
- Arraste os componentes pela tela.
- Edite o nome dos componentes clicando no campo de texto dentro deles.
- Observe os cursores e nomes de outros usuários conectados movendo-se pela tela.

## Estrutura do Projeto

- [src/](cci:7://file:///c:/Users/krist/www/interactive-draggable-app/src:0:0-0:0) - Código fonte do frontend
- `App.tsx` - Componente principal da aplicação
- [server/](cci:7://file:///c:/Users/krist/www/interactive-draggable-app/server:0:0-0:0) - Código fonte do backend
- `server.js` - Servidor Express e lógica do Socket.IO
