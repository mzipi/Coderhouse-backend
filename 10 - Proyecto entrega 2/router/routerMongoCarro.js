import { Router } from 'express';
const router = Router();
import { mongoCarro } from "../daos/index.js";

router.get('/:id/productos', ({ params }, res) => {
    mongoCarro.getById(params.id).then(n => res.json(n));
});

router.post('/', (req, res) => {
    mongoCarro.newCart().then(res.end());
});

router.post('/:id/productos', ({ params, body }, res) => {
    mongoCarro.add(params.id, body).then(res.end());
});

router.delete('/:id', ({ params }, res) => {
    mongoCarro.deleteCart(params.id).then(res.end());
});

router.delete('/:id/productos/:id_prod', ({ params }, res) => {
    mongoCarro.deleteItem(params.id, params.id_prod).then(res.end());
});

export default router;