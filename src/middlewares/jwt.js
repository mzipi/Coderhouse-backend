import Jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config.js';

export async function getToken(email) {
    return Jwt.sign({ email }, JWT_SECRET, { expiresIn: '24h' });
}
  
export async function objectFromToken(req, res, next) {
    const authorization = req.headers['authorization'];
    const token = authorization.split(' ')[1];
  
    if(!authorization) res.json({ token: 'missing'});
    if(!token) res.json({ token: 'invalid' });
  
    try {
        const user = Jwt.verify(token, JWT_SECRET);
        return req.user = user;
    } catch(error) {
        return res.json({ permission: 'denied' });
    };
    next();
}