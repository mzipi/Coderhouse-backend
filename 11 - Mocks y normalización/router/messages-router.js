import { Router } from 'express';
const router = Router();
import Contenedor from '../contenedores/messages-class.js';
const data = new Contenedor();

router.get('/', (req, res) => {
    data.getAll().then(n => res.send(n));
});

router.post('/', ({ body }, res) => {
    data.save(body).then(res.end());
});

export default router;