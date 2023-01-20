import jwt from "jsonwebtoken";

export function postLoginController(req, res, next) {
    jwt.sign({ user: req.user }, 'secretKey', { expiresIn: '1h'} , (err, token) => {
        if(err) {
            return res.json({
                massgae: "Failed to login",
                token: null
            });
        };
        res.json({ token });
    });
};