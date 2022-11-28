import passport from "passport";
import Strategy from "passport-local";
import { MongoClient } from "mongodb";
import { MONGO_URL1 } from "../config.js";

const uri = MONGO_URL1;
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

export default passportMiddleware;