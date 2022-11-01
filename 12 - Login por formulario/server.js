import express from "express";
import handlebars from 'express-handlebars';
import login_router from './router/login-router.js';
import logout_router from './router/logout-router.js';

const PORT = process.env.port || 8080
const app = express();

app.engine('handlebars', handlebars.engine());

app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./public'));
app.use('/login', login_router);
app.use('/logout', logout_router);

app.get('/logout?', (req, res) => {
    setTimeout(() => {
        res.redirect('/login');
    }, 2000)
})

app.listen(PORT);