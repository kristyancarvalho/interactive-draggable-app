const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

let components = [
  { id: "1", name: "Componente 1", position: { x: 0, y: 0 } },
  { id: "2", name: "Componente 2", position: { x: 0, y: 150 } },
];

let clients = {};

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

io.on("connection", (socket) => {
  console.log("Um usuário conectou");

  const clientId = socket.id;
  clients[clientId] = {
    id: clientId,
    color: getRandomColor(),
    cursor: { x: 0, y: 0 },
    name: "Anônimo",
  };

  socket.emit("updateComponents", components);
  io.emit("updateClients", Object.values(clients));

  socket.on("updateComponent", (data) => {
    const index = components.findIndex((c) => c.id === data.id);
    if (index !== -1) {
      components[index].position = data.position;
      io.emit("updateComponents", components);
    }
  });

  socket.on("updateComponentName", (data) => {
    const index = components.findIndex((c) => c.id === data.id);
    if (index !== -1) {
      components[index].name = data.name;
      io.emit("updateComponents", components);
    }
  });

  socket.on("updateCursor", (data) => {
    if (clients[clientId]) {
      clients[clientId].cursor = data;
      io.emit("updateClients", Object.values(clients));
    }
  });

  socket.on("updateName", (name) => {
    if (clients[clientId]) {
      clients[clientId].name = name;
      io.emit("updateClients", Object.values(clients));
    }
  });

  socket.on("disconnect", () => {
    console.log("Um usuário desconectou");
    delete clients[clientId];
    io.emit("updateClients", Object.values(clients));
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
