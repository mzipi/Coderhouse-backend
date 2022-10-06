import { Router } from 'express';
const router = Router();
import { mongoProductos } from "../daos/index.js";

router.get('/:id?', ({ params }, res) => {
    if(params.id) {
        mongoProductos.getById(params.id).then(n => res.json(n));
    } else {
        mongoProductos.getAll().then(n => res.json(n));
    }
});

router.post('/', ({ body }, res) => {
    mongoProductos.save(body).then(res.end());
});

router.put('/:id', ({ params, body}, res) => {
    mongoProductos.update(params.id, body).then(res.end());
});

router.delete('/:id', ({ params }, res) => {
    mongoProductos.deleteById(params.id).then(res.end());
});

export default router;