import passport from "passport";
import { getToken } from "../middlewares/jwt.js";

export function postLoginController(req, res, next) {
    passport.authenticate(
        'login',
        async (err, user, info) => {
            try {
                if (err || !user) {
                    const error = new Error('An error occurred.');
                    return next(error);
                }
                req.login(
                    user,
                    { session: false },
                    async (error) => {
                        if (error) return next(error);
                        const token = await getToken(user.email);
                        return res.json({ token });
                    }
                );
            } catch (error) {
                return next(error);
            }
        }
    )(req, res, next);
};