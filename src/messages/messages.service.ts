import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message, MessageDocument } from './schemas/message.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) 
    private readonly messageModel: Model<MessageDocument>
  ) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const createdMessage = await this.messageModel.create(createMessageDto);
    return createdMessage;
  }

  async findAll(): Promise<Message[]> {
    return await this.messageModel.find().exec();
  }

  async findOne(id: string): Promise<Message> {
    return await this.messageModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateMessageDto: UpdateMessageDto) {
    return await this.messageModel.findOneAndUpdate({ id }, { $set: updateMessageDto });
  }

  async remove(id: string) {
    const deletedMessage = await this.messageModel
      .findByIdAndRemove({ _id: id})
      .exec();
    return deletedMessage;
  }
}