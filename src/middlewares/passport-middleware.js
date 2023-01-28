import passport from 'passport';
import LocalStrategy from 'passport-local';
import Users from '../models/users-model.js';
import bcrypt from 'bcrypt';
import { infoLog } from './logger.js';
import { JWT_SECRET } from '../config/config.js';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

passport.serializeUser((user, done) => {
    done(null, user._id);
});
  
passport.deserializeUser((id, done) => {
    Users.findById(id, (error, user) => done(error, user));
});

passport.use("signup",
    new LocalStrategy({ usernameField: 'email', passReqToCallback: true },
    async (req, email, password, done) => {
        try {
            const user = await Users.findOne({ email })
            if (user) {
                infoLog.info('User already exists');
                return done(null, false)
            }
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(password, salt);
            const newUser = {
                ...req.body,
                password: encryptedPassword
            }
            const userWithId = await Users.create(newUser);
            infoLog.info('User Registration successful');
            return done(null, userWithId);
        } catch (error) {
            infoLog.info('Error in SignUp: ');
            return done(error);
        }
    }
));

passport.use("login",
    new LocalStrategy({ usernameField: 'email' },
        async (email, password, done) => {
            try {
                const user = await Users.findOne({ email })
                if (!user) {
                    infoLog.info('User Not Found with username ' + email);
                    return done(null, false);
                }
                if (!await bcrypt.compare(password, user.password)) {
                    infoLog.info('Invalid Password');
                    return done(null, false);
                }
                infoLog.info('Login successful');
                return done(null, user);
            } catch (error) {
                return done(error);
            };
        }
    )
);

passport.use(
    new JwtStrategy({
            jwtFromRequest: ExtractJwt.fromHeader("authorization"),
            secretOrKey: JWT_SECRET,
        },
        async (token, done) => {
            try {
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        }
    )
);

export default passport;