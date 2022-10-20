import express, { json, urlencoded } from 'express';
import handlebars from 'express-handlebars';
import { createServer } from 'http';
import { Server } from "socket.io";
import api_products_router from './router/api_products-router.js';
import index_router from './router/index-router.js';
import products_router from './router/products-router.js';
import msg_router from './router/msg-router.js';
import login_router from './router/login-router.js';
import logout_router from './router/logout-router.js';
import register_router from './router/register-router.js';
import test_router from './router/test-router.js';
import fail_login_router from './router/fail_login-router.js';
import fail_register_router from './router/fail_register-router.js';

const PORT = process.env.port || 8080
const app = express();
const server = createServer(app);
const io = new Server(server);

app.engine('handlebars', handlebars.engine());

app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(urlencoded({extended: true}));
app.use(json());
app.use(express.static('./public'));
app.use('/api/productos', api_products_router);
app.use('/', index_router);
app.use('/productos', products_router)
app.use('/api/mensajes', msg_router);
app.use('/api/productos-test', test_router);
app.use('/login', login_router);
app.use('/logout', logout_router);
app.use('/register', register_router);
app.use('/faillogin', fail_login_router);
app.use('/failregister', fail_register_router);

app.get('/logout?', (req, res) => {
    setTimeout(() => {
        res.redirect('/login');
    }, 2000)
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => io.emit('chat message', msg));
    socket.on('add item', (product) => io.emit('add item', product));
});

server.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

server.on("error", err => console.log(`Error en el servidor: ${err}`));