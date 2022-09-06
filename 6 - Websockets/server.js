// const express = require('express');
// const { Server: HttpServer } = require('http');
// const { Server: IOServer } = require('socket.io');

// const app = express();
// const httpServer = new HttpServer(app);
// const io = new IOServer(httpServer);

// app.use(express.static('./public'));
// app.get('/', (req, res) => {
//     res.sendFile('index.html', { root: __dirname });
// });

// httpServer.listen(3000, () => console.log('SERVER ON'));

// io.on('connection', (socket) => {
//     console.log('Usuario conectado');
//     socket.emit('mi mensaje', 'Este es mi mensaje desde el servidor');
//     socket.on('notificación', data => console.log(data));
// });

const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const path = require('path');
const api_router = require('./routes/api_router');
const main_router = require("./routes/main-router");
const port = 8080;

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/api/productos', api_router);
app.use('/', main_router);

// app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => console.log('user disconnected'));
    socket.on('chat message', (msg) => console.log('message: ' + msg));
});

server.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));