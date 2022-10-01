import { Router } from 'express';
const router = Router();
import options from '../options/sqlite3.js';
import Contenedor from '../contenedores/messages-class.js';
const data = new Contenedor(options, 'messages');

router.get('/', (req, res) => {
    data.getAll().then(n => res.send(n));
});

router.post('/', ({ body }, res) => {
    data.save(body).then(res.end());
});

export default router;