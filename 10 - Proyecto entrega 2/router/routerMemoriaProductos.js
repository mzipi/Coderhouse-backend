import { Router } from 'express';
const router = Router();
import { memoriaProductos } from "../daos/index.js";

router.get('/:id?', ({ params }, res) => {
    if(params.id) {
        memoriaProductos.getById(params.id).then(n => res.json(n));
    } else {
        memoriaProductos.getAll().then(n => res.json(n));
    }
});

router.post('/', ({ body }, res) => {
    memoriaProductos.save(body).then(res.end());
});

router.put('/:id', ({ params, body}, res) => {
    memoriaProductos.update(params.id, body).then(res.end());
});

router.delete('/:id', ({ params }, res) => {
    memoriaProductos.deleteById(params.id).then(res.end());
});

export default router;