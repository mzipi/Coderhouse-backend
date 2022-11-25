import { Router } from 'express';
const router = Router();
import { memoriaCarro } from "../daos/index.js";

router.get('/:id/productos', ({ params }, res) => {
    memoriaCarro.getById(params.id).then(n => res.json(n));
});

router.post('/', (req, res) => {
    memoriaCarro.newCart().then(res.end());
});

router.post('/:id/productos', ({ params, body }, res) => {
    memoriaCarro.add(params.id, body).then(res.end());
});

router.delete('/:id', ({ params }, res) => {
    memoriaCarro.deleteCart(params.id).then(res.end());
});

router.delete('/:id/productos/:id_prod', ({ params }, res) => {
    memoriaCarro.deleteItem(params.id, params.id_prod).then(res.end());
});

export default router;