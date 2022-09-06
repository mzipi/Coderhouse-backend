const express = require('express');

const app = express();
const api_router = require('./routes/api_router');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/api/productos', api_router);

const port = 8080;

const server = app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));

server.on("error", err => console.log(`Error en el servidor: ${err}`))