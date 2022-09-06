const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const api_router = require('./routes/api_router');
const main_router = require("./routes/main-router");

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/api/productos', api_router);
app.use('/', main_router);

const port = 8080;

const server = app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));

server.on("error", err => console.log(`Error en el servidor: ${err}`));
