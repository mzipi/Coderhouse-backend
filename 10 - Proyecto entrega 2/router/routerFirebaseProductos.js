import { Router } from 'express';
const router = Router();
import { firebaseProductos } from "../daos/index.js";

router.get('/:id?', ({ params }, res) => {
    if(params.id) {
        firebaseProductos.getById(params.id).then(n => res.json(n));
    } else {
        firebaseProductos.getAll().then(n => res.json(n));
    }
});

router.post('/', ({ body }, res) => {
    firebaseProductos.save(body).then(res.end());
});

router.put('/:id', ({ params, body}, res) => {
    firebaseProductos.update(params.id, body).then(res.end());
});

router.delete('/:id', ({ params }, res) => {
    firebaseProductos.deleteById(params.id).then(res.end());
});

export default router;