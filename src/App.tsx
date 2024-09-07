import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { io, Socket } from 'socket.io-client';

interface Position {
  x: number;
  y: number;
}

interface Component {
  id: string;
  name: string;
  position: Position;
}

interface Client {
  id: string;
  color: string;
  cursor: Position;
  name: string;
}

export default function App() {
  const [components, setComponents] = useState<Component[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    newSocket.on('updateComponents', (updatedComponents: Component[]) => {
      setComponents(updatedComponents);
    });

    newSocket.on('updateClients', (updatedClients: Client[]) => {
      setClients(updatedClients);
    });

    const handleMouseMove = (e: MouseEvent) => {
      newSocket.emit('updateCursor', { x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      newSocket.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleDrag = (id: string, data: { x: number; y: number }) => {
    const updatedComponents = components.map(component =>
      component.id === id ? { ...component, position: data } : component
    );
    setComponents(updatedComponents);
    socket?.emit('updateComponent', { id, position: data });
  };

  const handleNameChange = (id: string, newName: string) => {
    const updatedComponents = components.map(component =>
      component.id === id ? { ...component, name: newName } : component
    );
    setComponents(updatedComponents);
    socket?.emit('updateComponentName', { id, name: newName });
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setUserName(newName);
    socket?.emit('updateName', newName);
  };

  return (
    <div>
      <h1>Componentes interativos via WebSocket Client</h1>
      <input
        type="text"
        value={userName}
        onChange={handleUserNameChange}
        placeholder="Digite seu nome"
        className="user-name-input"
      />
      {components.map(component => (
        <Draggable
          key={component.id}
          position={component.position}
          onDrag={(_, data) => handleDrag(component.id, { x: data.x, y: data.y })}
        >
          <div className="draggable-component">
            <input
              value={component.name}
              onChange={(e) => handleNameChange(component.id, e.target.value)}
              className="component-name-input"
            />
          </div>
        </Draggable>
      ))}
      {clients.filter(client => client.id !== socket?.id).map(client => (
        <div 
          key={client.id} 
          className="cursor-container"
          style={{
            left: client.cursor.x,
            top: client.cursor.y,
          }}
        >
          <div className="cursor-name">{client.name}</div>
          <div
            className="cursor"
            style={{
              backgroundColor: client.color
            }}
          />
        </div>
      ))}
    </div>
  );
};