import { getToken, objectFromToken } from '../middlewares/jwt.js';
import passport from 'passport';

export async function getUsersController(req, res, next) {
    if(req.isAuthenticated()) {
        await objectFromToken(req, res, next);
        res.json(req.user);
    } else {
        res.json({ resource: 'inaccessible'})
    };
}

export async function postUsersController(req, res, next) {
    passport.authenticate('signup', { session: false })(req, res, next);
    const token = await getToken(req.body);
    res.json({ token });
};