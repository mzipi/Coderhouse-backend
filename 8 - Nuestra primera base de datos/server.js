const express = require('express');
const app = express();

const path = require('path');
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);

const handlebars = require('express-handlebars');

// const api_router = require('./routes/api_router');
const main_router = require('./routes/main-router');

const port = 8080;

app.engine('handlebars', handlebars.engine());

app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/src')));
// app.use('/api/productos', api_router);
app.use('/', main_router);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => console.log('user disconnected'));
    socket.on('chat message', (msg) => io.emit('chat message', msg));
    socket.on('add item', (product) => io.emit('add item', product));
});

server.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));