import { express } from "express";
import { session } from "express-session";

const app = express();

var PORT = process.env.port || 8080

app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialize: true
}));

app.get('/login', (req, res) => {
    const { username, password } = req.query;
    if (username !== 'pepe' || password !== 'pepepass') {
        return res.send('login failed');
    };
    req.session.user = username;
    req.session.admin = true;
    res.send('login success!');
})