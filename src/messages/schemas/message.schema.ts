import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema({ timestamps: true })
export class Message {
    @Prop({ type: Object})
    author: {
        email: string
    };

    @Prop()
    text: string;

    @Prop()
    createdAt: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);