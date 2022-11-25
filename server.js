const express = require('express');
const app = express();

const path = require('path');
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);

const handlebars = require('express-handlebars');

const products_router = require('./routes/products-router');
const msg_router = require('./routes/messages-router');
const index_router = require('./routes/index-router');

const port = 8080;

app.engine('handlebars', handlebars.engine());

app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/api/productos', products_router);
app.use('/api/mensajes', msg_router);
app.use('/', index_router);

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => io.emit('chat message', msg));
    socket.on('add item', (product) => io.emit('add item', product));
});

server.listen(port);