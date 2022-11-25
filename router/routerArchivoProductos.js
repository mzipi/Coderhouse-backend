import { Router } from 'express';
const router = Router();
import { archivoProductos } from "../daos/index.js";

router.get('/:id?', ({ params }, res) => {
    if(params.id) {
        archivoProductos.getById(params.id).then(n => res.json(n));
    } else {
        archivoProductos.getAll().then(n => res.json(n));
    }
});

router.post('/', ({ body }, res) => {
    archivoProductos.save(body).then(res.end());
});

router.put('/:id', ({ params, body}, res) => {
    archivoProductos.update(params.id, body).then(res.end());
});

router.delete('/:id', ({ params }, res) => {
    archivoProductos.deleteById(params.id).then(res.end());
});

export default router;