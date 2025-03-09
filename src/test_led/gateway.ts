import {
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
  } from '@nestjs/websockets';
  import { Server, WebSocket } from 'ws';
  import { Request } from 'express';
  
  @WebSocketGateway({ path: '/mqtt' })  // Đặt path WebSocket là /mqtt
  export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  
    @WebSocketServer() server: Server;
  
    // Khi có client kết nối
    handleConnection(client: WebSocket, req: Request) {
      console.log('Client connected');
      client.send(JSON.stringify({ message: 'Connected to WebSocket server!',url:req.url }));
  
      // Lắng nghe sự kiện khi client gửi tin nhắn
      client.on('message', (data) => {
        const message = data.toString();
        console.log('Message received from client:', message);
  
        try {
          const parsed = JSON.parse(message);
  
          // Xử lý sự kiện 'message'
          if (parsed.event === 'message') {
            const response = `Server received: ${parsed.data}`;
            console.log('Sending response to client:', response);
            client.send(JSON.stringify({ event: 'response', message: response }));
          }
  
          // Xử lý sự kiện 'ping'
          if (parsed.event === 'ping') {
            console.log('Ping received, sending pong...');
            client.send(JSON.stringify({ event: 'pong', message: 'pong' }));
          }
  
        } catch (error) {
          console.error('Invalid message format:', error);
          client.send(JSON.stringify({ error: 'Invalid message format' }));
        }
      });
    }
  
    // Khi có client ngắt kết nối
    handleDisconnect(client: WebSocket) {
      console.log('Client disconnected');
    }
  }
  