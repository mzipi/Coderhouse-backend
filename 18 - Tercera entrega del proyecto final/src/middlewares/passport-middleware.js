const bCrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models.js");

const passportMiddleware = passport.initialize();
const passportSessionHandler = passport.session();

passport.use("signup", new LocalStrategy({ passReqToCallback: true },
    async (req, username, password, done) => {
        
        let user;
        
        try {
            user = await User.findOne({ 'username': username })
        } catch (err) {
            console.log('Error in SignUp: ' + err);
            return done(err);
        }

        if (user) {
            console.log('User already exists');
            return done(null, false)
        }

        const newUser = {
            username,
            password: await createHash(password),
            name: req.body.name,
            lastName: req.body.lastName,
            phone: req.body.phone,
            image: req.body.image
        }

        let userWithId;

        try {
            userWithId = await User.create(newUser)
        } catch (error) {
            console.log('Error in Saving user: ' + err);
            return done(err);
        }

        console.log(user)
        console.log('User Registration successful');
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
            console.log('User Not Found with username ' + username);
            return done(null, false);
        }

        if (!await isValidPassword(user, password)) {
            console.log('Invalid Password');
            return done(null, false);
        }

        console.log(user)
        console.log('Login successful');
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
    const salt = await bCrypt.genSalt(10);
    return await bCrypt.hash(password, salt);
}
  
async function isValidPassword(user, password) {
    return await bCrypt.compare(password, user.password);
}

module.exports = { 
    passportMiddleware, 
    passportSessionHandler
};