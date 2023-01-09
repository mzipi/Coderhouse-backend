import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Message } from './schemas/message.schema';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('api/messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @Post()
    async create(@Body() createMessageDto: CreateMessageDto) {
      return await this.messagesService.create(createMessageDto);
    }
  
    @Get()
    async findAll(): Promise<Message[]> {
      return this.messagesService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Message> {
      return this.messagesService.findOne(id);
    }
  
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
      return this.messagesService.update(id, updateMessageDto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string) {
      return this.messagesService.remove(id);
    }
}
