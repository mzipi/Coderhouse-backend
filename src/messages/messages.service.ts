import { Injectable } from '@nestjs/common';
import { Messages } from 'src/interfaces/messages.interface';

@Injectable()
export class MessagesService {
    private readonly messages: Messages[] = [];

    create(message: Messages) {
        this.messages.push(message);
    }

    findAll(): Messages[] {
        return this.messages;
    }
}
