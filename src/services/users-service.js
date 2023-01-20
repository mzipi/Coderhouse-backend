import crypto from 'crypto'
import { users } from '../dao/dao-factory.js';
import UsersRepository from '../repositories/users-repository.js';
import User from '../dto/create-user-dto.js';

function idGenerator() {
    const id = crypto.randomBytes(10).toString('hex')
    return id;
}

export default class UsersService {
    constructor() {
        this.userRepository = new UsersRepository(users);
    }

    async setData({body}) {
        const user = new User({
            id: idGenerator(),
            ...body
        });
        await this.userRepository.setData(user);
        return user.asDto();
    }

    async getData() {
        const users = await this.userRepository.getData();
        return users.map(user => user.asDto());
    }
}