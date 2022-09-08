const express = require('express');
const app = express();

const path = require('path');
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);

const handlebars = require('express-handlebars');

const products = require('./routes/products');
const cart = require('./routes/cart');

const port = process.env.port || 8080;
let admin = false;

app.engine('handlebars', handlebars.engine());

app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/api/productos', products);
app.use('/api/carro', cart);

io.on('connection', (socket) => {
    // console.log('a user connected');
    // socket.on('disconnect', () => console.log('user disconnected'));
    socket.on('chat message', (msg) => io.emit('chat message', msg));
    socket.on('add item', (product) => io.emit('add item', product));
});

server.listen(port/*, () => console.log(`Servidor corriendo en puerto ${port}`)*/);