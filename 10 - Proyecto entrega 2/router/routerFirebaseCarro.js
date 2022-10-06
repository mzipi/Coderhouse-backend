import { Router } from 'express';
const router = Router();
import { firebaseCarro } from "../daos/index.js";

router.get('/:id/productos', ({ params }, res) => {
    firebaseCarro.getById(params.id).then(n => res.json(n));
});

router.post('/', (req, res) => {
    firebaseCarro.newCart().then(res.end());
});

router.post('/:id/productos', ({ params, body }, res) => {
    firebaseCarro.add(params.id, body).then(res.end());
});

router.delete('/:id', ({ params }, res) => {
    firebaseCarro.deleteCart(params.id).then(res.end());
});

router.delete('/:id/productos/:id_prod', ({ params }, res) => {
    firebaseCarro.deleteItem(params.id, params.id_prod).then(res.end());
});

export default router;