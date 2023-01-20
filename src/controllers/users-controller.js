import UsersService from '../services/users-service.js';

const users = new UsersService();

export async function getUsersController(req, res) {
    const data = await users.getData();
    res.json(data);
}

export async function postUsersController(req, res) {
    const data = await users.setData(req);
    res.json(data);
}