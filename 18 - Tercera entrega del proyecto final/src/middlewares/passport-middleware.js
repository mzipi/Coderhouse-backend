const passport = require("passport");
const LocalStrategy = require("passport-local");
const { MongoClient } = require("mongodb");
const { MONGO_USR, MONGO_PWD } = require("../config.js");
const User = require("./models.js");
const bCrypt = require("bcrypt");

const uri = `mongodb+srv://${MONGO_USR}:${MONGO_PWD}@cluster0.t5mkzof.mongodb.net`;
const client = new MongoClient(uri);

passport.use("signup", new LocalStrategy(
    { passReqToCallback: true },
    async function (req, username, password, done) {
        try {
            const database = client.db("coderhouse");
            const users = database.collection("users");
            const query = {
                email: username,
                password: createHash(password),
                name: req.body.name,
                lastname: req.body.lastname,
                phone: req.body.phone,
                image: req.body.image
            };
            const user = await users.insertOne(query);
            done(null, user);
        } catch (error) {
            done(null, false, error);
        }
    }
));

passport.use("login", new LocalStrategy(
    function (username, password, done) {
        try {
            // const usuario = autenticar(username, password);
            
            done(null, usuario);
        } catch (error) {
            done(null, false, error);
        }
    }
));

async function createHash(password) {
    const salt = await bCrypt.genSalt(10);
    return await bCrypt.hash(password, salt);
};

const passportMiddleware = passport.initialize();

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, done);
});

const passportSessionHandler = passport.session();

module.exports = { 
    passportMiddleware, 
    passportSessionHandler
};