import { Router } from 'express';
const router = Router();
import { archivoCarro } from "../daos/index.js";

router.get('/:id/productos', ({ params }, res) => {
    archivoCarro.getById(params.id).then(n => res.send(n));
});

router.post('/', (req, res) => {
    archivoCarro.newCart().then(res.end());
});

router.post('/:id/productos', ({ params, body }, res) => {
    archivoCarro.add(params.id, body).then(res.end());
});

router.delete('/:id', ({ params }, res) => {
    archivoCarro.deleteCart(params.id).then(res.end());
});

router.delete('/:id/productos/:id_prod', ({ params }, res) => {
    archivoCarro.deleteItem(params.id, params.id_prod).then(res.end());
});

export default router;