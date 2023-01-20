import passport from 'passport';
import LocalStrategy from 'passport-local';
import JwtStrategy, { ExtractJwt } from 'passport-jwt';

import Users from '../models/users-model.js';
import { infoLog } from '../middlewares/logger.js';

const passportMiddleware = passport.initialize();
// const passportSessionHandler = passport.session();

passport.use('signup', new LocalStrategy({ usernameField: 'email' },
    async (email, password, done) => {
        try {
            const userExists = await Users.findOne({ 'email': email });
            if (userExists) {
                infoLog.info('Usuario existente');
                return done(null, false)
            }
            const user = await Users.create({ email, password });
            infoLog.info('Registro de usuario exitoso');
            return done(null, user);
        } catch (error) {
            done(error);
        }
    })
);

passport.use('login', new LocalStrategy({ usernameField: 'email' },
    async (email, password, done) => {
        try {
            const user = await Users.findOne({ 'email': email });
            if (!user) {
                infoLog.info('Usuario no encontrado: ' + email);
                return done(null, false);
            }
            const isMatch = await user.matchPassword(password);
            if (!isMatch) {
                return done(null, false);
            }
            infoLog.info('Inicio de sesión correcto');
            return done(null, user);
        } catch (error) {
            console.log(error)
            return done(error, false);
        }
    })
);

passport.use('jwt', new JwtStrategy.Strategy(
    {
        jwtFromRequest: ExtractJwt.fromHeader("authorization"),
        secretOrKey: "secretKey",
    },
    async (jwtPayload, done) => {
        try {
            const user = jwtPayload.user;
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    }
));

export { 
    passportMiddleware, 
    // passportSessionHandler
};