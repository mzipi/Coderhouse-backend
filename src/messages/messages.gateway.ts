import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@WebSocketGateway({ cors: { origin: '*' }})
export class MessagesGateway {
  constructor(private readonly messagesService: MessagesService) {}

  @WebSocketServer()
  server:Server;

  // @SubscribeMessage('createMessage')
  // async create(@MessageBody() createMessageDto: CreateMessageDto) {
  //   return await this.messagesService.create(createMessageDto);
  // }

  // @SubscribeMessage('findAllMessages')
  // async findAll() {
  //   return await this.messagesService.findAll();
  // }

  // @SubscribeMessage('findOneMessage')
  // async findOne(@MessageBody() id: string) {
  //   return await this.messagesService.findOne(id);
  // }

  // @SubscribeMessage('updateMessage')
  // async update(@MessageBody() updateMessageDto: UpdateMessageDto) {
  //   return await this.messagesService.update(updateMessageDto.id, updateMessageDto);
  // }

  // @SubscribeMessage('removeMessage')
  // async remove(@MessageBody() id: string) {
  //   return await this.messagesService.remove(id);
  // }

  @SubscribeMessage('chat message')
  handleMessage(@MessageBody() message: string): void {
    this.server.emit('chat message', message);
  }

  @SubscribeMessage('add item')
  handleProduct(@MessageBody() product: string): void {
    this.server.emit('add item', product);
  }
}
