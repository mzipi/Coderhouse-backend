import { getToken } from "../middlewares/jwt.js";

export async function postLoginController(req, res) {
    if(req.isAuthenticated()) {
        const token = await getToken(req.user);
        res.json({token})
    } else {
        res.json({ login: 'failed' })
    }
};