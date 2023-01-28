import UsersService from '../services/users-service.js';
import { getToken, objectFromToken } from '../middlewares/jwt.js';
import passport from 'passport';

const users = new UsersService();

export async function getUsersController(req, res, next) {
    await objectFromToken(req, res, next);
    res.json(req.user);
}

export async function postUsersController(req, res, next) {
    passport.authenticate('signup', { session: false })(req, res, next);
    const token = await getToken(req.body);
    res.json({ token });
};