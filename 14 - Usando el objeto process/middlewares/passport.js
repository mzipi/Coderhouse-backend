const passport = require("passport");
const Strategy = require("passport-local");
const { MongoClient } = require("mongodb");
const { USR, PWD, DB } = require("../config");

const uri = `mongodb+srv://${USR}:${PWD}@cluster0.t5mkzof.mongodb.net`;
const client = new MongoClient(uri);

passport.use("signup", new Strategy(
    {
        passReqToCallback: true,
        // usernameField: "email",
        // passwordField: "contrasenia",
    },
    async function (req, username, password, done) {
        try {
            const database = client.db("coderhouse");
            console.log(database);
            const users = database.collection("users");
            const query = { 
                email: req.body.email,
                password: req.body.password
            };
            const user = await users.insertOne(query);
            done(null, user);
        } catch (error) {
            done(null, false, error);
        }
    }
    // function(req, username, password, done) {
    //     try {
    //         const usuario = registrarUsuario(req.body);
    //         done(null, usuario);
    //     } catch (error) {
    //         done(null, false, error);
    //     }
    // }
));

passport.use("login", new Strategy(
    function (username, password, done) {
        try {
            // const usuario = autenticar(username, password);
            
            done(null, usuario);
        } catch (error) {
            done(null, false, error);
        }
    }
));

const passportMiddleware = passport.initialize();

module.exports = passportMiddleware;