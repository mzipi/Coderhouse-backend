import { genSalt, hash, compare } from "bcrypt";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "./models.js";
import logger from "../api/logger.js";

const passportMiddleware = passport.initialize();
const passportSessionHandler = passport.session();

passport.use("signup", new LocalStrategy({ passReqToCallback: true },
    async (req, username, password, done) => {
        
        let user;
        
        try {
            user = await User.findOne({ 'username': username })
        } catch (err) {
            logger.error('Error in SignUp: ');
            return done(err);
        }

        if (user) {
            logger.info('User already exists');
            return done(null, false)
        }

        const newUser = {
            email: username,
            password: await createHash(password),
            name: req.body.name,
            address: req.body.address,
            age: req.body.age,
            phone: req.body.phone,
            image: req.body.image
        }

        let userWithId;

        try {
            userWithId = await User.create(newUser)
        } catch (error) {
            logger.error('Error in Saving user: ');
            return done(err);
        }

        logger.info('User Registration successful');
        return done(null, userWithId);
    }
));

passport.use("login", new LocalStrategy(
    async (username, password, done) => {
        
        let user;

        try {
            user = await User.findOne({ username })
        } catch (error) {
            return done(err);
        }

        if (!user) {
            logger.info('User Not Found with username ' + username);
            return done(null, false);
        }

        if (!await isValidPassword(user, password)) {
            logger.info('Invalid Password');
            return done(null, false);
        }

        logger.info('Login successful');
        return done(null, user);
    }
));

passport.serializeUser((user, done) => {
    done(null, user._id);
});
  
passport.deserializeUser((id, done) => {
    User.findById(id, done);
});

async function createHash(password) {
    const salt = await genSalt(10);
    return await hash(password, salt);
}
  
async function isValidPassword(user, password) {
    return await compare(password, user.password);
}

export { 
    passportMiddleware, 
    passportSessionHandler
};