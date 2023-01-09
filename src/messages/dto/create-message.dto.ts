export class CreateMessageDto {
    readonly author: { email: string };
    readonly text: string;
    readonly createdAt: string;
}
