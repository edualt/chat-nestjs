import { OnModuleInit } from "@nestjs/common";
import { WebSocketGateway, SubscribeMessage, MessageBody } from "@nestjs/websockets";
import { WebSocketServer } from "@nestjs/websockets/decorators";
import { Server } from "socket.io";

@WebSocketGateway({
  cors: { origin: '*' }
})
export class ChatGateway implements OnModuleInit {
  @WebSocketServer() server: Server;

  onModuleInit() {
    this.server.on("connection", (socket) => {
      console.log(socket.id);
      console.log("Connected");
    })
  }

  @SubscribeMessage('newMessage')
  handleMessages(@MessageBody() body: any) {
    console.log(body)
    this.server.emit('onMessage', {
      msg: "New message",
      content: body
    });
  }
}