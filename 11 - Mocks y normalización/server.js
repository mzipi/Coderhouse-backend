import express, { json, urlencoded } from 'express';

// import { join } from 'path';
import { createServer } from 'http';

import { Server } from 'socket.io';

import { engine } from 'express-handlebars';

import test_router from './router/test-router.js';
import products_router from './router/products-router.js';
import msg_router from './router/messages-router.js';
import index_router from './router/index-router.js';

const app = express();
const server = createServer(app);
const io = new Server(server);
const port = 8080;

app.engine('handlebars', engine());

app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(urlencoded({extended: true}));
app.use(json());
app.use(express.static('./public'));
app.use('/api/productos-test', test_router);
app.use('/api/productos', products_router);
app.use('/api/mensajes', msg_router);
app.use('/', index_router);

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => io.emit('chat message', msg));
    socket.on('add item', (product) => io.emit('add item', product));
});

server.listen(port);

server.on('error', err => console.log(err));