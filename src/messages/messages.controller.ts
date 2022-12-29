import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMsgDto } from '../dto/create-msg.dto';
import { Messages } from 'src/interfaces/messages.interface';

@Controller('api/messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @Post()
    async create(@Body() createMsgDto: CreateMsgDto) {
        this.messagesService.create(createMsgDto);
    }

    @Get()
    async findAll(): Promise<Messages[]> {
        return this.messagesService.findAll();
    }
}
